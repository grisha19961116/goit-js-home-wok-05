// Exercise 4
// Write class StringBuilder. On start will get one parameter 'row' which put into properties _alue
// Add for class next functional :
// Geterr value - return current value of _value
// Method append(str)  get parameter str(row) and add it into the end
// Method prepend(str) -   get parameter str(row) and add it into the start value
// Method pad(str) -  get parameter str(row) and add it into the start and end value
class StringBuilder {
  constructor(value) {
    this.value = value;
  }
  append(str) {
    this.value = this.value + str;
  }
  prepend(str) {
    this.value = str + this.value;
  }
  pad(str) {
    this.value = str + this.value + str;
  }
  return;
}
const builder = new StringBuilder(".");

builder.append("^");
console.log(`'${builder.value}'`); // '.^'

builder.prepend("^");
console.log(`'${builder.value}'`); // '^.^'

builder.pad("=");
console.log(`'${builder.value}'`); // '=^.^='
