// ### 3. Checking Array Membership with ‘includes’

//Instructions:

// 1. Create an array of books containing different book.

// 2. Use the includes method to check if the array contains a javascript book.

// 3. Print a message to the console indicating whether the element is present in the array or not.

const books=['Accounting', 'management', 'alaler gorer dulal', 'pother pasaali', 'biral', 'javascript'];
// includes er  maddhome amra chek korte pari j akta array te ki oi element ta  ache kina .jodi takhe tahole true return korbe r jodi na takhe tahole false return korebe.
console.log(books.includes('javascript'));
if (books.includes('javascript')) {
    console.log('wow taiel javascript ache ,ajke khela hoebe!');
} 
else {
    console.log("dur ballagena javascript sikhbo ajke ");
}