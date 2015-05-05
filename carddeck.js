// Exercise 4
//
// Make a `CardDeck` constructor that returns an object with a
// `cards` property that is an array of `52` numbers, `1..52`.

function CardDeck () {
	this.cards = new Array(52);
	for (var i = 1; i < 53; i++) this.cards.push(i);
}

// 	* Write a method called `deal`  that randomly returns a "card"
// 	(a number from 1 .. 52) from `cards` and removes it from the
// 	`cards` array.

CardDeck.prototype.deal = function() {
	var rand = Math.floor(Math.random() * this.cards.length);
	return this.cards.splice(rand,1)[0];
};

// 	* Write a method called `isFull` that returns `true` or `false` if all `52` cards are present.
CardDeck.prototype.isFull = function() {
	return this.cards.length === 52;
};

// 	* Write a method called `cut` that randomly picks an index and
// 	returns an array of two arrays where the deck was split at that
// 	index.
CardDeck.prototype.cut = function() {
	var cutIndex = Math.floor(Math.random() * this.cards.length);
	var cutArray = [];
	cutArray.push(this.cards.slice(0,cutIndex));
	cutArray.push(this.cards.slice(cutIndex));
	return cutArray;
};

// 	* BONUS: write a `shuffle` method that mixes up all the cards. How does this change your `deal` method?
CardDeck.prototype.shuffle = function() {
	var cardsOut = [];
	while (this.cards.length > 0) {
		cardsOut.push(this.deal());
	}
	this.cards = cardsOut;
};
