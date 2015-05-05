// Exercise 2
//
// Make a `Starship` constructor that takes a `model` and `ownerName`.

function Starship(model, ownerName) {
    this.model = model;
    this.ownerName = ownerName;
    var currentSpeed = 0;
    var topSpeed = null;
}

//   * Give your `StarShip` a `setTopSpeed` method and a `getTopSpeed` method that let you change
//     and read the `topSpeed`. *Assume `topSpeed` is just a number.*

Starship.prototype.setTopSpeed = function(newTopSpeed) {
    topSpeed = newTopSpeed;
};

Starship.prototype.getTopSpeed = function() {
    return topSpeed;
};

//   * Give your `Starship` an `accelerateTo` method that sets `currentSpeed` to some number,
//     unless that number is greater than its `topSpeed`.

Starship.prototype.accelerateTo = function(newSpeed) {
    if (newSpeed > topSpeed) {
    	currentSpeed = topSpeed;
    	return "YOU'RE ASKING TOO MUCH CAPTAIN!!! I'M GIVING IT ALL SHES GOT!!!";
    } else if (newSpeed < 0) {
    	return "Can't accelerate to negative speed :-(";
    } else {
    	currentSpeed = newSpeed;
        return "Accelerating to Warp " + currentSpeed;
    }
};

//Driver Code
var enterprise = new Starship("NCC-1701-C", "Captain Picard");
enterprise.setTopSpeed(9);
enterprise.getTopSpeed();
enterprise.accelerateTo(6); // => Accelerating to Warp 6
enterprise.accelerateTo(12); // => YOU'RE ASKING TOO MUCH CAPTAIN!!! I'M GIVING IT ALL SHES GOT!!!
