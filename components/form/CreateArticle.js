import React, {useState} from "react";

export default function CreateArticle() {
    const [query, setQuery] = useState({
        codeArticle: "",
        codeCategory: "",
        libelle: "",
    })

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
        fetch("https://getform.io/f/df311cb5-f041-402b-8b36-1723600dc29a", {
            method: "POST",
            body: formData
        }).then(() => setQuery({
            codeArticle: "", codeCategory: "", libelle: ""
        }))
    }
    return (
        <>
            <form onSubmit={formSubmit} className={"container col-sm-2"}>
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
                <button type="submit" className={"btn btn-primary"}>Send</button>
            </form>
        </>
    )
}