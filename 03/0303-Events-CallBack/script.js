"use strict";
console.log('connected...');
document.body.style.background = '#333';
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
const button = document.querySelector('button');
function handleClick(event) {
    const target = event.currentTarget;
    if (target instanceof HTMLElement) {
        console.log(target.innerHTML);
    }
}
button?.addEventListener('click', handleClick);
