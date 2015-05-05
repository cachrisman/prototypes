// 1. Make a `Dice` constructor that takes a `numberOfSides`. Add a method called `roll` that randomly returns a number from `1` up to the `numberOfSides`.
//   * Modify your `roll` method to record the returned side in a `lastRoll` property.

function Dice(numberOfSides) {
  this.numberOfSides = numberOfSides;
  this.roll = function() {
    this.lastRoll =  Math.ceil(Math.random() * this.numberOfSides);
    return this.lastRoll;
  };
}