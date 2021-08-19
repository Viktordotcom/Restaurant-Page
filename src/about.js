import chef from './img/chef.jpeg';
import { content } from './index';
import Icon from './img/icon.jpg';


const btnAbout = document.createElement('button');
const title = document.createElement('h3');
const container1 = document.createElement('div')
const container2 = document.createElement('div')
const container3 = document.createElement('div')
const imgBorder1 = document.createElement('div');
const imgBorder2 = document.createElement('div');
const aboutP1 = document.createElement('p');
const aboutP2 = document.createElement('p');
const aboutP3 = document.createElement('p');
const aboutWorkTime = document.createElement('h3')
const chefImg = new Image();
const iconAbout = new Image();
chefImg.src = chef;
iconAbout.src = Icon

btnAbout.textContent = 'ABOUT PAGE';

btnAbout.addEventListener('click', render);

function render(){
    content.replaceChildren()
    imgBorder1.appendChild(chefImg);
    imgBorder2.appendChild(iconAbout);
    
    title.textContent = "The Fictional Restaurant"
    aboutP1.textContent = 'The Fictional Restaurant serves best breakfast enriched with freshly baked pies. There is seating both inside the Manor House and on the patio beside the hotel gardens. A classic menu with refined seasonal pie dishes  elevating the best in local produce is served alongside choice wines from the valley.'
    aboutP2.textContent = 'We are family owned and have no plans to franchise or sell out.  We are committed to serving the best pie in Idaho and we believe that staying family owned is the only way to do that.  We open a few new restaurants each year to serve a few more customers.  If you’ve been with us from the beginning, or joined any time along the way – Thank You!  If you haven’t yet discovered our Fictional Restaurant, we invite you to come on in.   We promise it’s a habit you’ll come to love.'
    aboutWorkTime.textContent = 'Open from';
    aboutP3.textContent = 'Monday to Friday 7AM - 3PM';
    
    container1.appendChild(imgBorder1);
    container1.appendChild(aboutP1);
    container2.appendChild(imgBorder2);
    container2.appendChild(aboutP2);
    container3.appendChild(aboutWorkTime)
    container3.appendChild(aboutP3);


    content.appendChild(title);
    content.appendChild(container1);
    content.appendChild(container2);
    content.appendChild(container3);
}



export {btnAbout,render}; 