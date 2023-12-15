"use strict";
console.log('connected');
document.body.style.background = '#333';
// ----------------------------------------------------------------
// function returnType<variable>(a: variable): variable {
//   return a
// }
// console.log(returnType<string>('hello world'))
// console.log(returnType<number>(300))
// console.log(returnType(true))
// -----------------------------------------------------------------
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const fruits = ['apple', 'banana', 'orange', 'kiwi', 'grape', 'strawberry', 'pineapple']
// function firstFive<ListType>(list: ListType[]): ListType[] {
//   return list.slice(0, 5)
// }
// console.log(firstFive(numbers))
// console.log(firstFive(fruits))
// -----------------------------------------------------------------
// function notNull<T>(arg: T) {
//   if(arg !== null) return arg
//   else return null
// }
// console.log(notNull('hello')?.length)
// console.log(notNull(400)?.toFixed(2))
// -----------------------------------------------------------------
// function dataType<T>(a: T): { data: T, type: string } {
//   const result = {
//     data: a,
//     type: typeof a
//   }
//   // console.log(result)
//   return result
// }
// console.log(dataType('hello'))
// console.log(dataType(300))
// ------------------------------------------------------------------
// function extractText<T extends HTMLElement>(el: T) {
//   return {
//     text: el.innerText,
//     el
//   }
// }
// const link = document.querySelector('a')
// if(link) {
//   console.log(extractText(link).el.href)
// }
// ------------------------------------------------------------------
// function $<T extends HTMLElement>(selector: string): T | null {
//   return document.querySelector(selector)
// }
// const link = $<HTMLAnchorElement>('a')
// console.log(link?.href)
// ------------------------------------------------------------------
const link = document.querySelector('.link');
// console.log(link?.href)
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook);
    console.log(notebook.preco);
}
handleData();
