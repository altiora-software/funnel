import { useEffect, useState } from "react";
import useScript from "./useScript";
import { formConfig } from "../hooks/formConfig";

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

type ResultPayment = Record<string, any> | Error | undefined;

export default function useMercadoPago(): ResultPayment {
    const [resultPayment, setResultPayment] = useState<ResultPayment>(undefined);

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
                            .then((data) => setResultPayment(data))
                            .catch((err) => setResultPayment(err));
                    },

                    onFetching: (resource: any) => {
                        // Animate progress bar
                        const progressBar = document.querySelector(".progress-bar") as HTMLProgressElement | null;
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

    return resultPayment;
}
