type FizzBuzzRule = (input: number) => boolean;
type FizzBuzzRules = Record<string, FizzBuzzRule>;

function fizzbuzzFactory(rules: FizzBuzzRules): (input: number) => number | string {
  return fizzbuzz;

  function fizzbuzz(input: number): number | string {
    const concatenatedWords = Object.entries(rules).reduce<string[]>((accumulator, [word, condition]) => {
      if (condition(input)) {
        accumulator.push(word);
      }
      return accumulator;
    }, []);

    if (concatenatedWords.length === 0) {
      return input;
    }

    return concatenatedWords.join("");
  }
}

export default fizzbuzzFactory;
