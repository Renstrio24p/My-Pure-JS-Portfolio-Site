import Sidebar_Render from "../render/sidebar.render";
import { style_side } from "../start";
import Donut from "./sidebar/functions/donut";

export default function SidebarContent(Side){



    Side.innerHTML = (
        `
            <div class=${style_side('top-side')}>
                <div class="${style_side('container')}">
                    <div class="${style_side('dot')}"></div>
                    <img src="./src/images/wareng.webp" alt="profile" />
                </div>
                <h1 class=${style_side('font-size-20px')}>Waren Gador</h1>
                <p class=${style_side('career')}>
                    UI/UX Front-End Web Developer.
                    Javascript & React
                </p>
                <pre class=${style_side('codeit')}>
                    &lt;code&gt; I code it. &lt;/code&gt;
                </pre>
            </div>
            <div class=${style_side('bottom-side')}>
                <div class=${style_side('info')}>
                    <ul class=${style_side('info-list')}>
                        <li>
                            <p class=${style_side('info-detail')}>Country</p>
                            <p class=${style_side('info-ans')}>Philippines</p>
                        </li>
                        <li>
                            <p class=${style_side('info-detail')}>City</p>
                            <p class=${style_side('info-ans')}>Manila</p>
                        </li>
                        <li>
                            <p class=${style_side('info-detail')}>Age</p>
                            <p class=${style_side('info-ans')}>26</p>
                        </li>
                    </ul>
                </div>
                <div class=${style_side('divider')}></div>
                    <div class=${style_side('d-flex-between')}>
                        <div class=${style_side('donut-progress-bar')}>
                            <svg class="${style_side('donut')} viewBox="0 0 100 100">
                                <circle class=${style_side('donut-hole')} cx="50" cy="50" r="45"></circle>
                                <circle class=${style_side('donut-ring')} cx="50" cy="50" r="45"></circle>
                                <circle id='donut-segment2' class=${style_side('donut-segment')} cx="50" cy="50" r="45"></circle>
                                <text id='donut-text2' class=${style_side('donut-text')} x="50" y="50" text-anchor="middle" dy="7"></text>
                            </svg>
                            <h2 class=${style_side('lang')}>Tagalog</h2>

                        </div>
                        <div class=${style_side('donut-progress-bar')}>
                            <svg class="${style_side('donut')} viewBox="0 0 100 100">
                                <circle class=${style_side('donut-hole')} cx="50" cy="50" r="45"></circle>
                                <circle class=${style_side('donut-ring')} cx="50" cy="50" r="45"></circle>
                                <circle id='donut-segment' class=${style_side('donut-segment')} cx="50" cy="50" r="45"></circle>
                                <text id='donut-text' class=${style_side('donut-text')} x="50" y="50" text-anchor="middle" dy="7"></text>
                            </svg>
                            <h2 class=${style_side('lang')}>English</h2>
                        </div>
                    </div>
                    <div class=${style_side('divider')}></div>
                    <div id='stacks'></div>
                    <div class=${style_side('divider')}></div>
                    <div id='checks'></div>
                    <div class=${style_side('divider')}></div>
                    <div class=${style_side('download-cv')}> 
                        <p class='fa-solid fa-download'></p>
                        <a class=${style_side('download')} href='#0'>Download CV</a>
                    </div>
                    <div id='bottom-side-links'></div>
                    </div>
                    </div>
        `
    )

    Donut();

    Sidebar_Render();
}