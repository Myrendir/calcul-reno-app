import GetAll from "../../../services/api";
import Biglist from "../../listing/Biglist/Biglist";

export default function Categories() {
    const data = GetAll('categories');
    return (
        <>
            <Biglist data={data} id={true}/>
        </>
    )
}
