export class FizzBuzz{
    answerFor(arg0: number): string | number {
        if (isFizzBuzz(arg0)) {
            return 'FizzBuzz';
        }
        else if (isFizz(arg0)) {
            return 'Fizz';
        }
        else if (isBuzz(arg0)) {
            return 'Buzz';
        }
        return arg0;
    }
}

function isFizzBuzz(arg0: number): boolean {
    return arg0 % 3 === 0 && arg0 % 5 === 0;
}
function isFizz(arg0: number): boolean {
    return arg0 % 3 === 0;
}
function isBuzz(arg0: number): boolean {
    return arg0 % 5 === 0;
}

let n = 100; 
const fizzBuzz = new FizzBuzz();
let result:number|string;
for (let i = 1; i <= n; i++) {
    result = fizzBuzz.answerFor(i);
    //console.log(result);
}
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

