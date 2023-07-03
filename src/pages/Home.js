import typeJS from "../components/Home/functions/type";
import Home_Render from "../render/Home/home.render";
import { style_main } from "../start";

export default function HomePage(Home) {
  Home.innerHTML = `
    <div class=${style_main('home')}>
      <div class=${style_main('overlay')}>
        <div class=${style_main('profile-home')}>
          <h1>Design something Amazing with React!!</h1>
          <div class=${style_main('type-line')}>
            <span class=${style_main('type-code')} id="type-start">&lt;<p class=${style_main('types')}>type</p>&gt;</span>
            <span id="type-text"></span>
            <span class=${style_main('type-code')} id="type-end">&lt;<p class=${style_main('types')}>/type</p>&gt;</span>
          </div>
          <div id='Hire-me'></div>
        </div>
        <div id='repo'></div>
        <div id='services'></div>
        <footer id='footer'></footer>
      </div>
    </div>
  `;

  Home_Render();
  typeJS();
}
