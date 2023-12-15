console.log('connected...')
document.body.style.background = '#999'

function add(a: number, b: number, c?: number): number {
  return a + b + (c || 0)
}
// console.log(add(2, 3, 5))


const del = (a: number, b: number, c?: number) => {
  return a - b - (c || 0)
}
// console.log(del(2, 3, 5))

// ---------------------------------------------------

function changeBackground(color: string) {
  document.body.style.background = color
}
// changeBackground('#333')

const btn = document.querySelector('button')
btn?.click()

// ---------------------------------------------------

function isString(value: any) {
  if(typeof value === 'string') {
    return true
  }
  return false
}
// console.log(isString(200))

// ---------------------------------------------------

function abort(message: string): never {
  throw new Error(message)
}
// abort('error')
// console.log('after error')

// ---------------------------------------------------

interface Square {
  side: number;
  area(size: number): number
}

function calculate(shape: Square) {
  shape.area(2)
}

// ---------------------------------------------------

// OVERLOADS
function normalize(value: string): string
function normalize(value: string[]): string[]
function normalize(value: string | string[]): string | string[] {
  if(typeof value === 'string') {
    return value.trim().toLowerCase()
  }
  else {
    return value.map((item) => item.trim().toLowerCase())
  }
}

// console.log(normalize('HELLO').toUpperCase())
// console.log(normalize(['HELLO    ', '    WORLD']).filter((item) => console.log(item)))

function $(seletor: 'a'): HTMLAnchorElement | null
function $(seletor: 'video'): HTMLVideoElement | null
function $(seletor: string): Element | null
function $(seletor: string): Element | null {
  return document.querySelector(seletor)
}

// console.log($('a'))
// console.log($('video'))
// console.log($('.link'))


////////////////////////////////////////////////////////////////////////////////
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
