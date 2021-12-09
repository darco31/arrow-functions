/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addtwoNumbers(a, b) {
//     return a + b
// }
// result = addtwoNumbers(3, 4)

// console.log(result)

// Arrow Function With Parameters used in more complex functions
const addtwoNumbers = (a, b) => {
    return a + b
}
result = addtwoNumbers(3, 4)

console.log(result)


// Single Line Arrow Function With Parameters

const addtwoNum2 = (a, b) => a + b;
result2 = addtwoNum2(23, 4)

console.log(result2)


// Implicit Returns

const saySomething = message => console.log(message)
saySomething('Hello')

// declaring a function with no parameters needs a set of empty parenthesis

const sayHello = () => console.log('hello')
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multi line string
    </p>`
)

console.log(returnMultipleLines())