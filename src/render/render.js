import FooterContent from "../components/Footer";
import MainContent from "../components/Main";
import RightbarContent from "../components/Rightbar";
import Rightbar from "../components/Rightbar";
import SidebarContent from "../components/Sidebar";
import UniqueHash from "../security/Hashes";

export default function Render(){

    const DOM = document.getElementById('container'),
          Sidebar = document.getElementById('sidebar'),
          Rightbar = document.getElementById('rightbar'), 
          Main = document.getElementById('main');

    window.addEventListener('DOMContentLoaded', () => {
        DOM.id = UniqueHash();
        Sidebar.id = UniqueHash();
        Rightbar.id = UniqueHash();
        Main.id = UniqueHash();
    })

    SidebarContent(Sidebar);
    MainContent(Main);
    RightbarContent(Rightbar);

}