console.log('connected...')
// document.body.style.background = '#333'
// ---------------------------------------------------


// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
// ------------------------------------------------------------------------------------------------------------------------



// const form = document.getElementById('form') as HTMLFormElement

// form.addEventListener('keyup', (event) => {
//   // console.log(event)
//   // if(event !== null && event.key === 'Enter' && event.target instanceof HTMLInputElement) {
//   if(event !== null && event.target instanceof HTMLInputElement) {
//     // console.log(event.target.id)
//     // console.log(event.target.value)
//     handleData(event.target)
//   }
// })

// const userData: UserData = {
//   nome: '',
//   email: '',
//   cpf: ''
// }

// function handleData(input: HTMLInputElement) {

//   if(input.id === 'nome') userData.nome = input.value
//   if(input.id === 'email') userData.email = input.value
//   if(input.id === 'cpf') userData.cpf = input.value
//   localStorage.setItem('userData', JSON.stringify(userData))
//   // console.log(userData)
// }

// interface UserData {
//   nome?: string;
//   email?: string;
//   cpf?: string;
// }

// window.addEventListener('load', () => {
//   const data = localStorage.getItem('userData')
//   if(data) {
//     const userData: UserData = JSON.parse(data)
//     form.nome.value = userData.nome
//     form.email.value = userData.email
//     form.cpf.value = userData.cpf
//   }
// })


// -------------------------------------------------------------------------------------------------------

// 1 - Crie uma interface UserData para o formulário abaixo
interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  UserData: any
}

// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
window.UserData = {}

// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
function isUserData(obj: unknown): obj is UserData {
  if(obj && typeof obj === 'object' && ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
    return true
  }
  else {
    return false
  }
  return true
}

function validJSON(str: string) {
  try {
    JSON.parse(str)
    return true
  }
  catch {
    return false
  }
}

// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
function loadLocalStorage() {
  const localUserData = localStorage.getItem('UserData')
  if(localUserData && validJSON(localUserData)) {
    const UserData = JSON.parse(localUserData)
    if(isUserData(UserData)) {
      Object.entries(UserData).forEach(([key, value]) => {
        const input = document.getElementById(key)
        if(input instanceof HTMLInputElement) {
          input.value = value
          window.UserData[key] = value
        }
      })
    }
  }
}
loadLocalStorage()

// 5 - Salve UserData no localStorage
function handleInput({ target }: KeyboardEvent) {
  if(target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value
    localStorage.setItem('UserData', JSON.stringify(window.UserData))
  }
}

// const form = document.querySelector<HTMLElement>('form')
const form = document.querySelector('form') as HTMLElement

// 3 - Adicione um evento de keyup ao formulário
form?.addEventListener('keyup', handleInput)
