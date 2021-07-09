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

// for (let count = 10; count < 101; count += 10) {
//   console.log(count)
// }

// let cards = [3, 4, 5 ,56, 34, 52]
// for (let i = 0; i < cards.length; i++) {
//   console.log(cards[i])
// }

// foreach
// let sentence = ["sergio", "miguel", "pinto", "domingos", "guerreiro", "mendes"]
// let greetingsEl = document.getElementById("greetings-el")
// for (let i = 0; i < sentence.length; i++) {
//    greetingsEl.textContent += sentence[i] + " "
//    console.log(i[sentence])
// }


// adding two values
// let playerOneTime = 120
// let playerTwoTime = 100
// function getTimeFastest() {
//   if (playerOneTime < playerTwoTime) {
//     return playerOneTime
//   } else if (playerTwoTime < playerOneTime) {
//     return playerTwoTime
//   } else {
//     return playerOneTime
//   }
// }
// function totalRaceTime() {
//   return playerOneTime + playerTwoTime
// }
//   let total = totalRaceTime()
// console.log(total)


// dice
// function dice() {
// let randomNumber = Math.floor(Math.random() * 6) + 1
// return randomNumber
// }
// console.log(dice())





let cards = []
let sum = 0
let blackJack = false
let isAlive = false
let message = " "
let messageEl =  document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard(){
  let result = Math.floor((Math.random()*13) + 1);
  if (result > 10 ) {
    return 10
  }else if (result === 1) {
    return 10
  }else {
    return result
  }
}


function start() {
  isAlive = true
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard
  cards = [firstCard, secondCard]

  renderGame()
}


function renderGame() {
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
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards:" + cards
}


function newCard() {
  let thirdCard = getRandomCard();
  console.log(thirdCard)
  cards.push(thirdCard)
  sum += thirdCard
  renderGame()
}




