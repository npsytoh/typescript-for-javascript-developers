export {};

type Profile = {
	name: string;
	age: number;
};

const me: Profile = {
	name: 'Ken',
	age: 25,
};

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
	name: 'John',
	age: 30,
};

// friend.age++
