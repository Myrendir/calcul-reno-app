import * as constant from "../utils/constants";

export default function Operations({operations}) {

    return <>
        <main>
            <table className={"table container"}>
                <thead className={"thead-dark"}>
                <tr>
                    <th>#</th>
                    <th>code</th>
                    <th>libelle</th>
                    <th>delai</th>
                    <th>delaiInstallation</th>
                </tr>
                </thead>
                <tbody>
                {
                    operations.map((r) => (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                            <th>{r.id}</th>
                            <th>{r.code}</th>
                            <th>{r.libelle}</th>
                            <th>{r.delai}</th>
                            <th>{r.delaiInstallation}</th>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </main>
    </>
}

export async function getStaticProps({params}) {
    const operations = await fetch(constant.URL_JAD_API + 'operations').then(r => r.json())
    return {
        props: {
            operations
        }
    }
}