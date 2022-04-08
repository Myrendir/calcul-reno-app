export default function Workunits({workunits}) {

    return <>
        <main>
            <table className={"table container"}>
                <thead className={"thead-dark"}>
                <tr>
                    <th>#</th>
                    <th>code</th>
                    <th>libelle</th>
                </tr>
                </thead>
                <tbody>
                {
                    workunits.map((r) => (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                            <th>{r.id}</th>
                            <th>{r.code}</th>
                            <th>{r.libelle}</th>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </main>
    </>
}

export async function getStaticProps({params}) {
    const workunits = await fetch('http://88.168.248.140:8000/workunits').then(r => r.json())
    return {
        props: {
            workunits
        }
    }
}