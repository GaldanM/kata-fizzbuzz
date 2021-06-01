function fizzbuzz(input: number): number | string {
  if (input % 3 === 0) {
    return "Fizz";
  }

  if (input % 5 === 0) {
    return "Buzz";
  }

  return input;
}

export default fizzbuzz;
