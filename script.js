// LOOPS EXERCISE 
let b = `=`.repeat(20)

// 1 
for (i = 1; i <= 7; i++) {
    console.log(i);
};
console.log(b);
//2 
for (i = 5; i <= 25; i += 4) {
    console.log(i);
};
console.log(b);
//3 
//a
const wizards = [`Harry Potter`, 
`Hermione Granger`, 
`Ron Weasley`];

//b 
for (friends of wizards) {
    console.log(friends);
}
console.log(b);

//4 
//a 
let harryPotterMovies = 0;
//b
while (harryPotterMovies < 8) {
    harryPotterMovies++;
    //c
    console.log(harryPotterMovies);
};
console.log(b);

//BONUS
//5 
//a
const hogwartsHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
];
//b 
for (houses of hogwartsHouses) {
    for (letter of houses) {
        console.log(letter);
    }
}
console.log(b);

//6
//a
const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
];

//b
let quoteLine = ``;
for (i = 0; i < quote.length; i++) {
    quoteLine = quoteLine + quote[i] + ` `;
};
console.log(quoteLine);

console.log(b);

//7
for (i = 1; i <= 25; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Expecto Patronum!`);
    } else if (i % 3 === 0) {
        console.log(`Expecto`);
    } else if (i % 5 === 0) {
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
    };