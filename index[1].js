let player = {
    name: "♠️JOY",
    chips: 100
}
let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let cardsEl = document.getElementById("cards")
let totalEl = document.getElementById("total")
let playerEl = document.getElementById("profile")
let textEl = document.getElementById("text-el")

playerEl.textContent = player.name + " : $" + player.chips

function getRandomCard(){
    let randomNo = Math.floor( Math.random()*13 ) +1
     if ( randomNo > 10){
        return 10
    }
     else if ( randomNo === 1){
        return 11
    }
     else {
        return randomNo
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard 
    game()
}
 function game(){
    
    cardsEl.textContent = "CARDS: "
    for ( let i=0 ; i<cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
    totalEl.textContent = "SUM : " + sum
    if (sum <= 21){
        text = "Do You Want to Draw a New Card♣️?"
    }
    else if (sum === 21){
        text = "YOU'VE GOT A BlackJack!!"
        hasBlackJack = true
    }
    else{
        text = "You're Out Of The Game🃏"
        isAlive = false
    }
    textEl.textContent = text
 }
 
 function newCard(){ 
    
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    game()
}
 }