import FooterContent from "../../components/Footer";
import HireMeContent from "../../components/Home/Hire-me";
import RepoList from "../../components/Home/Repo";
import ServiceList from "../../components/Home/Services";
import UniqueHash from "../../security/Hashes";

export default function Home_Render(){

    const HireMe = document.getElementById('Hire-me'),
          Repos = document.getElementById('repo'),
          Serve = document.getElementById('services'),
          Footer = document.getElementById('footer');

    window.addEventListener('DOMContentLoaded', () => {
        HireMe.id = UniqueHash();
        Repos.id = UniqueHash();
        Serve.id = UniqueHash();
        Footer.id = UniqueHash();
    })

    HireMeContent(HireMe);
    RepoList(Repos);
    ServiceList(Serve);
    FooterContent(Footer);
}