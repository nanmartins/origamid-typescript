console.log('connected...')
document.body.style.background = '#333'
// --------------------------------------------------

type Produto = {
  preco: number;
}

type Carro = {
  portas: number;
  rodas: number;
}

function handleProdutoCarro(dados: Produto & Carro) {
  // console.log(dados.preco)
  // console.log(dados.rodas)
  // console.log(dados.portas)
}

handleProdutoCarro({ preco: 10000, portas: 5, rodas: 4 })

// ----------------------------------------------------

interface InterfaceCarro {
  portas: number;
  rodas: number;
}

interface InterfaceCarro {
  preco: number;
}

const dado01: InterfaceCarro = {
  portas: 2,
  rodas: 4,
  preco: 7000
}

// COM TYPE
type TipoCarro = {
  portas: number;
  rodas: number;
}

type TipoCarroPreco = TipoCarro & {
  preco: number;
}

const dado02: TipoCarroPreco = {
  portas: 5,
  rodas: 4,
  preco: 14000
}

console.log(dado01)
console.log(dado02)

// ----------------------------------------------------

interface Window {
  userID: number;
}

console.log(window.userID = 200)
