import GetAll from "../../../services/api";
import Biglist from "../../listing/Biglist/Biglist";

export default function Operations() {
    const data = GetAll('operations');
    return (
        <>
            <Biglist data={data} id={true}/>
        </>
    )
}
