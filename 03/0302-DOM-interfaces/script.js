"use strict";
console.log('connected...');
document.body.style.background = '#333';
const video = document.querySelector('#custom-video');
if (video instanceof HTMLVideoElement) {
    console.log(video?.volume);
}
const links = document.querySelectorAll('.link');
// console.log(links)
links.forEach(link => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
        // link.style.color = 'red'
    }
    else if (link instanceof HTMLButtonElement) {
        // link.style.background = 'blue'
        // link.style.color = 'white'
        console.log(link.innerText);
    }
    else
        return null;
});
const linksArray = Array.from(links);
const anchorLinks = linksArray.filter(link => link instanceof HTMLAnchorElement);
console.log(anchorLinks);
/////////////////////////////////////////////////////////////////////////
// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.
links.forEach((link) => {
    console.dir(link);
    if (link instanceof HTMLElement) {
        elementStyle(link);
    }
});
function elementStyle(element) {
    element.style.color = 'white';
    element.style.padding = '15px 25px';
    element.style.background = '#777';
    element.style.border = '1px solid #fff';
    element.style.borderRadius = '5px';
    element.style.fontSize = '1.5rem';
    element.onmouseover = () => {
        element.style.background = 'white';
        element.style.color = 'black';
    };
    element.onmouseout = () => {
        element.style.background = '#777';
        element.style.color = 'white';
    };
    if (element instanceof HTMLAnchorElement) {
        element.style.textDecoration = 'none';
    }
}
