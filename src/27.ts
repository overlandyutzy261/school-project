class MyClass {
  constructor() {
    this.message = "Hello, World!";
  }

  sayHi() {
    console.log(this.message);
  }
}

const myClassInstance = new MyClass();
myClassInstance.sayHi(); // Output: Hello, World!
