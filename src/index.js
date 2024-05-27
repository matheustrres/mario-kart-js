import { Player } from './player.js';
import { RaceEngine } from './race/engine.js';

const player1 = new Player({
	name: 'Mario',
	speed: 4,
	maneuverability: 3,
	power: 3,
});

const player2 = new Player({
	name: 'Luigi',
	speed: 3,
	maneuverability: 4,
	power: 4,
});

(function main() {
	console.log(
		`🏁🚨 Race between ${player1.name} and ${player2.name} starting...\n`,
	);

	const raceEngine = new RaceEngine(player1, player2);

	raceEngine.startRace();
})();
