import Render from './render/render';
import side from './sass/modules/sidebar.module.scss';
import right from './sass/modules/rightbar.module.scss';
import main from './sass/modules/app.module.scss';
import footer from './sass/modules/footer.module.scss';
import classNames from 'classnames/bind';

export const style_side = classNames.bind(side),
             style_right = classNames.bind(right),
             style_footer = classNames.bind(footer),
             style_main = classNames.bind(main);

export default function Start(DOM) {
  // Function here

  DOM.innerHTML = `
    <div id='container' class=${style_side('DOM')}">
       <aside id='sidebar' class=${style_side('sidebar')}></aside>
       <main id='main' class=${style_main('main-style')}></main>
       <aside id='rightbar' class=${style_right('rightbar')}></aside>
    </div>
  `;

    Render(); // Renders all your JS Components
}
