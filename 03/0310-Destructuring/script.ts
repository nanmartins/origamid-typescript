console.log('connected...')
document.body.style.background = '#333'
// --------------------------------------------------

const { body }: { body: HTMLElement } = document

interface Produto {
  nome: string;
  preco: number;
}

// function handleData({ nome, preco }: { nome: string; preco: number }) {
//   console.log(nome)
// }

function handleData({ nome, preco }: Produto) {
  console.log(nome)
  console.log(nome.includes('José'))
  console.log(preco?.toFixed(2))
}

handleData({
  nome: "João",
  preco: 100
})


// --------------------------------------------------

function handleClick1({ currentTarget, pageX }: { currentTarget: EventTarget | null; pageX: number }) {
  // console.log(currentTarget)
  // console.log(pageX)
  if(currentTarget instanceof HTMLElement) {
    currentTarget.style.background = '#333'
    currentTarget.innerHTML = `
      <div style="background: #333; color: #fff; padding: 5px 20px">
        <p>Mouse X position: ${pageX}</p>
      </div>

    `
  }
}

function handleClick({ currentTarget, pageX }: MouseEvent) {
  // console.log(currentTarget)
  // console.log(pageX)
  if(currentTarget instanceof HTMLElement) {
    currentTarget.style.background = '#333'
    currentTarget.innerHTML = `
      <div style="background: #333; color: #fff; padding: 5px 20px">
        <p>Mouse X position: ${pageX}</p>
      </div>

    `
  }
}

document.documentElement.addEventListener('click', handleClick)

// -----------------------------------------------------

function comparar(tipo: string, numeros: number[]) {
  console.log(tipo)
  console.log(numeros)
  if(tipo === 'menor') {
    return Math.min(...numeros)
  }
  if(tipo === 'maior') {
    return Math.max(...numeros)
  }
}

console.log(comparar('menor', [1, 2, 3, 4, 5]))
console.log(comparar('maior', [1, 2, 3, 4, 5]))
