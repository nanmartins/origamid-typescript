console.log('connected...')
document.body.style.background = '#333'

// --------------------------------------------------

function typeGuard(value: any) {
  if(typeof value === 'string') {
    return value.toUpperCase()
  }
  if(typeof value === 'number') {
    return value.toFixed()
  }
  if(value instanceof HTMLElement) {
    return value.innerText
  }
}
typeGuard('hello')
typeGuard(500)
console.log(typeGuard(document.body))

// ---------------------------------------------------

const obj = {
  nome: 'Origamid'
}

if ('nome' in obj) {
  console.log(obj.nome)
}

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json')
  const data = await response.json()
  handleProduct(data)
}

interface Product {
  nome: string;
  total: number;
}

function handleProduct(data: Product) {
  console.log(data)
  // there is no total property in the data, so the code doen't run
  if('total' in data) {
    document.body.innerHTML += `
      <p style="color: #fff">Nome: ${data.nome}</p>
      <p style="color: #fff">Preco: $${data.total * 1.1}</p>
    `
  }
}

fetchProduct()
