"use strict";
console.log('connected...');
document.body.style.background = '#333';
class Product {
    name;
    // price?: number
    constructor(name) {
        this.name = name;
        // this.price = price
    }
}
const livro = new Product('Book');
// console.log(livro.formatPrice())
// console.log(livro instanceof Array)
class Book extends Product {
    author;
    constructor(name, author) {
        super(name);
        this.author = author;
    }
}
class Game extends Product {
    players;
    constructor(name, players) {
        super(name);
        this.players = players;
    }
}
const searchProduct = (search) => {
    if (search === 'book3') {
        return new Book('author3', 'book3');
    }
    else if (search === 'game4') {
        return new Game('game4', 4);
    }
    else
        return null;
};
const product = searchProduct('game4');
if (product instanceof Book) {
    console.log(product.author + ' - ' + product.name);
}
if (product instanceof Game) {
    console.log(product.name + ' - ' + product.players);
}
if (product instanceof Product) {
    console.log(product.name + ' from parent class');
}
const audi = {
    name: 'audi'
};
console.log(audi);
// console.log(audi instanceof Car)
// Car only refers to a type, but is used as a value
//////////////////////////////////////////////////////////
// Exercício
// 1 - Selecione o link utilizando o método getElementById.
// 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement) {
    link.style.color = 'white';
    link.href = link.href.replace('http://', 'https://');
}
console.log(link);
