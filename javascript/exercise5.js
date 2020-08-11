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
    if((this.speed+value) <= this.maxSpeed){
      this.speed +=value;
    } else if((this.speed+value) >= this.maxSpeed){
      return console.error(this.speed,`it's more then speed limit!!!`);
    }
  }
  decelerate(value) {
      if((this.speed - value) >= 0){
      this.speed = this.speed - value;
      } else if((this.speed - value) <= 0){
        return console.error(this.speed,`you can't reduce because resalt will be less then 0!res < 0`);
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
mustang.accelerate(136);
mustang.decelerate(36);   //in this case decelerate is work speed is 100 km per ahour
mustang.drive(2);
console.log(mustang)

mustang.accelerate(60);
mustang.decelerate(180);  //in this case decelerate is not work!!!and in console we will have attention
mustang.drive(1);
console.log(mustang)

// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.drive(1);
mustang.turnOff();

console.log(mustang.price); // 2000

mustang.price = 4000;
console.log(mustang)

mustang.turnOn();
mustang.accelerate(25); //25 km per a hour
mustang.drive(2);
console.log(mustang)

mustang.turnOn();
mustang.accelerate(50);  //75 km per a hour
mustang.drive(2);
console.log(mustang)

mustang.accelerate(100); //175 km per a hour
console.log(mustang)

mustang.accelerate(50);
//  // error and valu accelerate will not add new value and
//  it will have prevelios meaning 175 km per a hour
console.log(mustang)

mustang.accelerate(25); //and this case we are continue and add new value for amount 
// accelerate beffore error  (175 km + 25) = 200 km per a hour
console.log(mustang)

// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 4000
console.log(mustang.price); // 4000

const ferari = new Car ({maxSpeed:360,price:200000,isOn:true,speed:235,distance:1500})
console.log(ferari);