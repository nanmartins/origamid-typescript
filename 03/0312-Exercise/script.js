"use strict";
console.log('connected...');
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
window.UserData = {};
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
function isUserData(obj) {
    if (obj && typeof obj === 'object' && ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true;
    }
    else {
        return false;
    }
    return true;
}
function validJSON(str) {
    try {
        JSON.parse(str);
        return true;
    }
    catch {
        return false;
    }
}
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
function loadLocalStorage() {
    const localUserData = localStorage.getItem('UserData');
    if (localUserData && validJSON(localUserData)) {
        const UserData = JSON.parse(localUserData);
        if (isUserData(UserData)) {
            Object.entries(UserData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
loadLocalStorage();
// 5 - Salve UserData no localStorage
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('UserData', JSON.stringify(window.UserData));
    }
}
// const form = document.querySelector<HTMLElement>('form')
const form = document.querySelector('form');
// 3 - Adicione um evento de keyup ao formulário
form?.addEventListener('keyup', handleInput);
