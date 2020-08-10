// Завдання 5
// Напиши клас Car із зазначеними властивостями і методами.

class Car {
  constructor({maxSpeed,speed = 0,isOn = false,distance = 0,price}) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
  get price(){
    return this._price;
  }
  set price(value){
    return this._price = value;
  }
  turnOn() {
    return this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if(this.speed <= this.maxSpeed){
      this.speed = this.speed + value;
      if(this.speed >= this.maxSpeed){
        return this.speed = `it's more then speed limit!!!`;
      }
    }
  }
  decelerate(value) {
    if(this.speed > 0){
      this.speed = this.speed - value;
    }
  }
  drive(hours) {
    if(this.isOn === true){
      this.distance += this.speed*hours;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(120);
mustang.drive(2);

console.log(mustang)
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(mustang.price); // 2000

mustang.price = 4000;
console.log(mustang)

mustang.turnOn();
mustang.accelerate(99);
mustang.drive(2);
console.log(mustang)

mustang.turnOn();
mustang.accelerate(120);
mustang.drive(2);
console.log(mustang)

// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 4000
console.log(mustang.price); // 4000

const ferari = new Car ({maxSpeed:360,price:200000,isOn:true,speed:235,distance:1500})
console.log(ferari);