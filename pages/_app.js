import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
function MyApp({Component, pageProps}) {
    return (<>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Calcul Reno</title>
            </Head><Component {...pageProps} /></>
    );
}

export default MyApp;