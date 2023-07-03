import { style_right } from "../../start";

export default function RightbarList(RList){

    RList.innerHTML = (

        `
            <ul>
                <li>
                    <p>item 1</p>
                </li>
                <li>
                    <p>item 2</p>
                </li>
                <li>
                    <p>item 3</p>
                </li>
                <li>
                    <div>
                        <div>Templates Stacks</div>
                        <div>
                            <a href='#0' class=${style_right('')} aria-label='standalone-react'>Standalone-React</a>
                            <a href='#0' class=${style_right('')} aria-label='standalone-react-typescript'>Standalone-React Typescript</a>
                            <a href='#0' class=${style_right('')} aria-label='standalone-Typescript'>Standalone-TypescriptES10</a>
                            <a href='#0' class=${style_right('')} aria-label='standalone-Javascript'>Standalone-JavascriptES10</a>
                        </div>
                    </div>
                </li>
            </ul>
        `
    )

}