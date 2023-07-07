import { style_main } from "../../start";

export default function HireMeContent(Hire){

    Hire.innerHTML = (
        `
            <button class=${style_main('hire-me-btn')}>Browse</button>
        `
    )

}