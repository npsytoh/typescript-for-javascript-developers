export {};

class Me {
	static isProgrammer: boolean = true;
	static firstName: string = 'Ken';
	static lastName: string = 'Suzuki';

	static work() {
		return `Hey guys! This is ${this.firstName}!`;
	}
}

const me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
