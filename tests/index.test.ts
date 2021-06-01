import fizzbuzz from "../src/fizzbuzz";

describe("fizzBuzz", () => {
  it("number 1 should return 1", () => {
    const input = 1;

    const output = fizzbuzz(input);

    expect(output).toStrictEqual(1);
  });
  it("number 2 should return 2", () => {
    const input = 2;

    const output = fizzbuzz(input);

    expect(output).toStrictEqual(2);
  });
  it("number 3 should return Fizz", () => {
    const input = 3;

    const output = fizzbuzz(input);

    expect(output).toStrictEqual("Fizz");
  });
  it("number 6 should return Fizz", () => {
    const input = 6;

    const output = fizzbuzz(input);

    expect(output).toStrictEqual("Fizz");
  });
});
