
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// **Input:**
// `const numbers = [12, 98, 5, 41, 23, 78, 46];`

// **Output:**

// `[12, 98, 76, 46]`
const numbers =[12, 98, 5, 41, 23, 78, 46,12];
let evenNumbers=[];
for (const number of numbers) {
    // console.log(number);
    if (number%2!==0) {
        continue;
        // console.log(number);
        // evenNumbers.push(number);
    }
    evenNumbers.push(number);
}
console.log(evenNumbers);