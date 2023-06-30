import Start from "./start";
import './sass/index.scss';
import UniqueHash from "./security/Hashes";

const DOM = document.querySelector('#root');
DOM.id = UniqueHash();
Start(DOM); // Renders the Element ID
