export default function Categories({categories}) {

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
                    categories.map((r) => (
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
    const categories = await fetch('http://88.168.248.140:8000/categories').then(r => r.json())
    return {
        props: {
            categories
        }
    }
}