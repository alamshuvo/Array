// Write a JavaScript code to reverse the array colors `without using the reverse method`.


// `const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

// `['orange', 'yellow', 'green', 'blue', 'red']`


const colors=['red', 'blue', 'green', 'yellow', 'orange'];
let reverseColor=[];
for (const color of colors) {
    const othersColor=color;
    // console.log(color);
    reverseColor.unshift(othersColor);
    // console.log(reverseColor);
}
console.log(reverseColor);