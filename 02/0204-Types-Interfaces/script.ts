
console.log('connected...')

type NumberOrString = number | string

let total: NumberOrString = 20
total = '40'

interface Produto {
  name: string;
  price: number;
  keyboard: boolean;
}

const fillData = (data: Produto) => {
  document.body.innerHTML += `
    <div>
      <h2>${data.name}</h2>
      <p>${data.price}</>
      <p>Keyboard: ${data.keyboard ? 'included' : 'not included'}</p>
    </div>
    <hr>
  `
}

const computador: Produto = {
  name: 'Computer',
  price: 700,
  keyboard: false
}
fillData(computador)

fillData({
  name: 'Notebook',
  price: 300,
  keyboard: true
})


type Category = 'design' | 'code' | 'descod'

const printCategory = (category: Category) => {
  console.log(category)
  if(category === 'design') {
    console.log('Paint red')
  }
  else if (category === 'code') {
    console.log('Paint green')
  }
}

printCategory('code')


/////////////////////////////////////////////////////////////
// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  console.log(data)
  showProduct(data);
}

fetchProduct();

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Product) {
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
