"use strict";
console.log('connected...');
document.body.style.background = '#999';
function add(a, b, c) {
    return a + b + (c || 0);
}
// console.log(add(2, 3, 5))
const del = (a, b, c) => {
    return a - b - (c || 0);
};
// console.log(del(2, 3, 5))
// ---------------------------------------------------
function changeBackground(color) {
    document.body.style.background = color;
}
// changeBackground('#333')
const btn = document.querySelector('button');
btn?.click();
// ---------------------------------------------------
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
    return false;
}
// console.log(isString(200))
// ---------------------------------------------------
function abort(message) {
    throw new Error(message);
}
function calculate(shape) {
    shape.area(2);
}
function normalize(value) {
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    }
    else {
        return value.map((item) => item.trim().toLowerCase());
    }
}
function $(seletor) {
    return document.querySelector(seletor);
}
// console.log($('a'))
// console.log($('video'))
// console.log($('.link'))
////////////////////////////////////////////////////////////////////////////////
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
