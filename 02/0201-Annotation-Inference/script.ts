document.body.style.background = 'black'
document.body.style.color = 'white'
document.body.style.padding = '10px 20px'

// let produto: string = 'Livro'
// const preco: number = 25

const produto = 'Livro'
const preco = 25

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
}

// const barato: boolean | string = preco < 30 ? true : 'Não é barato'
const barato = preco < 30 ? true : 'Não é barato'

// returning a number
const somar = (a: number, b:number) => {
  return a + b
}

// returning a string
const somarString = (a: number, b:number): string => {
  return `${a + b}`
}

const nintendo = {
  nome: 'Nintendo',
  preco: '300'
}

const transformarPreco = (produto: { nome: string, preco: string}) => {
  produto.preco = `R$ ${produto.preco}`
  return produto
}

const normalizeText = (text: string): string => {
  return text.trim().toLowerCase()
}

// console.log(normalizeText('   TESTE   '))

// const body = document.body
// body.style.backgroundColor = 'black'


/////////////////////EXERCICIO /////////////////////////////

const input = document.querySelector('input');

const total = localStorage.getItem('total');
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector('p');
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem('total', value);
  calcularGanho(value);
}

input.addEventListener('keyup', totalMudou);
