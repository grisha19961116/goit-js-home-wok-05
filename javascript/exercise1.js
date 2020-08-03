// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
console.log(user);
// before changes
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';
console.log(user);
// after changes
const keys = Object.keys(user);
for(const keyValue of keys){
 console.log(`${keyValue} : ${user[keyValue]}`);
}
// show key and him value

