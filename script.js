//check if person is over 21

// let age = 101

// if (age >= 21) {
//   console.log("You can now enter the club!")
// } else {
//   console.log("You are a baby, comeback when you are older")
// }

//check if they are 100 years, this will alow them to play for free

// if (age === 100) {
//   console.log("You are welcome to play for free for one day!")
// } else if (age < 100) {
//   console.log("You are too young!")
// } else {
//   console.log("You alredy had your day!")
// }


//create two variables first card and second card
//set teir value to random between 2-11
//create a variable sum and set it to sum the two variables above

let firstCard = Math.floor((Math.random()*11) + 2);
let secondCard = Math.floor((Math.random()*11) + 2);

console.log(firstCard)
console.log(secondCard)

let sum = firstCard + secondCard
console.log(sum)

if (sum < 21 ) {
  console.log("Do you want another card?")
} else if (sum === 21) {
  console.log("You have won!")
} else {
  console.log("You have lost! Try again!")
}
