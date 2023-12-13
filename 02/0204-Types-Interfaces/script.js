"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log('connected...');
let total = 20;
total = '40';
const fillData = (data) => {
    document.body.innerHTML += `
    <div>
      <h2>${data.name}</h2>
      <p>${data.price}</>
      <p>Keyboard: ${data.keyboard ? 'included' : 'not included'}</p>
    </div>
    <hr>
  `;
};
const computador = {
    name: 'Computer',
    price: 700,
    keyboard: false
};
fillData(computador);
fillData({
    name: 'Notebook',
    price: 300,
    keyboard: true
});
const printCategory = (category) => {
    console.log(category);
    if (category === 'design') {
        console.log('Paint red');
    }
    else if (category === 'code') {
        console.log('Paint green');
    }
};
printCategory('code');
/////////////////////////////////////////////////////////////
// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
function fetchProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const data = yield response.json();
        console.log(data);
        showProduct(data);
    });
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML += `
    <div>
      <h2 style="text-decoration: underline">${data.nome}</h2>
      <p>R$ ${data.preco}</>
      <p>${data.descricao}</p>
      <p>Garantia: ${data.garantia} anos</p>
      <p>Seguro: ${data.seguroAcidentes ? 'Sim' : 'Nāo'}</p>
      <p>Fabricante: ${data.empresaFabricante.nome}, ${data.empresaFabricante.pais}</p>
      <p>Montadora: ${data.empresaMontadora.nome}, ${data.empresaMontadora.pais}</p>
    </div>
  `;
}
