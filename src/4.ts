function getRandomTsCode(): string {
  const code = `
    // This is a comment in TypeScript
    
    function add(a: number, b: number): number {
      return a + b;
    }
    
    console.log("Hello, World!");
    
    interface Person {
      name: string;
      age: number;
    }
    
    const person: Person = { name: "Alice", age: 30 };
    
    const numbers: number[] = [1, 2, 3, 4, 5];
    
    function getEvenNumbers(numbers: number[]) {
      return numbers.filter((number) => number % 2 === 0);
    }
    
    console.log(getEvenNumbers(numbers));
  `;
  
  return code;
}
