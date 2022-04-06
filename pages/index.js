import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

    return (
        <>
            <Head>
                <title>Nba app</title>
                <Link href={'/agencies'}><button>Agencies</button></Link>
            </Head>
        </>
    )
}
