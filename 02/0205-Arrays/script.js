"use strict";
console.log('connected...');
document.body.style.background = '#333';
document.body.style.color = '#fff';
///////////////////////////////////////////////////////
const numeros = [10, 20, 30, 40, 50, 60, 3];
const maiorQue10 = (data) => {
    return data.filter((n) => n > 10);
};
// console.log(maiorQue10(numeros))
///////////////////////////////////////////////////////
const valores = [10, 20, 'Teste', 40, 'Produtos', 50];
const filtrarValores = (data) => {
    return data.filter((item) => typeof item === 'string');
};
// console.log(filtrarValores(valores))
///////////////////////////////////////////////////////
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    console.log(data);
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.map((curso) => {
        document.body.innerHTML += `
      <div style="background: #777; padding: 10px 20px; margin-bottom: 15px; border-radius: 5px">
        <h2 style='${curso.nivel === 'iniciante' ? 'color: blue;' : 'color: red;'}'>
          ${curso.nome}
        </h2>
        <p>Aulas: ${curso.aulas}</p>
        <p>Horas: ${curso.horas}</p>
        <p>Nivel: ${curso.nivel}</p>
        <p>${curso.gratuito ? 'Gratuito' : 'Precisa de compra'}</p>
        <p>Tags: ${curso.tags.join(', ').toUpperCase()}</p>
        <p>Aulas: ${curso.idAulas.join(' | ')}</p>
      </div>
    `;
    });
}
