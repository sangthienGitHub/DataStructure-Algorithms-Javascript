class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.peek();
console.log("after peek", myStack);
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
console.log("after push", myStack);
myStack.peek();
console.log("after peek", myStack);
myStack.pop();
myStack.pop();
myStack.pop();
console.log("after pop", myStack);
