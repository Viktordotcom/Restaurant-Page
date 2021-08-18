import { content } from './index';

const btnContact = document.createElement('button');
btnContact.textContent = 'CONTACT PAGE'


function render(){
content.replaceChildren()
    const contactForm = document.createElement('form')
    const container = document.createElement('div');
    const box1 = document.createElement('div');
    const box2 = document.createElement('div');
    const box3 = document.createElement('div');
    const title = document.createElement('h3');
    const createH1 = document.createElement('h4');
    const createH2= document.createElement('h4');
    const createH3 = document.createElement('h4');
    const createP1 = document.createElement('p');
    const createP2 = document.createElement('p');
    const createP3 = document.createElement('p');

    const name = document.createElement('input')
    const surName = document.createElement('input')
    const email = document.createElement('input')
    const question = document.createElement('textarea')
    const submitForm = document.createElement('button')

    name.setAttribute('placeholder', 'Your Name')
    surName.setAttribute('placeholder', 'Your Surname')
    email.setAttribute('placeholder', 'Your e-mail')
    question.setAttribute('placeholder', 'Write something...')

    submitForm.textContent = 'Submit'
    contactForm.textContent = 'Write us'
    contactForm.setAttribute('id','contact-form')

    container.setAttribute('id', 'container-contact')
    title.textContent = 'CONTACT US'
    createH1.textContent = 'Make a reservation'
    createH2.textContent = 'Ask about a product'
    createH3.textContent = 'Technical issues'
    createP1.textContent = '+555-555-551'
    createP2.textContent = '+555-555-552'
    createP3.textContent = '+555-555-553'

    contactForm.appendChild(name);
    contactForm.appendChild(surName);
    contactForm.appendChild(email);
    contactForm.appendChild(question);
    contactForm.appendChild(submitForm);

    box1.appendChild(createH1)
    box1.appendChild(createP1)
    box2.appendChild(createH2)
    box2.appendChild(createP2)
    box3.appendChild(createH3)
    box3.appendChild(createP3)
    
    container.appendChild(title)
    container.appendChild(box1);
    container.appendChild(box2);
    container.appendChild(box3);
    content.appendChild(container)
    content.appendChild(contactForm);
}

btnContact.addEventListener('click', render);

export{btnContact}