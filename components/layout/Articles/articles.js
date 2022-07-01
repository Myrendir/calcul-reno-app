import {GetAll} from "../../../services/api";
import Biglist from "../../listing/Biglist/Biglist";
import AddArticle from "../../form/Article/addArticle";

export default function Articles() {


    const data = GetAll('articles');
    return (
        <>
            {/*<AddArticle />*/}
            <Biglist data={data} id={true}/>
        </>
    )
}
