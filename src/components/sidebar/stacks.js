import { style_side } from "../../start";

export default function Stacks(Stack){

    Stack.innerHTML = (
        `
            <ul class=${style_side('stack-list')}>
                <li>
                    <div class=${style_side('d-flex-between-text')}>
                        <p class=${style_side('stack-name')}>HTML5</p>
                        <p class=${style_side('stack-percent')}>90%</p>
                    </div>
                    <div class=${style_side('progress-container')}>
                        <div class=${style_side('progress-bar')} style='width: 90%;'></div>
                    </div>
                </li>
                <li>
                    <div class=${style_side('d-flex-between-text')}>
                        <p class=${style_side('stack-name')}>CSS</p>
                        <p class=${style_side('stack-percent')}>85%</p>
                    </div>
                    <div class=${style_side('progress-container')}>
                        <div class=${style_side('progress-bar')} style='width: 85%;'></div>
                    </div>
                </li>
                <li>
                    <div class=${style_side('d-flex-between-text')}>
                        <p class=${style_side('stack-name')}>Javascript</p>
                        <p class=${style_side('stack-percent')}>79%</p>
                    </div>
                    <div class=${style_side('progress-container')}>
                        <div class=${style_side('progress-bar')} style='width: 79%;'></div>
                    </div>
                </li>
                <li>
                    <div class=${style_side('d-flex-between-text')}>
                        <p class=${style_side('stack-name')}>React</p>
                        <p class=${style_side('stack-percent')}>80%</p>
                    </div>
                    <div class=${style_side('progress-container')}>
                        <div class=${style_side('progress-bar')} style='width: 79%;'></div>
                    </div>
                </li>
                <li>
                    <div class=${style_side('d-flex-between-text')}>
                        <p class=${style_side('stack-name')}>MySQL</p>
                        <p class=${style_side('stack-percent')}>50%</p>
                    </div>
                    <div class=${style_side('progress-container')}>
                        <div class=${style_side('progress-bar')} style='width:50%;'></div>
                    </div>
                </li>
                <li>
                    <div class=${style_side('d-flex-between-text')}>
                        <p class=${style_side('stack-name')}>PosgresSQL</p>
                        <p class=${style_side('stack-percent')}>40%</p>
                    </div>
                    <div class=${style_side('progress-container')}>
                        <div class=${style_side('progress-bar')} style='width:40%;'></div>
                    </div>
                </li>
                <li>
                    <div class=${style_side('d-flex-between-text')}>
                        <p class=${style_side('stack-name')}>PHP</p>
                        <p class=${style_side('stack-percent')}>30%</p>
                    </div>
                    <div class=${style_side('progress-container')}>
                        <div class=${style_side('progress-bar')} style='width:30%;'></div>
                    </div>
                </li>
            </ul>
        `
    )

}