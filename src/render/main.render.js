import HomePage from "../pages/Home";
import UniqueHash from "../security/Hashes";

export default function Main_Render(){

    const Homes = document.getElementById('home');

    window.addEventListener('DOMContentLoaded', () => {
        Homes.id = UniqueHash();
    })

    HomePage(Homes);
   
}