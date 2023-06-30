import { style_right } from "../../../start";

export default function Rightbar_Collapse() {

    const rightbar = document.querySelector('#rightbarcontent');
    const hamburger = document.querySelector(`.${style_right('hamburger')}`);
    const overlay = document.querySelector(`.${style_right('overlay')}`);

    hamburger.addEventListener('click', toggleRightBar);
    document.addEventListener('click', closeRightBar);

    function toggleRightBar(event) {
        event.stopPropagation();
        rightbar.classList.toggle(`${style_right('collapsed')}`);
        hamburger.classList.toggle(`${style_right('active')}`);
        overlay.classList.toggle(`${style_right('collapsed')}`);
    }

    function closeRightBar(event) {
        if (rightbar.contains(event.target)) {
            rightbar.classList.remove(`${style_right('collapsed')}`);
            hamburger.classList.remove(`${style_right('active')}`);
            overlay.classList.remove(`${style_right('collapsed')}`);
        }
    }

}