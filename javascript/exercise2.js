// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
//  Функція повертає число - кількість властивостей.
// first solution
function countProp (object) {
  let total = 0;
  const obj = Object.keys(object);
  return obj.length;
}
console.log(countProp({})); // 0

console.log(countProp({ name: 'Mango', age: 2 })); // 2

console.log(countProp({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
// second solution
function countProps (object) {
  let total = 0 ;
for(const i in object){
  if(typeof object[i] !== undefined ) total += 1;
    }
   return total;
};
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3



