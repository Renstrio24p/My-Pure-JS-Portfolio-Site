import Main_Render from "../render/main.render"

export default function MainContent(Main){

    Main.innerHTML = (
        `
            <div id='route'>
                <section id='home'></section>
            </div>
        `
    )

    Main_Render();
}