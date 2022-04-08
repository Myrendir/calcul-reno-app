export default function Recipes({recipes}) {
    return <>
        <main>
            <table className={"table container"}>
                <thead className={"thead-dark"}>
                <tr>
                    <th>#</th>
                    <th>id_operation</th>
                    <th>id_composant1</th>
                    <th>quantite1</th>
                    <th>id_composant2</th>
                    <th>quantite2</th>
                </tr>
                </thead>
                <tbody>
                {
                    recipes.map((r) => (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                            <th>{r.id_article}</th>
                            <th>{r.id_operation}</th>
                            <th>{r.id_composant1}</th>
                            <th>{r.quantite1}</th>
                            <th>{r.id_composant2}</th>
                            <th>{r.quantite2}</th>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </main>
    </>
}

export async function getStaticProps({params}) {
    const recipes = await fetch('http://88.168.248.140:8000/recipes').then(r => r.json())
    return {
        props: {
            recipes
        }
    }
}