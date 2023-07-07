import Rightbar_Render from "../render/Home/rightbar.render";
import { style_right } from "../start";
import Rightbar_Collapse from "./rightbar/functions/rightbar_collapse";

export default function RightbarContent(Right) {
  Right.innerHTML = (
    `
    <div id="rightbarcontent" class="${style_right('rightbar')}">
      <div class=${style_right('content')}>
        <div class="${style_right('hamburger')}">
          <div class="${style_right('line')}"></div>
          <div class="${style_right('line')}"></div>
          <div class="${style_right('line')}"></div>
        </div>
        <div class="${style_right('content')}">
          <h2>Portfolio</h2>
          <div id='rightlist'></div>
          <div class="${style_right('overlay')}"></div>
        </div>
      </div>
    </div>
  `
  )

  Rightbar_Collapse();
  Rightbar_Render();

}
