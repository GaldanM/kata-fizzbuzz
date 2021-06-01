# FizzBuzz

## How does it work ?

This FizzBuzz can take any rule you want.

A rule is a field of an object, or as called in TypeScript, a Record.

For example, if you want to get Fizz when the number is divisible by 3 and Buzz when it's divisible by 5, you create this object:

```js
const rules = {
  Fizz: (input) => input % 3 === 0,
  Buzz: (input) => input % 5 === 0,
}
```

Then, you just have to pass it to the `fizzBuzzFactory` function, which will return the fizzbuzz function for YOUR rules !

```js
const myFizzbuzzFunction = fizzBuzzFactory(rules); // rules is the same as defined above

myFizzbuzzFunction(3); // returns "Fizz"
myFizzbuzzFunction(5); // returns "Buzz"
myFizzbuzzFunction(3); // returns "FizzBuzz"
```

## Prepare

`npm install`

## Test

`npm run test`
