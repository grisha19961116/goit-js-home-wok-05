// Exercise 1
// Write function-constructor Account, which creat array wit h methods
// login і email. Into prototype function-constructor add method  getInfo(),
// which lead out into console value fields login і email that array which invoked him .
const Account = function ({ login, email }) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function () {
  return console.log(`Login : ${this.login}, Email : ${this.email}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
