import React, {useState} from "react";
import {Button} from "react-bootstrap";
import * as constant from "../../utils/constants";

export default function CreateArticle() {
    const [query, setQuery] = useState({
        codeArticle: "",
        codeCategory: "",
        libelle: "",
    })
    const [showResults, setShowResults] = useState(false);

    const open = () => setShowResults(true);

    const close = () => setShowResults(false);

    const handleParam = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        })
        fetch(constant.URL_FORMIO, {
            method: "POST",
            body: formData
        }).then(() => setQuery({
            codeArticle: "", codeCategory: "", libelle: ""
        }))
    }

    return (
        <>
            <Button variant="primary" onClick={open}>
                Ajouter un article
            </Button>
            {
                showResults ?
                    <form onSubmit={formSubmit} className={"container col-sm-3"}>
                        <div>
                            <input
                                type="text"
                                name="codeArticle"
                                required
                                placeholder="codeArticle"
                                className="form-control"
                                value={query.codeArticle}
                                onChange={handleParam()}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="codeCategory"
                                required
                                placeholder="codeCategory"
                                className="form-control"
                                value={query.codeCategory}
                                onChange={handleParam()}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="libelle"
                                required
                                placeholder="libelle"
                                className="form-control"
                                value={query.libelle}
                                onChange={handleParam()}
                            />
                        </div>
                        <div>
                            <button type="submit" className={"btn btn-primary"}>Ajouter</button>
                            <button className={"btn btn-danger"} onClick={close}>Fermer</button>
                        </div>
                    </form>
                    : null
            }
        </>
    )
}