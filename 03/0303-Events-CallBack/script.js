"use strict";
console.log('connected...');
// ----------------------------------------------
// const button = document.querySelector('button')
// const handleClick = (event: PointerEvent) => {
//   console.log(event.pageX)
// }
// button?.addEventListener('pointerdown', handleClick)
// // ----------------------------------------------
// const handleScroll = (event: Event) => {
//   console.log(event)
// }
// window.addEventListener('scroll', handleScroll)
// // ----------------------------------------------
// const menuActivate = (event: Event) => {
//   if(event instanceof MouseEvent) {
//     console.log(`mouse event ${event.pageX}`)
//   }
//   else if(event instanceof TouchEvent) {
//     console.log(`touch event ${event.touches[0].pageX}`)
//   }
//   else if(event instanceof KeyboardEvent) {
//     console.log(`key event ${event.key}`)
//   }
//   else return null
// }
// document.documentElement.addEventListener('mousedown', menuActivate)
// document.documentElement.addEventListener('touchstart', menuActivate)
// window.addEventListener('keydown', menuActivate)
// ------------------------------------------------
// const button = document.querySelector('button')
// function handleClick(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this)
//   console.log(event)
// }
// button?.addEventListener('click', handleClick)
// const button = document.querySelector('button')
// function handleClick(event: MouseEvent) {
//   const target = event.currentTarget
//   if(target instanceof HTMLElement) {
//     console.log(target.innerHTML)
//   }
// }
// button?.addEventListener('click', handleClick)
////////////////////////////////////////////////////
// Utilizando a estrutura HTML/CSS abaixo, crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const nav = document.getElementById('nav');
const hamburger = document.getElementById('btn-mobile');
const handleClick = () => {
    if (hamburger instanceof HTMLButtonElement && nav instanceof HTMLElement) {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            hamburger.ariaExpanded = 'true';
            hamburger.ariaLabel = 'Fechar Menu';
        }
        else {
            hamburger.ariaExpanded = 'false';
            hamburger.ariaLabel = 'Abrir Menu';
        }
    }
};
hamburger?.addEventListener('pointerdown', handleClick);
