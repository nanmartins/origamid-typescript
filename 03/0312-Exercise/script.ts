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

const form = document.getElementById('form') as HTMLFormElement

form.addEventListener('keyup', (event) => {
  // console.log(event)
  if(event !== null && event.key === 'Enter' && event.target instanceof HTMLInputElement) {
    console.log(event.target.id)
    console.log(event.target.value)
    handleData(event.target)
  }
})

const userData: UserData = {
  nome: '',
  email: '',
  cpf: ''
}

function handleData(input: HTMLInputElement) {

  if(input.id === 'nome') userData.nome = input.value
  if(input.id === 'email') userData.email = input.value
  if(input.id === 'cpf') userData.cpf = input.value
  localStorage.setItem('userData', JSON.stringify(userData))
  console.log(userData)
}

interface UserData {
  nome: string;
  email: string;
  cpf: string;
}

window.addEventListener('load', () => {
  const data = localStorage.getItem('userData')
  if(data) {
    const userData: UserData = JSON.parse(data)
    form.nome.value = userData.nome
    form.email.value = userData.email
    form.cpf.value = userData.cpf
  }
})
