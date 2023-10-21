import { FizzBuzz } from '../fizzBuzz'

const fizzBuzz = new FizzBuzz();
let result:number|string;

it('should return 1 if input is 1', () => {
    
    result = fizzBuzz.answerFor(1);
    expect(result).toEqual(1);
})

it('should return 2 if input is 2', () => {
    
    result = fizzBuzz.answerFor(2);
    expect(result).toEqual(2);
})

it('should return Fizz if input is 3', () => {
    
    result = fizzBuzz.answerFor(3);
    expect(result).toEqual('Fizz');
})

it('should return Buzz if input is 5', () => {
    
    result = fizzBuzz.answerFor(5);
    expect(result).toEqual('Buzz');
})

it('should return Fizz if input is 6', () => {
    
    result = fizzBuzz.answerFor(6);
    expect(result).toEqual('Fizz');
})

it('should return Buzz if input is 10', () => {
    
    result = fizzBuzz.answerFor(10);
    expect(result).toEqual('Buzz');
})

it('should return FizzBuzz if input is 15', () => {
    
    result = fizzBuzz.answerFor(15);
    expect(result).toEqual('FizzBuzz');
})

it('should return FizzBuzz if input is 30', () => {
        
    result = fizzBuzz.answerFor(30);
    expect(result).toEqual('FizzBuzz');
})


// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]