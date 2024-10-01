export {};

class VisaCard {
	constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('Ken');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'John';
