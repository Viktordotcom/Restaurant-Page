import { content } from './index';
import cherry from './img/cherry.jpg'
import appleCrumb from './img/AppleCrumb.jpg'
import pecan from './img/Pecan.jpg'
import keyLime from './img/KeyLime.jpg'
import mississipiMud from './img/MississipiMud.jpg'
import sugarfire from './img/Sugarfire.jpg'
import seasonalWhoopie from './img/SeasonalWhoopie.jpg'
import seasonalHand from './img/SeasonalHand.jpeg'


const btnMenu = document.createElement('button');
const title = document.createElement('h3');
const container = document.createElement('div');


title.textContent = 'MENU'
btnMenu.textContent = 'MENU PAGE'
container.setAttribute('id', 'container-menu');

  
    
    
    function render(){
        content.replaceChildren()
        container.replaceChildren()
        let modal = document.createElement('div');

        modal.setAttribute('class', 'modal');
        const cherryP = new Image();
            cherryP.src = cherry;
        const appleP = new Image();
            appleP.src = appleCrumb;
        const pecanP = new Image();
            pecanP.src = pecan;
        const keyLimeP = new Image();
            keyLimeP.src = keyLime;
        const mississipiMudP = new Image();
            mississipiMudP.src = mississipiMud
        const sugarfireP = new Image();
            sugarfireP.src = sugarfire;
        const seasonalWhoopieP = new Image();
            seasonalWhoopieP.src = seasonalWhoopie;
        const seasonalHandP = new Image();
            seasonalHandP.src = seasonalHand;


        const menu = ['Cherry', 'Apple Crumb', 'Pecan', 'Key Lime ', 'Mississipie Mud ', 'Sugarfire ', 'Seasonal Whoopie ', 'Seasonal Hand ']
        const menuImg = [cherryP, appleP, pecanP, keyLimeP, mississipiMudP, sugarfireP, seasonalWhoopieP, seasonalHandP]
        const price = ['10$', '8$', '8$', '12$', '15$', '6.5$', '1$', '12$']
        for(let i=0;i<menu.length;i++){
            let pBorder = document.createElement('div');
            let descP = document.createElement('p');

            menuImg[i].addEventListener('click', ()=>{
                modal.appendChild(menuImg[i])
                modal.appendChild(descP)
                modal.classList.add('open')
            });

            modal.addEventListener('click', (e)=>{
                if(e.target.classList.contains('modal')){
                    pBorder.appendChild(menuImg[i])
                    pBorder.appendChild(descP)
                    modal.classList.remove('open')
                }
            })
            pBorder.setAttribute('class', 'menu-border')
            descP.textContent = menu[i] + ' ' + 'Pie' +  ' ' + price[i] 
            pBorder.appendChild(menuImg[i])

            pBorder.appendChild(descP)
            container.appendChild(pBorder)
        }
        content.appendChild(title)
        container.appendChild(modal)
        content.appendChild(container)
    }

btnMenu.addEventListener('click', render);

export {btnMenu};