export {};

let nickname = 'John' as const;
nickname = 'John';

let profile = {
	name: 'Ken',
	height: 180,
} as const;

// profile.name = 'Ken'
