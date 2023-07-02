import { style_side } from "../../start";
import ProgressBarFunction from "./functions/progressbars";

export default function Stacks(Stack) {
    Stack.innerHTML = (
        `
        <ul class=${style_side('stack-list')}>
            <li>
                <div class=${style_side('d-flex-between-text')}>
                    <p class=${style_side('stack-name')}>HTML5</p>
                    <p class=${style_side('stack-percent')}>90%</p>
                </div>
                <div class=${style_side('progress-container')}>
                    <div id='html' class=${style_side('progress-bar')} style='width: 0%;'></div>
                </div>
            </li>
            <li>
                <div class=${style_side('d-flex-between-text')}>
                    <p class=${style_side('stack-name')}>CSS</p>
                    <p class=${style_side('stack-percent')}>85%</p>
                </div>
                <div class=${style_side('progress-container')}>
                    <div id='css' class=${style_side('progress-bar')} style='width: 85%;'></div>
                </div>
            </li>
            <li>
                <div class=${style_side('d-flex-between-text')}>
                    <p class=${style_side('stack-name')}>SASS</p>
                    <p class=${style_side('stack-percent')}>65%</p>
                </div>
                <div class=${style_side('progress-container')}>
                    <div id='scss' class=${style_side('progress-bar')} style='width: 85%;'></div>
                </div>
            </li>
            <li>
                <div class=${style_side('d-flex-between-text')}>
                    <p class=${style_side('stack-name')}>Javascript</p>
                    <p class=${style_side('stack-percent')}>79%</p>
                </div>
                <div class=${style_side('progress-container')}>
                    <div id='javascript' class=${style_side('progress-bar')} style='width: 0%;'></div>
                </div>
            </li>
            <li>
                <div class=${style_side('d-flex-between-text')}>
                    <p class=${style_side('stack-name')}>React</p>
                    <p class=${style_side('stack-percent')}>80%</p>
                </div>
                <div class=${style_side('progress-container')}>
                    <div id='react' class=${style_side('progress-bar')} style='width: 0%;'></div>
                </div>
            </li>
            <li>
                <div class=${style_side('d-flex-between-text')}>
                    <p class=${style_side('stack-name')}>MySQL</p>
                    <p class=${style_side('stack-percent')}>50%</p>
                </div>
                <div class=${style_side('progress-container')}>
                    <div id='mysql' class=${style_side('progress-bar')} style='width: 0%;'></div>
                </div>
            </li>
            <li>
                <div class=${style_side('d-flex-between-text')}>
                    <p class=${style_side('stack-name')}>PosgresSQL</p>
                    <p class=${style_side('stack-percent')}>40%</p>
                </div>
                <div class=${style_side('progress-container')}>
                    <div id='posgres' class=${style_side('progress-bar')} style='width: 0%;'></div>
                </div>
            </li>
            <li>
                <div class=${style_side('d-flex-between-text')}>
                    <p class=${style_side('stack-name')}>PHP</p>
                    <p class=${style_side('stack-percent')}>30%</p>
                </div>
                <div class=${style_side('progress-container')}>
                    <div id='php' class=${style_side('progress-bar')} style='width: 0%;'></div>
                </div>
            </li>
            <li>
                <div class=${style_side('d-flex-between-text')}>
                    <p class=${style_side('stack-name')}>Typescript</p>
                    <p class=${style_side('stack-percent')}>50%</p>
                </div>
                <div class=${style_side('progress-container')}>
                    <div id='typescript' class=${style_side('progress-bar')} style='width: 0%;'></div>
                </div>
            </li>
            <li>
                <div class=${style_side('d-flex-between-text')}>
                    <p class=${style_side('stack-name')}>Webpack</p>
                    <p class=${style_side('stack-percent')}>70%</p>
                </div>
                <div class=${style_side('progress-container')}>
                    <div id='webpack' class=${style_side('progress-bar')} style='width: 0%;'></div>
                </div>
            </li>
        </ul>
        `
    );

   ProgressBarFunction('html',90);
   ProgressBarFunction('css',85);
   ProgressBarFunction('scss',65);
   ProgressBarFunction('javascript',79);
   ProgressBarFunction('react',80);
   ProgressBarFunction('mysql',50);
   ProgressBarFunction('posgres',40);
   ProgressBarFunction('php',30);
   ProgressBarFunction('typescript',50);
   ProgressBarFunction('webpack',70);
}
