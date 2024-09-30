export {};

class MyNumberCard {
	private _owner: string;
	private _secretNumber: number;

	constructor(owner: string, secretNumber: number) {
		this._owner = owner;
		this._secretNumber = secretNumber;
	}

	get owner() {
		return this._owner;
	}

	set secretNumber(secretNumber: number) {
		this._secretNumber = secretNumber;
	}

	debugPrint() {
		return this._secretNumber;
	}
}

let card = new MyNumberCard('Ken', 123456789);
console.log(card.debugPrint());
card.secretNumber = 111111111;
console.log(card.debugPrint());
// card.owner = 'John';
console.log(card.owner);
// card.secretNumber;
// card._secretNumber;
console.log(card.secretNumber);
