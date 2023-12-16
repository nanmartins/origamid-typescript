console.log('connected...')
document.body.style.background = '#333'

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json')
  return response.json() as Promise<Produto>
}


async function handleProduto() {
  const produto = await fetchProduto()
  console.log(produto.nome)
}

handleProduto()
