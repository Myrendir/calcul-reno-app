import Navbar from "../components/layout/Navbar/Navbar";
import {useState} from "react";
import hydrateFormData from "../services/handle";
import parse from "../services/parse";
import {Button} from "@mui/material";

const URL = process.env.URL_JAD_API + 'articles';
export default function Home() {

    const [query, setQuery] = useState('');

    const chargeParse = () => {
        console.log(parse(query))
    }

    return (
        <>
            {/*<Navbar/>*/}
            <form onSubmit={chargeParse}>
                <div className="form-group">
                <textarea
                    className={'form-control'}
                    value={query}
                    name={'query'}
                    onChange={e => setQuery(e.target.value)}
                />
                </div>
                <div className="form-group">
                    <Button className={'btn btn-primary text-center'} type="submit">Ajouter</Button>
                </div>
            </form>
        </>
    )
}
