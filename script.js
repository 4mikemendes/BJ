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
// let firstCard = 19
// let secondCard = 2
let sum = firstCard + secondCard
let blackJack = false
let isAlive = false
let message = " "
let messageEl =  document.getElementById("message-el")

console.log(firstCard)
console.log(secondCard)
console.log(sum)
console.log(message)
console.log(messageEl)

function start() {

if (sum < 21 ) {
  message = "Do you want another card?"
  isAlive = true
} else if (sum === 21) {
  message = "You have won!"
  isAlive = true
  blackJack = true
} else {
  message = "You have lost! Try again!"
  isAlive = false
}
  messageEl.textContent = message

}






