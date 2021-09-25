let card = 0
let cards = "Cards : "
let sum = 0
let hasBlackJack = false
let isAlive = true
let massage = "do you want to take a new card?"
let massageEl = document.getElementById("massageEl");
let cardsEl = document.getElementById("cardsEl")
let sumEl = document.getElementById("sumEl")
let takeEl = document.getElementById("takeEl")
let canPlay = 0

let games = 0
let gamesEl = document.getElementById("games")
let winsEl = document.getElementById("wins")
let lossesEl = document.getElementById("losses")
let wins = 0
let losses = 0

let player = {
	name: "Per",
	score: 145,
	R: function() {
		playerEl.textContent = player.name + " : $" + player.score
	}
}
let playerEl = document.getElementById("per-El")

player.R()
massageEl.innerText = massage
iffs()
function add(){
	iffs()
	if(isAlive && hasBlackJack == false){
		card = Math.round(Math.random() * 9) + 2
		cards += card + " - "
		sum += card;
		cardsEl.textContent = cards
		sumEl.textContent = "Sum : " + sum
	}
	if (takeEl.innerText == "Start a new game?" && canPlay >= 1) {
		if (hasBlackJack) {
			wins += 1
			winsEl.innerText = "Wins : " + wins
			player.score += 10
			player.R()
		} else if (isAlive == false) {
			losses += 1
			lossesEl.innerText = "Losses : " + losses
			player.score -= 10
			player.R()
		}
		cards = "Cards : "
		cardsEl.innerText = cards
		sum = 0
		sumEl.innerText = "Sum : "
		takeEl.innerText = "take a card"
		hasBlackJack = false
		isAlive = true
		games += 1
		gamesEl.innerText = "Games : " + games
	}
	iffs()
}
function iffs(){
	if (sum < 21) {
		massage = "do you want to take a new card?"
		massageEl.innerText = massage
		takeEl.innerText = "take a card"
	} else if (sum == 21) {
		massage = "you'v get the black jack"
		massageEl.innerText = massage
		hasBlackJack = true
	} else {
		massage = "you are out of the game"
		massageEl.innerText = massage
		isAlive = false
	}if (hasBlackJack || isAlive == false) {
		takeEl.innerText = "Start a new game?"
		canPlay += 1
	}
	
}
function enterName(){
	const name = document.getElementById("playerName-El")
	if(name.value != ""){
		player.name = name.value
		document.getElementById("enterName").style.visibility = "hidden"
		document.getElementById("mainGame").style.visibility = "unset"
		player.R()
	}
	else if(name.value === ""){
		alert("Please enter your name")
	}
}