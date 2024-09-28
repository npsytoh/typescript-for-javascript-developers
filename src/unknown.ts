export {};

const func = (): number => 100;

let numberAny: any = func();
let numberUnknown: unknown = func();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
	let sumUnknown = numberUnknown + 10;
}
