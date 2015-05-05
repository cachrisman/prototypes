// 2. Make a `Starship` constructor that takes a `model` and `ownerName`.
//   * Give your `StarShip` a `setTopSpeed` method and a `getTopSpeed` method that let you change
//     and read the `topSpeed`. *Assume `topSpeed` is just a number.*
//   * Give your `Starship` an `accelerateTo` method that sets `currentSpeed` to some number,
//     unless that number is greater than its `topSpeed`.

function Starship(model, ownerName) {
    this.model = model;
    this.ownerName = ownerName;
    var currentSpeed = 0;
    var topSpeed = 0;

    this.setTopSpeed = function(number) {
        topSpeed = number;
        return topSpeed;
    };
    this.getTopSpeed = function() {
        return topSpeed;
    };
    this.accelerateTo = function(speed) {
        if (speed > topSpeed) {
        	currentSpeed = topSpeed;
        	return "YOU'RE ASKING TOO MUCH CAPTAIN!!! I'M GIVING IT ALL SHES GOT!!!";
	    } else if (speed < 0) {
	    	return "Can't accelerate to negative speed :-(";
	    } else {
	    	currentSpeed = speed;
	        return "Accelerating to Warp " + currentSpeed;
	    }
    };
}