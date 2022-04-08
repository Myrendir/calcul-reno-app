export default function Articles({articles}) {

    return <>
        <main>
            <table className={"table container"}>
                <thead className={"thead-dark"}>
                <tr>
                    <th>#</th>
                    <th>code</th>
                    <th>libelle</th>
                    <th>id_categorie</th>
                </tr>
                </thead>
                <tbody>
                {
                    articles.map((r) => (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                            <th>{r.id}</th>
                            <th>{r.code}</th>
                            <th>{r.libelle}</th>
                            <th>{r.id_categorie}</th>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </main>
    </>
}

export async function getStaticProps({params}) {
    const articles = await fetch('http://88.168.248.140:8000/articles').then(r => r.json())
    return {
        props: {
            articles
        }
    }
}