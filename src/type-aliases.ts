export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

type Example = {
	name: string;
	age: number;
};

const example: Example = {
	name: 'Ken',
	age: 25,
};

type Example2 = typeof example;
