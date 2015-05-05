// 5. Make a `Mailer` constructor that takes a `from` email address, and has `currentMessage` set to an empty object, as well as a `sentMessages` array.
//   * Add a `setSendTo` method that sets `currentMessage.sendTo` to be a specified email.
//   * Add a `setSubject` method that sets `currentMessage.subject` to be a specified subject.
//   * Add a `send` method that sets `currentMessage.from` to be `this.from`, pushes `currentMessage` into `sentMessages`, and sets `currentMessage` to be a new object.
//     * Modify `send` so that it checks if `currentMessage` has both a `sendTo` and `subject` before pushing to `sentMessages`.

function Mailer(from) {
	this.from = from;
	this.currentMessage = {};
	this.sentMessages = [];
}

Mailer.prototype.setSendTo = function(sendTo) {
	this.currentMessage.sendTo = sendTo;
};

Mailer.prototype.setSubject = function(subject) {
	this.currentMessage.subject = subject;
}

Mailer.prototype.send = function() {
	this.currentMessage.from = this.from;
	if (this.currentMessage.sendTo && this.currentMessage.subject) {
		this.sentMessages.push(this.currentMessage);
		this.currentMessage = {};
	} else {
		return "Message missing subject or recipient";
	}
}