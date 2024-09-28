export {};

function throwError(message: string): never {
	throw new Error(message);
}

try {
	const result = throwError('test');
	console.log({ result });
} catch (error) {
	console.log({ error });
}

// let foo: void = undefined;
// let bar: never = undefined;
