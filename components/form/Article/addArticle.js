import {useState} from "react";
import {Button} from "@mui/material";
import parse from "../../../services/parse";
import {addArticle} from "../../../services/api";
import Alert from '@mui/material/Alert';

const URL = process.env.URL_JAD_API + 'articles';
export default function AddArticle() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [query, setQuery] = useState('');
    const [show, setShow] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [infos, setInfos] = useState('')
    const handleShow = () => {
        setShow(true);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = parse(query, true)
        if (data.error.length > 0) {
            setError(true);
            setErrorMessage("Un problème est survenu : le format n'est pas respecté.")
        } else {
            addArticle(URL, data)
                .then(r => {
                    console.log(r)
                    if (data.length > 1) {
                        let noms = ' Articles ';
                        data.map(d => {
                                noms += d.codeArticle + " & "
                            }
                        )
                        noms = noms.substring(0, noms.length - 2);
                        setInfos(noms + "créés ")
                    } else {
                        setInfos("Article " + data[0].codeArticle + " créé ");
                    }

                    setSucess(true)

                })
                .catch(err => {
                    setError(true);
                    setErrorMessage("Un problème est survenu")
                    console.log(err);
                });
        }
    }

    return (
        <>
            {
                sucess ?
                    <Alert severity="success">
                        <b>{infos} avec succès.</b>
                    </Alert>
                    : null
            }
            {
                error ?
                    <Alert severity="error">
                        {errorMessage}
                    </Alert>
                    : null
            }
            {

                show ?
                    <div className="container">

                        <div>
                            <div className="row">
                                <p>Il faut rédiger la commande comme
                                    suit
                                    : <b>codeArticle-codeCategorie-codeOperation:(codeArticle*quantite),(codeArticle*quantite);</b>
                                </p> <br/>
                                <p>Il faut renseigner le <b>codeArticle</b> puis récupérer le code des différentes
                                    ressources dans le listing correspondant (cf menu de gauche).</p><br/>
                                <p>Il est nécesaire de séparer chaque composant (<b>min = 1 et max = 2</b>) par une <b>virgule
                                    ","</b> et de les
                                    saisir à
                                    l'intérieur
                                    de <b>parenthèses</b>.</p><br/>
                                <p>Il est possible de rédiger autant de commande que nécessaire mais il est impératif de
                                    les
                                    séparer
                                    avec un <b>point virgule ";"</b></p>
                            </div>

                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                <textarea
                    className={'form-control'}
                    value={query}
                    name={'query'}
                    placeholder={'codeArticle-codeCategorie-codeOperation:(codeArticle*quantite),(codeArticle*quantite);'}
                    onChange={e => setQuery(e.target.value)}
                />
                                </div>
                                <div className="form-group">
                                    <Button className={'btn btn-primary text-center'} type="submit">Envoyer</Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    :
                    <button className={'btn btn-primary'} onClick={handleShow}>Lancer une
                        commande</button>
            }
        </>
    )
}