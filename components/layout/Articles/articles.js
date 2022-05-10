import GetAll from "../../../services/api";
import Biglist from "../../listing/Biglist/Biglist";

export default function Articles() {
    const data = GetAll('articles');
    return (
        <>
            <Biglist data={data} id={true}/>
        </>
    )
}
