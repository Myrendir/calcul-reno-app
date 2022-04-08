import React from "react";
import * as constant from '../utils/constants';

export default function Agencies({agencies}) {
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
                    agencies.map((r) => (
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
    const agencies = await fetch(constant.URL_JAD_API + 'agencies').then(r => r.json())
    return {
        props: {
            agencies
        }
    }
}