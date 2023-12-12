"use strict";
// let produto: string = 'Livro'
// const preco: number = 25
const produto = 'Livro';
const preco = 25;
// const carro: {
//   marca: string;
//   portas: number;
// } = {
//   marca: 'Audi',
//   portas: 5
// }
const carro = {
    marca: 'Audi',
    portas: 5
};
// const barato: boolean | string = preco < 30 ? true : 'Não é barato'
const barato = preco < 30 ? true : 'Não é barato';
// returning a number
const somar = (a, b) => {
    return a + b;
};
// returning a string
const somarString = (a, b) => {
    return `${a + b}`;
};
const nintendo = {
    nome: 'Nintendo',
    preco: '300'
};
const transformarPreco = (produto) => {
    produto.preco = `R$ ${produto.preco}`;
    return produto;
};
console.log(transformarPreco(nintendo));
//////////////////////////////////////////////////////////
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        const value = Number(input.value);
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
