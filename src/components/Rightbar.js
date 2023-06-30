import { style_right } from "../start";

export default function RightbarContent(Right){
    Right.innerHTML = (
        `
        <div id='rightbar' class="${style_right('rightbar')}">
        <div id="ham" class="${style_right('hamburger')}">Hamburger Here</div>
        <div class="${style_right('font-container')}">
          <h2 class="${style_right('font-rotate')}">Portfolio</h2>
          <div id="content" class="${style_right('collapsible-content')}">
            <ul>
              <li>Profile</li>
              <li>Profile</li>
              <li>Profile</li>
              <li>Profile</li>
            </ul>
          </div>
        </div>
      </div>
      
        `
    )


    document.addEventListener('click', function(event) {
        const rightbar = document.querySelector(`.${style_right('rightbar')}`);
        
        if (!rightbar.contains(event.target)) {
          const hamburger = document.getElementById('ham');
          const collapsibleContent = document.getElementById('content');
          
          rightbar.classList.remove(`${style_right('open')}`);
          hamburger.classList.remove(`${style_right('open')}`);
          collapsibleContent.classList.remove(`${style_right('open')}`);
        }
      });
      
      const hamburger = document.getElementById('ham');
      const collapsibleContent = document.getElementById('content');
      const rightbar = document.querySelector(`.${style_right('rightbar')}`);
      
      hamburger.addEventListener('click', function() {
        this.classList.toggle(`${style_right('open')}`);
        collapsibleContent.classList.toggle(`${style_right('open')}`);
        rightbar.classList.toggle(`${style_right('open')}`);
      });
      
}