import GetAll from "../../../services/api";
import Biglist from "../../listing/Biglist/Biglist";

export default function Agencies() {
    const data = GetAll('agencies');
    return (
        <>
            <Biglist data={data} id={true}/>
        </>
    )
}
