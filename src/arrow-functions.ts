export {};

const bmi: (height: number, weight: number) => number = (height: number, weight: number): number => {
	return weight / height ** 2;
};

console.log(bmi(1.65, 45));
