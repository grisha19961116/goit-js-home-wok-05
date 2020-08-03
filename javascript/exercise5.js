// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
//  Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];
// first solution which you have tiped for me,thanks know i recocnize main idia how to do it righ!)
const getAllPropVal = function(arr, prop) {
const total = [];
for (const item of arr) {
if (item[prop]){
total.push(item[prop]);
}
}
return total;
};
console.log(getAllPropVal(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropVal(products, 'price'));
console.log(getAllPropVal(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropVal(products, 'category')); // []
// third solution
const getAllPropValue = function (arr,prop) {
    let total =[];
    for(const i of arr){
        for(let j in i){
            if(j = prop){
                total.push(i[j]);
                break;
            } 
        }
    }
        return total;
  };
console.log(getAllPropValue(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropValue(products, 'price'));
console.log(getAllPropValue(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValue(products, 'category')); // []
// second solution
// Задача 5 )
// function getAllPropValues(arr, prop) {
// return arr.map(element => element[prop]);
// }
// так мы еще не умеем )))
// 5) Клик о помощи кидай мне в личку а не в комменты на гид хаб ))) но все ще:
// const getAllPropValues = function(arr, prop) {
// const arrProp = [];
// for (const item of arr) {
// if (item[prop]){
// arrProp.push(item[prop]);
// }
// }
// return arrProp;
// };
// только разбери это решение, я дам подобную задачку.
// Все остальное, кулл! Правь 1,2,5 - и перезаливай на проверочку.
const subjects = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
    { name: 'eagl', price: 1800, quantity: 1 },
    { name: 'fox', price: 1400, quantity: 6 },
    { name: 'biard', price: 2050, quantity: 4 }
  ];

function getAllPropValues(arr, prop) {
  return arr.map(element => element[prop]);
}
console.log(getAllPropValues(subjects, 'name')); // ["Радар", "Сканер", "Дроїд", "Захоплення", "eagl", "fox", "biard"]
console.log(getAllPropValues(subjects, 'price'));
console.log(getAllPropValues(subjects, 'quantity')); // [4, 3, 7, 2, 1, 6, 4]
console.log(getAllPropValues(subjects, 'category')); // []


