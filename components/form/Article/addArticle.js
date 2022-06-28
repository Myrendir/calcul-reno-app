import {useState} from "react";
import {Button} from "@mui/material";
import parse from "../../../services/parse";
import {addArticle} from "../../../services/api";

const URL = process.env.URL_JAD_API + 'articles';
export default function AddArticle() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [query, setQuery] = useState('');

    const onSubmit = () => {
        addArticle(URL, parse(query)).then(r => {
            setQuery('');
        })
    }

    return (
        <>
            <div className="row">
                <h3>Ajout d'articles</h3> <br/>
                <p>Il faut rédiger la commande comme
                    suit : <b>codeArticle-codeCategorie-codeOperation:(codeArticle*quantite),(codeArticle*quantite);</b>
                </p> <br/>
                <p>Il est nécesaire de séparer chaque article par une <b>virgule ","</b> et de les saisir à l'intérieur de <b>parenthèses</b>.</p><br/>
                <p>Il est possible de rédiger autant de commande que nécessaire mais il est impératif de les séparer
                    avec un <b>point virgule ";"</b>.</p>
            </div>

            <form onSubmit={onSubmit}>
                <div className="form-group">
                <textarea
                    className={'form-control'}
                    value={query}
                    name={'query'}
                    onChange={e => setQuery(e.target.value)}
                />
                </div>
                <div className="form-group">
                    <Button className={'btn btn-primary text-center'} type="submit">Exécuter</Button>
                </div>
            </form>
        </>
    )
}