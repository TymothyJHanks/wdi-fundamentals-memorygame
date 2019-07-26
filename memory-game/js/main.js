/*console.log("Up and running!");*/

//var cards = ['queen', 'queen', 'king', 'king'];
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
}

function flipCard(){
var cardId = this.getAttribute('data-id');
this.setAttribute('src', cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);



/*if (cardsInPlay.length === 2) {
	console.log();
}
else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match");
} 
else {
	alert("Sorry, try again.");
}*/
checkForMatch();

}

function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		var cardElementQueenO = document.createElement('img');
		cardElementQueenO.src = "images/back.png";
		cardElementQueenO.setAttribute('data-id', i);
		document.getElementById("game-board").appendChild(cardElementQueenO);
		cardElementQueenO.addEventListener('click', flipCard);
	}
}




createBoard();


