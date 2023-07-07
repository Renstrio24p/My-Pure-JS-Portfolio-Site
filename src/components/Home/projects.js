import { style_main } from "../../start";

export default function Project(Proj) {

  Proj.innerHTML = ( 
    `
    <div class=${style_main('proj-container')}>
      <h1>Project</h1>
      <div class=${style_main('project-list')}>
        <h2>Templates</h2>
        <p>
            I made these template for my personal use in exploring and compling stacks that I can easily navigate
            those errors in my projects.
        </p>
        <ul>
          <li>
            <div class=${style_main('template-item')}>
              <img src='./src/images/st-javascript.webp' alt='js template'/>
              <div class=${style_main('template-text')}>
                <h2>Standalone Javascript</h2>
                <p>It's a template for vanilla Javascript powered by. Webpack to used as a live compiler
                   simulation of the page.</p>
              </div>
            </div>
          </li>
          <li>
            <div class=${style_main('template-item')}>
              <img src='./src/images/st-typescript.webp' alt='ts template'/>
              <div class=${style_main('template-text')}>
                <h2>Standalone Typescript</h2>
                <p>It's a template for vanilla Typescript however typescript ability to know specific types.</p>
              </div>
            </div>
          </li>
          <li>
            <div class=${style_main('template-item')}>
              <img src='./src/images/st-react.webp' alt='react template'/>
              <div class=${style_main('template-text')}>
                <h2>Standalone React</h2>
                <p>It's a template for React and I make it simple and clear design. using webpack</p>
              </div>
            </div>
          </li>
          <li>
            <div class=${style_main('template-item')}>
              <img src='./src/images/st-react-typescript.webp' alt='react typescript template'/>
              <div class=${style_main('template-text')}>
                <h2>Standalone React Typescript</h2>
                <p>It's a template for React but it has a typescript feature added using webpack</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `
  )
}
