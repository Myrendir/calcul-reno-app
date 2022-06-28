import {GetAll} from "../../../services/api";
import Biglist from "../../listing/Biglist/Biglist";

export default function Workunits() {
    const data = GetAll('workunits');
    return (
        <>
            <Biglist data={data} id={true}/>
        </>
    )
}
