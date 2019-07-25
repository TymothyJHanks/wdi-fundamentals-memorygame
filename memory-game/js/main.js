/*console.log("Up and running!");*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId){

cardsInPlay.push(cards[cardId]);
console.log("User Flipped " + cards[cardId]);

if (cardsInPlay.length === 2) {
	console.log();
}
else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match");
} 
else {
	alert("Sorry, try again.");
}

checkForMatch();

}

flipCard(0);
flipCard(2);