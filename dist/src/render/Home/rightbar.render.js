import RightbarList from "../../components/rightbar/rightlist";
import UniqueHash from "../../security/Hashes";

export default function Rightbar_Render(){
    const RList = document.getElementById('rightlist');
    window.addEventListener('DOMContentLoaded', () => {
        RList.id = UniqueHash();
    })

    RightbarList(RList);
}