import { style_main } from "../../start";

export default function ServiceList(Services){
    Services.innerHTML = (
        `
            <h1 class=${style_main('service-title')}>My Services</h1>
            <ul class=${style_main('servicelist')}>
                <li class=${style_main('service-item')}>
                        <div class=${style_main('service-title')}>
                            <h2>Web Development</h2>
                            <div class=${style_main('service-icon')}>
                                <i class="fa-solid fa-code"></i>
                            </div>
                        </div>
                        <p> Front-End Designing for UI/UX. 
                            SEO Optimization, Performance.</p>
                </li>
                <li class=${style_main('service-item')}>
                        <div class=${style_main('service-title')}>
                            <h2>Data Analytics</h2>
                            <div class=${style_main('service-icon')}>
                            <i class="fa-solid fa-chart-simple"></i>
                            </div>
                        </div>
                        <p> Clean and Optimized Data Errors from the
                            Database recontruct corrupted data.</p>
                </li>
                <li class=${style_main('service-item')}>
                    <div class=${style_main('service-title')}>
                        <h2>Networking</h2>
                        <div class=${style_main('service-icon')}>
                            <i class="fa-solid fa-network-wired"></i>
                        </div>
                    </div>
                        <p> Diagnositing Incoming Request from the server-side
                             to protect unwanted request.</p>
                </li>
                <li class=${style_main('service-item')}>
                    <div class=${style_main('service-title')}>
                        <h2>Computer Setup</h2>
                        <div class=${style_main('service-icon')}>
                            <i class="fa-solid fa-computer"></i>
                        </div>
                    </div>
                        <p> Setup computer units and optimize computer performance,
                            Diagnosting Computer Errors.</p>
                </li>
            </ul>
        `
    )
}