var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var link = document.querySelector('.link');
// console.log(link?.href)
function getData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function handleData() {
    return __awaiter(this, void 0, void 0, function () {
        var notebook;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getData('https://api.origamid.dev/json/notebook.json')];
                case 1:
                    notebook = _a.sent();
                    console.log(notebook);
                    console.log(notebook.preco);
                    return [2 /*return*/];
            }
        });
    });
}
handleData();
