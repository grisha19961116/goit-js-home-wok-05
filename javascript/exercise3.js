// Exercise 3
// Write class Storage, which will creat arrays for control products storage.
// When invoking get one argument - star index of massive products and write it into properties items.Add methods class:
class Storage {
  constructor(massive = []) {
    this.massive = massive;
  }
  getItems() {
    return this.massive;
  }
  addItem(item) {
    return this.massive.push(item);
  }
  removeItem(item) {
    const index = this.massive.indexOf(item);
    if (index > -1) {
      return this.massive.splice(index, 1);
    }
  }
}
const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.table(items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
