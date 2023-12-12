document.body.style.background = '#333'

let total: string | number = 200
total = '400'

const isNumber = (value: string | number) => {
  if(typeof value === 'number') {
    // console.log(true)
    return true
  }
  else {
    // console.log('false')
    return false

  }
}
// console.log(isNumber(300))

// returning  always a single type for a function, if true return a true, and if false, dont return a string to avoid an error
if(isNumber('200')) {
  console.log('is number')
}


const button = document.querySelector('button')

button?.click()


//////////////////////////////////////////////
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")


const toNumber = (value: number | string) => {
  if(typeof value === 'number') {
    return value
  }
  else if (typeof value === 'string') {
    return Number(value)
  }
  else {
    throw "value deve ser um número ou uma string"
  }
}


console.log(toNumber('200'))
