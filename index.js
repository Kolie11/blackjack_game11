//Declaring the variables for the game

let player = {
    name: "Name",
    chips : "chips/€"
}

let king = {
    img : "images/radioco-radio.gif"
}





let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let kingImg = document.getElementById("king")
let start = document.getElementById("start")
let startContent = document.getElementById("start-content")
let footer = document.getElementById("footer")



start.addEventListener("mouseover", ()=>{
    startContent.textContent = "Do you want to start the game?"
})
start.addEventListener("click", ()=>{
  startContent.classList.add("start-content")
    startContent.style.display = "none"
})
 playerEl.textContent = prompt("Please enter your name to start the Game!" + " " + player.name + ": $" + player.chips)


//function to get random number for first and secondCard
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
//function to start the game 
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

//function to render the content of the game on the page
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!" 
        messageEl.style.color ="#129490"
        sumEl.style.background ="#129490"
        sumEl.style.width = "150px"
        hasBlackJack = true
        kingImg.src = king.img
        kingImg.style.display ="block"
 
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

//function for new card, I can say for the third card.
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
