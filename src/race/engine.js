import { RaceLogger } from './logger.js';
import { RaceRound } from './round.js';

import { Player } from '../player.js';

export class RaceEngine {
	#player1;
	#player2;

	static #validatePlayers(player1, player2) {
		if (!player1 || !(player1 instanceof Player)) {
			throw new TypeError(
				'Argument {player1} is required and must be a Player.',
			);
		}
		if (!player2 || !(player2 instanceof Player)) {
			throw new TypeError(
				'Argument {player2} is required and must be a Player.',
			);
		}
	}

	constructor(player1, player2) {
		RaceEngine.#validatePlayers(player1, player2);

		this.#player1 = player1;
		this.#player2 = player2;
	}

	startRace() {
		for (let round = 1; round <= 5; round++) {
			console.log(`🏁 Round ${round}`);
			const raceRound = new RaceRound(this.#player1, this.#player2);
			console.log(`Block: ${raceRound.block}`);
			raceRound.play();
			console.log('-----------------------------');
		}

		RaceLogger.logFinalResults(this.#player1, this.#player2);
	}
}
