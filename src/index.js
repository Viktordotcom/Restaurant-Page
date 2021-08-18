import './style.css'
import {btnAbout, render} from './about';
import { btnMenu } from './menu'
import { btnContact } from './contact';

const content = document.createElement('div');
const navBar = document.createElement('nav');

content.setAttribute('id', 'content');
navBar.setAttribute('id', 'navbar');

document.body.appendChild(navBar);

navBar.appendChild(btnAbout);
navBar.appendChild(btnMenu);
navBar.appendChild(btnContact);

render()
document.body.appendChild(content);
export{content}