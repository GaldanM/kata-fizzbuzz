function fizzbuzz(input: number): number | string {
  const isDivisibleBy3 = checkIfDivisibleBy(input, 3);
  const isDivisibleBy5 = checkIfDivisibleBy(input, 5);

  if (isDivisibleBy3 && isDivisibleBy5) {
    return "FizzBuzz";
  } else if (isDivisibleBy3) {
    return "Fizz";
  } else if (isDivisibleBy5) {
    return "Buzz";
  }

  return input;
}

function checkIfDivisibleBy(number: number, divisibleBy: number): boolean {
  return number % divisibleBy === 0;
}

export default fizzbuzz;
