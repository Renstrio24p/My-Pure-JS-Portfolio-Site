import { style_main } from "../../start";

export default function Project(Proj){

    Proj.innerHTML = (
        `
         <div class=${style_main('proj-container')}>
            <h1>Rendered Project</h1>
         </div>
        `
    )

}