export class Player {
	name;
	speed;
	maneuverability;
	power;
	points;

	constructor({ name, speed, maneuverability, power }) {
		this.name = name;
		this.speed = speed;
		this.maneuverability = maneuverability;
		this.power = power;

		this.points = 0;
	}

	addPoints(points) {
		this.points += points;
	}

	removePoints(points) {
		this.points -= points;
	}

	rollDice() {
		return Math.floor(Math.random() * 6) + 1;
	}
}
