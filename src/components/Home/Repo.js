import { style_main } from "../../start";
import Count from "./functions/count";

export default function RepoList(Repo){

    Repo.innerHTML = (
        `
        <div class=${style_main('repo-container')}>
            <ul class=${style_main('repo-list')}>
                <li> 
                    <h2 id="repo-count">59</h2>
                    <span>Github Repositories</span>
                </li>
                <li> 
                    <h2 id="react-count">9</h2>
                    <span>React Projects</span>
                </li>
                <li> 
                    <h2 id="js-count">7</h2>
                    <span>Javascript Projects</span>
                </li>
                <li> 
                    <h2 id="ts-count">7</h2>
                    <span>Typescript Projects</span>
                </li>
                <li> 
                    <h2 id="collab-count">2</h2>
                    <span>Collab Projects</span>
                </li>
            </ul>
        </div>
        `
    )

    Count();

}