import { style_side } from "../../start";

export default function CheckList(Check){

    Check.innerHTML = (
        `
            <ul class=${style_side('check-list')}>
              <li>
                <p class=${style_side('check-icon')}>&#x2713;</p>
                <p class=${style_side('check-desc')}>React, Material UI</p>
              </li>
              <li>
                <p class=${style_side('check-icon')}>&#x2713;</p>
                <p class=${style_side('check-desc')}>Sass, CSS, Less</p>
              </li>
              <li>
                <p class=${style_side('check-icon')}>&#x2713;</p>
                <p class=${style_side('check-desc')}>Webpack, VueJS</p>
              </li>
              <li>
                <p class=${style_side('check-icon')}>&#x2713;</p>
                <p class=${style_side('check-desc')}>Git, Github Workflows</p>
              </li>
            </ul>
        `
    )

}