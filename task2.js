// 2. Add or remove elements
// 1. Declare an array of 3 tourist destinations
// 2. Add a new tourist destination to your tourist array
// 3. Add two more to your array
// 4. Remove the last tourist destination you have added
// 5. display the final array as output

const touristDestination=['potenga', 'coxbazar', 'mirsarai'];
// amra akta arry te 2 dik tekhe element add korte pari ,samne tekhe and picontekhe
// pison tekhe kono kisu add korle push() method use kora lage.
touristDestination.push('Muhuri projects');
console.log(touristDestination);

// ebar samne tekhe kono kisu add korar jonno unshift use kora hoi .
touristDestination.unshift('Agrabad sisu park');
console.log(touristDestination);


touristDestination.push('Andarkilla' , 'bandarban');
console.log(touristDestination);
touristDestination.unshift('gazipur', 'uttara diabari');
console.log(touristDestination);
console.log(touristDestination.length);