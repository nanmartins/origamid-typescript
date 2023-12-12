
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

console.log(transformarPreco(nintendo))
