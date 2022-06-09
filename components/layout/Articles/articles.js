import GetAll from "../../../services/api";
import Biglist from "../../listing/Biglist/Biglist";
import CreateArticle from "../../form/Article/CreateArticle";


export default function Articles() {
    const data = GetAll('articles');
    return (
        <>
            <CreateArticle/>
            <Biglist data={data} id={true}/>
        </>
    )
}
