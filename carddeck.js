// 4. Make a `CardDeck` constructor that returns an object with a `cards` property that is an array of `52` numbers, `1..52`.
// 	* Write a method called `deal`  that randomly returns a "card" (a number from 1 .. 52) from `cards` and removes it from the `cards` array.
// 	* Write a method called `isFull` that returns `true` or `false` if all `52` cards are present.
// 	* Write a method called `cut` that randomly picks an index and returns an array of two arrays where the deck was split at that index.
// 	* BONUS: write a `shuffle` method that mixes up all the cards. How does this change your `deal` method?

function CardDeck () {
	this.cards = new Array(52);
	for (var i = 0; i < 52; i++) this.cards[i] = i+1;
}

CardDeck.prototype.deal = function() {
	var rand = Math.floor(Math.random() * this.cards.length);
	return this.cards.splice(rand,1)[0];
};

CardDeck.prototype.isFull = function() {
	return (this.cards.length === 52) ? true : false;
};

CardDeck.prototype.cut = function() {
	var rand = Math.floor(Math.random() * this.cards.length);
	var a = [];
	a[0] = this.cards.slice(0,rand);
	a[1] = this.cards.slice(rand);
	return a;
};

CardDeck.prototype.shuffle = function() {
	var a = []
	while (this.cards.length > 0) {
		a.push(this.deal())
	}
	this.cards = a;
};
