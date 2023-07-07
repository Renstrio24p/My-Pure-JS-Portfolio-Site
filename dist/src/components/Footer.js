import { style_footer } from "../start";

export default function FooterContent(Footer){

    Footer.innerHTML = (
        `
            <div class=${style_footer('footer')}>
                <span>&copy; copyright 2023, Waren Gador</span>
            </div>
        `
    )

}