// 3. Make a `Radio` constructor that takes in an `ownerName` and a `signalType` ("AM" or "FM").
//   * Add a `setStation` method to your radio that allows the following ranges for a `station` property:
//     * `535` to `1705` for "AM".
//     * `88` to `108` for "FM".
//   * Add a `listen` method that returns the following:
//     * `"distorted music"` for "AM".
//     * `"clear music"` for "FM".
//   * SUPER BONUS: Add a `toggleSignal` method that lets you set `signalType` to `AM` or `FM`. Make sure the `station` is valid when you toggle. Your radio should remember the `station` from the other signal type when you toggle.

function Radio (ownerName, signalType) {
	this.ownerName = ownerName;
	this.signalType = signalType;
	if (signalType == "AM") this.station = 535;
	if (signalType == "FM") this.station = 88;
	this.prev_am_station = 535;
	this.prev_fm_station = 88;
}

Radio.prototype.setStation = function(freq) {
	if (this.signalType == "AM") {
		if (freq >= 535 && freq <= 1705) {
			this.prev_am_station = this.station;
			this.station = freq;
		} else if (freq >= 88 && freq <= 108) {
			this.prev_am_station = this.station;
			this.station = freq;
			this.signalType = "FM";
		}
	}
	else if (this.signalType == "FM") {
		if (freq >= 535 && freq <= 1705) {
			this.prev_fm_station = this.station;
			this.station = freq;
			this.signalType = "AM";
		} else if (freq >= 88 && freq <= 108) {
			this.prev_fm_station = this.station;
			this.station = freq;
		}
	}
	return "Changed station to "+this.signalType+" "+this.station;
};

Radio.prototype.listen = function() {
	if (this.signalType === "AM") return "distorted music";
	if (this.signalType === "FM") return "clear music";
};

Radio.prototype.toggleSignal = function () {
	if (this.signalType === "AM") {
		this.setStation(this.prev_fm_station);
	} else if (this.signalType === "FM") {
		this.setStation(this.prev_am_station);
	}
	return "Changed station to "+this.signalType+" "+this.station;
};