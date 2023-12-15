console.log('connected...')
document.body.style.background = '#555'
// ---------------------------------------------------

function typeGuard(value: any) {
  if(typeof value === 'string') {
    return value.toUpperCase()
  }
  if(typeof value === 'number') {
    return value.toFixed()
  }
  if(value instanceof HTMLElement) {
    return value.insertAdjacentHTML('beforeend', 'Inserted by HTMLElement')
  }
}

console.log(typeGuard('hello'))
console.log(typeGuard(300))
console.log(typeGuard(document.body))
