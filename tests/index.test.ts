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
});
