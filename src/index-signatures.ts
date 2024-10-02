export {};

interface Profile {
	name: string;
	underTwenty: boolean;
	[index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Ken', underTwenty: false };

profile.name = 'Ken';
profile.age = 25;
profile.nationality = 'Japan';
