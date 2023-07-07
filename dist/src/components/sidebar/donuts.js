import { style_side } from "../../start";
import DonutFunctions from "./functions/donut"

export default function Donuts(donut){

    donut.innerHTML = (
        `
        <div class=${style_side('donut-progress-bar')}>
        <svg class="${style_side('donut')} viewBox="0 0 100 100">
            <circle class=${style_side('donut-hole')} cx="50" cy="50" r="45"></circle>
            <circle class=${style_side('donut-ring')} cx="50" cy="50" r="45"></circle>
            <circle id='donut-segment2' class=${style_side('donut-segment')} cx="50" cy="50" r="45"></circle>
            <text id='donut-text2' class=${style_side('donut-text')} x="50" y="57" text-anchor="middle" transform="rotate(90, 50, 50)"></text>
        </svg>
        <h2 class=${style_side('lang')}>Tagalog</h2>
    </div>
    <div class=${style_side('donut-progress-bar')}>
        <svg class="${style_side('donut')} viewBox="0 0 100 100">
            <circle class=${style_side('donut-hole')} cx="50" cy="50" r="45"></circle>
            <circle class=${style_side('donut-ring')} cx="50" cy="50" r="45"></circle>
            <circle id='donut-segment' class=${style_side('donut-segment')} cx="50" cy="50" r="45"></circle>
            <text id='donut-text' class=${style_side('donut-text')} x="50" y="57" text-anchor="middle" transform="rotate(90, 50, 50)"></text>
        </svg>
        <h2 class=${style_side('lang')}>English</h2>
    </div>
        `
    )
    DonutFunctions();
}