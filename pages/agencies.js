export default function Agencies({agencies}) {
    return <>
        <main>
            <ul>
                {agencies.map(agency =>
                    // eslint-disable-next-line react/jsx-key
                    <li><p>{agency.id + " " + agency.code + " " + agency.libelle}</p></li>
                )}
            </ul>
        </main>
    </>
}

export async function getStaticProps({params}) {
    const agencies = await fetch('http://88.168.248.140:8000/agencies').then(r => r.json())
    console.log(agencies)
    return {
        props: {
            agencies
        }
    }
}