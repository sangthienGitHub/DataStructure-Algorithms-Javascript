class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteAtIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }

  insertAt(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }
}

const myArray = new MyArray();
console.log("After initialize", myArray);
myArray.push(9);
myArray.push(12);
myArray.push(14);
myArray.push(20);
myArray.push(25);
console.log("After insert", myArray);
myArray.pop();
console.log("after 1 pop", myArray);
myArray.deleteAtIndex(2);
console.log("after delete at index 2", myArray);
myArray.insertAt(10, 1);
console.log("after insert at index 1", myArray);
