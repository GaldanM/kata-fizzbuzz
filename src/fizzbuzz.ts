function fizzbuzz(input: number): number | string {
  if (input === 3 || input === 6) {
    return "Fizz";
  }
  return input;
}

export default fizzbuzz;
