
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Input:**
// `const statement = 'I am a hard working person'`

// **Output:**

// `'person working hard a am I'`

// ---
const statement ='I am a hard working person';
const splitedStatement=statement.split(" ");
console.log(splitedStatement);
const anotherStatement=[];
for (const statement of splitedStatement) {
    anotherStatement.unshift(statement);
}
console.log(anotherStatement);
const finalStatement=anotherStatement.join(' ');
console.log(finalStatement);