import {useState} from "react";
import hydrateFormData from "../../../services/handle";
import validateArticle from "../../../services/validateArticle";
import {Button, Dialog, DialogContent, DialogTitle} from "@mui/material";


const URL = process.env.URL_JAD_API + 'articles';

export default function CreateArticle() {
    const [query, setQuery] = useState({
        "codeArticle": "",
        "codeCategory": "",
        "codeOperation": "",
        "articles": [],

    });

    const [open, setOpen] = useState(false);

    const handleDialog = () => {
        setOpen(!open);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setQuery((prevState) => (
            {
                ...prevState,
                [name]: value
            }
        ));

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        hydrateFormData(data, query);

        fetch(
            URL,
            {
                method: 'POST',
                body: data
            }
        ).then(() => setQuery(
            {
                "codeArticle": "",
                "codeCategory": "",
                "codeOperation": "",
                "articles": [
                    {
                        "codeArticle": "",
                        "quantite": 1
                    }
                ]
            }
        ));
    }

    console.log(validateArticle(query))
    return (
        <div>
            <Button onClick={handleDialog}>
                Ajouter un article
            </Button>
            <Dialog open={open} onClose={handleDialog} fullWidth>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <DialogTitle>Ajout d'un article</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <div>
                        <DialogContent>
                            <input
                                type="text"
                                name="codeArticle"
                                value={query.codeArticle}
                                onChange={handleChange}
                                placeholder="Code article"
                            />
                        </DialogContent>
                    </div>
                    <div>
                        <DialogContent>
                            <input
                                type="text"
                                name="codeCategory"
                                value={query.codeCategory}
                                onChange={handleChange}
                                placeholder="Code category"
                            />
                        </DialogContent>
                    </div>
                    <div>
                        <DialogContent>
                            <input
                                type="text"
                                name="codeOperation"
                                value={query.codeOperation}
                                onChange={handleChange}
                                placeholder="Code operation"
                            />
                        </DialogContent>
                    </div>
                    <Button type="submit">Ajouter</Button>
                    <Button onClick={handleDialog}>Annuler</Button>
                </form>
            </Dialog>
        </div>
    )
}