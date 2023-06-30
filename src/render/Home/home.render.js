import FooterContent from "../../components/Footer";
import RepoList from "../../components/Home/Repo";
import ServiceList from "../../components/Home/Services";
import UniqueHash from "../../security/Hashes";

export default function Home_Render(){

    const Repos = document.getElementById('repo'),
          Serve = document.getElementById('services'),
          Footer = document.getElementById('footer');

    window.addEventListener('DOMContentLoaded', () => {
        Repos.id = UniqueHash();
        Serve.id = UniqueHash();
        Footer.id = UniqueHash();
    })

    RepoList(Repos);
    ServiceList(Serve);
    FooterContent(Footer);
}