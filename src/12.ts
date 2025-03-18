interface Person {
  name: string;
  age: number;
}

function getPerson(): Person {
  const names = ["Alice", "Bob", "Charlie"];
  const ages = [24, 35, 18];

  return {
    name: names[Math.floor(Math.random() * names.length)],
    age: ages[Math.floor(Math.random() * ages.length)],
  };
}
