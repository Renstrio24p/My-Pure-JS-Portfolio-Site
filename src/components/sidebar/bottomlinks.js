import { style_side } from "../../start";

export default function BottomLinks(Links){
    
    Links.innerHTML = (
        `
            <div class=${style_side('blinks')}>
                <ul>
                    <li><a 
                        href='https://www.linkedin.com/in/waren-gador-18505b1b7/' 
                        aria-label="linkedin"
                        ><i class='fa-brands fa-linkedin'></i></a></li>
                </ul>
                <ul>
                    <li><a 
                        href='https://github.com/Renstrio24p' 
                        aria-label="github"
                        ><i class='fa-brands fa-github'></i></a></li>
                </ul>
                <ul>
                    <li><a 
                        href='https://twitter.com/waren_gador' 
                        aria-label="twitter"
                        ><i class='fa-brands fa-twitter'></i></a></li>
                </ul>
                <ul>
                    <li><a 
                        href='https://www.facebook.com/renstrio' 
                        aria-label="facebook"
                        ><i class='fa-brands fa-facebook-f'></i></a></li>
                </ul>
            </div>
        `
    )

}
