let webDvlop = ["HTML", "CSS", "JS", "Bootstrap"];

console.log(webDvlop);

// Add 'React_Native' and 'Php' after removing 'JS'.
let removed = webDvlop.splice(2, 1, 'PHP', 'React_Native')

console.log(webDvlop);
console.log(removed);

// No Removing only Insertion from 2nd 
// index from the ending
webDvlop.splice(-2, 0, 'React')
console.log(webDvlop)


// webDvlop.splice(3, 0, 'React')
// console.log(webDvlop)


// const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
// const start = ;
// const removedItems = fruits.splice(3,0,100,200,300);
// console.log(fruits);
// ["Apple", "Banana"]
// console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]
