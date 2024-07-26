import React, { useEffect, useState } from "react";
import useScript from "../hooks/useScript";
import { formConfig } from "../hooks/formConfig";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import useMercadoPago from "../hooks/useMercadoPago";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

initMercadoPago(process.env.NEXT_PUBLIC_VITE_PUBLIC_KEY_MP ?? '');

interface CardFormData {
    paymentMethodId: string;
    issuerId: string;
    cardholderEmail: string;
    amount: string;
    token: string;
    installments: string;
    identificationNumber: string;
    identificationType: string;
}

interface State {
    cvc: string;
    cardExpirationMonth: string;
    cardExpirationYear: string;
    focus: string;
    cardholderName: string;
    cardNumber: string;
    issuer: string;
}

const INITIAL_STATE: State = {
    cvc: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    focus: "cardNumber",
    cardholderName: "",
    cardNumber: "",
    issuer: "",
};

export default function MercadoPagoForm() {
    const [state, setState] = useState<State>(INITIAL_STATE);
    const [dataResultPayment, setDataResultPayment] = useState<any>({});
    const resultPayment = useMercadoPago();
    const { MercadoPago }: { MercadoPago?: any } = useScript(
        "https://sdk.mercadopago.com/js/v2",
        "MercadoPago"
    );

    useEffect(() => {
        if (MercadoPago) {
            const mp = new MercadoPago(process.env.NEXT_PUBLIC_VITE_PUBLIC_KEY_MP ?? '');
            const cardForm = mp.cardForm({
                amount: "100.5",
                autoMount: true,
                form: formConfig,
                callbacks: {
                    onFormMounted: (error: Error | null) => {
                        if (error) {
                            console.warn("Form Mounted handling error: ", error);
                        }
                    },
                    onIssuersReceived: (error: Error | null, issuers: any) => {
                        if (error) {
                            console.warn("Issuers handling error: ", error);
                        } else {
                            console.log("Issuers received: ", issuers);
                        }
                    },
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();

                        const cardData: CardFormData = cardForm.getCardFormData();

                        fetch(
                            `${process.env.NEXT_PUBLIC_VITE_URL_PAYMENT_MP ?? ''}/process-payment`,
                            {
                                method: "POST",
                                headers: {
                                    "Access-Control-Allow-Origin": "*",
                                    "Access-Control-Request-Method": "GET, POST, DELETE, PUT, OPTIONS",
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    token: cardData.token,
                                    issuer_id: cardData.issuerId,
                                    payment_method_id: cardData.paymentMethodId,
                                    transaction_amount: 1000,
                                    installments: Number(cardData.installments),
                                    description: "Descripción del producto",
                                    payer: {
                                        email: cardData.cardholderEmail,
                                        identification: {
                                            type: cardData.identificationType,
                                            number: cardData.identificationNumber,
                                        },
                                    },
                                }),
                            }
                        )
                            .then((res) => res.json())
                            .then((data) =>{ 
                                setDataResultPayment(data)
                                console.log('dataResultPayment', dataResultPayment);
                            })
                            .catch((err) => {
                                setDataResultPayment(err);
                            });
                    },
                    onFetching: (resource: any) => {
                        // Animate progress bar
                        const progressBar = document.querySelector(".progress-bar") as HTMLProgressElement;
                        if (progressBar) {
                            progressBar.removeAttribute("value");

                            return () => {
                                progressBar.setAttribute("value", "0");
                            };
                        }
                    },
                },
            });
        }
    }, [MercadoPago]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [e.target.dataset.name || e.target.name]: e.target.value,
        });
    };

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setState({ ...state, focus: e.target.dataset.name || e.target.name });
    };

    return (
        <>
            <Wallet initialization={{ preferenceId: "wallet_container" }} customization={{ texts:{ valueProp: 'smart_option'}}}/>
            <div id="wallet_container">
                    {/* {resultPayment && <p>{JSON.stringify(resultPayment)}</p>}
                    <Card
                        cvc={state.cvc}
                        expiry={state.cardExpirationMonth + state.cardExpirationYear}
                        name={state.cardholderName}
                        number={state.cardNumber}
                    />
                <form id="form-checkout">
                    <div className="form-control">
                        <input
                            type="tel"
                            name="cardNumber"
                            id="form-checkout__cardNumber"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="tel"
                            name="cardExpirationMonth"
                            id="form-checkout__cardExpirationMonth"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                        <input
                            type="tel"
                            name="cardExpirationYear"
                            id="form-checkout__cardExpirationYear"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                        <input
                            type="tel"
                            name="cvc"
                            id="form-checkout__securityCode"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            name="cardholderName"
                            id="form-checkout__cardholderName"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                        <input
                            type="email"
                            name="cardholderEmail"
                            id="form-checkout__cardholderEmail"
                            onFocus={handleInputFocus}
                        />
                    </div>
                    <div className="form-control">
                        <select name="issuer" id="form-checkout__issuer"></select>
                        <select name="identificationType" id="form-checkout__identificationType"></select>
                    </div>
                    <div className="form-control">
                        <input
                            type="text"
                            name="identificationNumber"
                            id="form-checkout__identificationNumber"
                        />
                    </div>
                    <div className="form-control">
                        <select name="installments" id="form-checkout__installments"></select>
                    </div>
                    <div className="form-control">
                        <button type="submit" id="form-checkout__submit">
                            Pagar
                        </button>
                    </div>
                    <progress value="0" className="progress-bar">
                        Cargando...
                    </progress>
                </form> */}
            </div>
        </>
    );
}
