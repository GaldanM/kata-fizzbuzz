import fizzbuzz from "../src/fizzbuzz";

function testFizzBuzz(input: number, expectedOutput: number | string) {
  const output = fizzbuzz(input);

  expect(output).toStrictEqual(expectedOutput);
}

describe("fizzBuzz", () => {
  it("number 1 should return 1", () => {
    testFizzBuzz(1, 1);
  });
  it("number 2 should return 2", () => {
    testFizzBuzz(2, 2);
  });
  it("number 3 should return Fizz", () => {
    testFizzBuzz(3, "Fizz");
  });
  it("number 6 should return Fizz", () => {
    testFizzBuzz(6, "Fizz");
  });
  it("number 9 should return Fizz", () => {
    testFizzBuzz(9, "Fizz");
  });
  it("number 5 should return Buzz", () => {
    testFizzBuzz(5, "Buzz");
  });
  it("number 10 should return Buzz", () => {
    testFizzBuzz(10, "Buzz");
  });
  it("number 15 should return FizzBuzz", () => {
    testFizzBuzz(15, "FizzBuzz");
  });
});
