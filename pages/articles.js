import CreateArticle from "../components/form/CreateArticle";
import React from "react";
import * as constant from "../utils/constants";

export default function Articles({articles}) {
    return <>
        <main>
            <CreateArticle/>
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
    const articles = await fetch(constant.URL_JAD_API + 'articles').then(r => r.json())
    return {
        props: {
            articles
        }
    }
}