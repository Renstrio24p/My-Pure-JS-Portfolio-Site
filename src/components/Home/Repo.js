import { style_main } from "../../start";

export default function RepoList(Repo){

    Repo.innerHTML = (
        `
            <div class=${style_main('repo-container')}>
                <ul class=${style_main('repo-list')}>
                    <li> 
                        <h2>59</h2>
                        <span>Github Repositories</span>
                    </li>
                    <li> 
                        <h2>9</h2>
                        <span>React Projects</span>
                    </li>
                    <li> 
                        <h2>7</h2>
                        <span>Javascript Projects</span>
                    </li>
                    <li> 
                        <h2>2</h2>
                        <span>Collaboration Projects</span>
                    </li>
                </ul>
            </div>
        `
    )

}