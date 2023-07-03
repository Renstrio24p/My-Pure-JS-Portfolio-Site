import Typed from "typed.js";

export default function typeJS(){
    const typed = new Typed('#type-text', {
        strings: [`I'm a Front-End Developer`,
                  `I'm building React projects.`, 
                  `I'm building Typescript \nand Javascript Projects.`,
                  `I'm a template creator of React,\n Javascript , typescript using Webpack `
                ],
        typeSpeed: 20,
        backSpeed: 5,
        smartBackspace: true,
        loop: true,
        contentType: 'html' 
      });
}