export {};

type Pitcher = {
	throwingSpeed: number;
};
type Batter = {
	battingAverage: number;
};

const pitcher: Pitcher = {
	throwingSpeed: 100,
};
const batter: Batter = {
	battingAverage: 0.367,
};

type ToWayPlayer = Pitcher & Batter;

const toWayPLayer: ToWayPlayer = {
	throwingSpeed: 150,
	battingAverage: 0.255,
};
