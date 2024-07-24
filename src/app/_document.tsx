
import React from 'react'; // Asegúrate de importar React
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles'; // Para manejar estilos de Material-UI en el servidor
import theme from './theme'; // Asegúrate de que la ruta sea correcta

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/* Puedes agregar otros elementos <meta> o enlaces aquí */}
          <meta name="description" content="Descripción de tu aplicación" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {/* Agrega el favicon */}
          <link rel="icon" href="/favicon.ico" />
          {/* Agrega el stylesheet de Material-UI */}
          <style id="jss-server-side">{this.props.styles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Este método se usa para extraer los estilos de Material-UI en el servidor
MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

export default MyDocument;
