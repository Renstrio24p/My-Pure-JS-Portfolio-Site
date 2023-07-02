import Home_Render from "../render/Home/home.render";
import { style_main } from "../start";

export default function HomePage(Home) {

    Home.innerHTML = (
        `
            <div class=${style_main('home')}>
                <div class=${style_main('overlay')}>
                    <div class=${style_main('profile-home')}>
                        <h1>Design something Amazing with React!!</h1>
                        <span>&lt;type&gt;</span>
                            DOM
                        <span>&lt;/type&gt;</span>
                        <div id='Hire-me'></div>
                    </div>
                    <div id='repo'></div>
                    <div id='services'></div>
                    <footer id='footer'></footer>
                </div>
            </div>
        `
    )

    Home_Render();
    
}