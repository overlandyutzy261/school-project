// Function to generate a random number between 1 and 10
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

// Function to check if the number is even or odd
const isEvenOdd = (number: number): boolean => {
  return number % 2 === 0 ? true : false;
};

// Main function to get an even number between 1 and 10
const getRandomEvenNumber = () => {
  let randomNumber = getRandomNumber();
  while (!isEvenOdd(randomNumber)) {
    randomNumber = getRandomNumber();
  }
  return randomNumber;
};

// Main function to get an odd number between 1 and 10
const getRandomOddNumber = () => {
  let randomNumber = getRandomNumber();
  while (isEvenOdd(randomNumber)) {
    randomNumber = getRandomNumber();
  }
  return randomNumber;
};
