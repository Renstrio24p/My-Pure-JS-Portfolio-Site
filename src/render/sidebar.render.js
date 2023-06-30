import BottomLinks from "../components/sidebar/bottomlinks";
import CheckList from "../components/sidebar/checks";
import Stacks from "../components/sidebar/stacks";
import UniqueHash from "../security/Hashes"

export default function Sidebar_Render(){

    const Stack = document.getElementById('stacks'),
          Checks = document.getElementById('checks'),
          BLinks = document.getElementById('bottom-side-links');

    window.addEventListener('DOMContentLoaded', () => {
        Stack.id = UniqueHash();
        Checks.id = UniqueHash();
        BLinks.id = UniqueHash();
    })

    Stacks(Stack);
    CheckList(Checks);
    BottomLinks(BLinks);

}