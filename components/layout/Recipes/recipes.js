import {GetAll} from "../../../services/api";
import Biglist from "../../listing/Biglist/Biglist";

export default function Recipes() {
    const data = GetAll('recipes');
    console.log(data)
    return (
        <>
            <Biglist data={data} id={false}/>
        </>
    )
}
