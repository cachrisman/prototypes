// Exercise 1
//
// Make a `Dice` constructor that takes a `numberOfSides`. Add a method called `roll` that randomly returns a number from `1` up to the `numberOfSides`.
//   * Modify your `roll` method to record the returned side in a `lastRoll` property.

function Dice(numberOfSides) {
    this.numberOfSides = numberOfSides;
    this.lastRoll = null;
}

// dicename.roll() => returns random roll
Dice.prototype.roll = function() {
    this.lastRoll = Math.ceil(Math.random() * this.numberOfSides);
    return this.lastRoll;
};

// dicename.roll => returns random roll
Object.defineProperties(Dice.prototype, {
    "roll": {
    	get: function () {
    		this.lastRoll = Math.ceil(Math.random() * this.numberOfSides);
    		return this.lastRoll;
    	}
	},
});

//Driver Code
var d6 = new Dice(6);
d6.roll();

var d20 = new Dice(20);
d20.roll();


