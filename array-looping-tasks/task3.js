// Use a for...of loop to concatenate all the elements of an array into a single string.

// **Input:**
// `var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

// **Output:**

// `'TomTimTinTik'`
const names=['Tom', 'Tim', 'Tin', 'Tik'];
// const splitedNames= names.join(``);
// console.log(splitedNames);
let anotherName=``;
for (const name of names) {
    // console.log(name);
    anotherName+=name;
}
console.log(anotherName);