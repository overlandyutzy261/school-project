class MyClass {
  constructor(private readonly name: string) {}

  public sayHello(): void {
    console.log(`Hello, my name is ${this.name}!`);
  }
}
