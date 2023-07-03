import { style_main } from "../../start";

export default function Project(Proj){

    Proj.innerHTML = (
        `
         <div class=${style_main('proj-container')}>
            <h1>Rendered Project</h1>
            <div class=${style_main('project-list')}>
            <h2>Templates</h2>
            <ul>
                <li>
                
                </li>
            </ul>
            </div>
         </div>
        `
    )

}