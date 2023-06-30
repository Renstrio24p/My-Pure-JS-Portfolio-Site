import { style_main } from "../../start";

export default function ServiceList(Services){
    Services.innerHTML = (
        `
            <h1 class=${style_main('service-title')}>My Services</h1>
            <ul class=${style_main('servicelist')}>
                <li class=${style_main('service-item')}>
                        <h2>Web Development  <i class="fa-solid fa-code"></i></h3>
                        <p> Front-End Designing for UI/UX. 
                            SEO Optimization, Performance.</p>
                </li>
                <li class=${style_main('service-item')}>
                        <h2>Data Analytics <i class="fa-solid fa-chart-simple"></i></h3>
                        <p> Clean and Optimized Data Errors from the
                            Database recontruct corrupted data.</p>
                </li>
                <li class=${style_main('service-item')}>
                        <h2>Networking <i class="fa-solid fa-network-wired"></i></h3>
                        <p> Front-End Designing for UI/UX. 
                            SEO Optimization, Performance.</p>
                </li>
            </ul>
        `
    )
}