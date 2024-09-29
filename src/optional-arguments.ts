export {};

const bmi: (height: number, weight: number, printable?: boolean) => number = (
	height: number,
	weight: number,
	printable?: boolean
): number => {
	const bmi: number = weight / height ** 2;

	if (printable) {
		console.log({ bmi });
	}
	return bmi;
};

bmi(1.65, 45, true);
