"use strict";
console.log('connected...');
document.body.style.background = '#555';
// -----------------------------------------------------
// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json')
//   const data = await response.json()
//   handleCursos(data)
// }
// fetchCursos()
// function handleCursos(data: unknown) {
//   if(data instanceof Array) {
//     console.log('É um array')
//   }
//   if(Array.isArray(data)) {
//     console.log('É um array 2')
//   }
// }
// -----------------------------------------------------
// function isString(value: unknown): value is string {
//   return typeof value === 'string'
// }
// function handleData(data: unknown) {
//   if(isString(data)) {
//     console.log(data.toUpperCase())
//   }
//   else return console.log('nao e string')
// }
// handleData(300)
// -------------------------------------------------------
// async function fetchProduto() {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json')
//   const data = await response.json()
//   handleData(data)
// }
// fetchProduto()
// interface Produto {
//   nome: string;
//   preco: number;
// }
// function isProduto(value: unknown): value is Produto {
//   // console.log(value)
//   if(value !== null &&typeof value === 'object' && 'nome' in value && 'preco' in value) {
//     return true
//   }
//   else {
//     return false
//   }
// }
// function handleData(data: unknown) {
//   if(isProduto(data)) {
//     console.log(data.nome)
//     console.log(data.preco)
//   }
// }
//////////////////////////////////////////////////////////////////////////
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
async function fetchAPI() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    console.log(data);
    handleFetch(data);
}
fetchAPI();
function isCursos(data) {
    if (data && typeof data === 'object' && 'nome' in data && 'horas' in data && 'tags' in data) {
        return true;
    }
    else {
        return false;
    }
}
function handleFetch(data) {
    if (Array.isArray(data)) {
        data.filter(isCursos).forEach(curso => {
            document.body.innerHTML += `
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Tags: ${curso.tags.join(', ')}</p>
        <hr>
      `;
        });
    }
}
// <p>Aulas: ${curso.aulas}</p>
// <p>Nível: ${curso.nivel}</p>
// <p>Gratuito: ${curso.gratuito ? 'Sim' : 'Não'}</p>
