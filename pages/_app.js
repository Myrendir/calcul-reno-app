import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({Component, pageProps}) {
    const name = Component.title === undefined ? Component.name : Component.title;

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Calcul Reno - {name}</title>
            </Head>
            <Component {...pageProps} />
        </>

    );
}

export default MyApp;