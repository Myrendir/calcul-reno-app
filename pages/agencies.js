import GetAll from "../utils/api";
import Biglist from "../components/listing/Biglist/Biglist";

export default function Agencies() {
    const data = GetAll('agencies');
    return (
        <>
            <Biglist data={data}/>
        </>
    )
}
