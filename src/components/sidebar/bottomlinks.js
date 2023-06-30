import { style_side } from "../../start";

export default function BottomLinks(Links){
    
    Links.innerHTML = (
        `
            <div class=${style_side('blinks')}>
                <ul>
                    <li><a href='#0'><i class='fa-brands fa-linkedin'></i></a></li>
                </ul>
                <ul>
                    <li><a href='#0'><i class='fa-brands fa-github'></i></a></li>
                </ul>
                <ul>
                    <li><a href='#0'><i class='fa-brands fa-twitter'></i></a></li>
                </ul>
                <ul>
                    <li><a href='#0'><i class='fa-brands fa-facebook-f'></i></a></li>
                </ul>
            </div>
        `
    )

}