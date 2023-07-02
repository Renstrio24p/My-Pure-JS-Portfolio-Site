import BottomLinks from "../components/sidebar/bottomlinks";
import CheckList from "../components/sidebar/checks";
import Donuts from "../components/sidebar/donuts";
import Stacks from "../components/sidebar/stacks";
import UniqueHash from "../security/Hashes"

export default function Sidebar_Render(){

    const DonutCharts = document.getElementById('donuts'),
          Stack = document.getElementById('stacks'),
          Checks = document.getElementById('checks'),
          BLinks = document.getElementById('bottom-side-links');

    window.addEventListener('DOMContentLoaded', () => {
        DonutCharts.id = UniqueHash();
        Stack.id = UniqueHash();
        Checks.id = UniqueHash();
        BLinks.id = UniqueHash();
    })

    Donuts(DonutCharts);
    Stacks(Stack);
    CheckList(Checks);
    BottomLinks(BLinks);

}