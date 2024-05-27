import { RaceBlock } from './block.js';
import { RaceLogger } from './logger.js';

export class RaceRound {
	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
		this.block = RaceBlock.getRandomBlock();
	}

	play() {
		const player1DiceResult = this.player1.rollDice();
		const player2DiceResult = this.player2.rollDice();

		let player1TotalSkills = 0;
		let player2TotalSkills = 0;

		if (this.block === RaceBlock.TYPES.STRAIGHT_LINE) {
			player1TotalSkills = player1DiceResult + this.player1.speed;
			player2TotalSkills = player2DiceResult + this.player2.speed;

			RaceLogger.logRollResult(
				this.player1,
				'speed',
				player1DiceResult,
				this.player1.speed,
			);

			RaceLogger.logRollResult(
				this.player2,
				'speed',
				player2DiceResult,
				this.player2.speed,
			);
		} else if (this.block === RaceBlock.TYPES.CURVED_LINE) {
			player1TotalSkills = player1DiceResult + this.player1.maneuverability;
			player2TotalSkills = player2DiceResult + this.player2.maneuverability;

			RaceLogger.logRollResult(
				this.player1,
				'maneuverability',
				player1DiceResult,
				this.player1.maneuverability,
			);
			RaceLogger.logRollResult(
				this.player2,
				'maneuverability',
				player2DiceResult,
				this.player2.maneuverability,
			);
		} else if (this.block === RaceBlock.TYPES.SHOWDOWN) {
			player1TotalSkills = player1DiceResult + this.player1.power;
			player2TotalSkills = player2DiceResult + this.player2.power;

			RaceLogger.logShowdown(
				this.player1,
				this.player2,
				player1DiceResult,
				player2DiceResult,
			);

			this.handleShowdown(player1TotalSkills, player2TotalSkills);

			return;
		}

		this.awardPoints(player1TotalSkills, player2TotalSkills);
	}

	handleShowdown(player1TotalSkills, player2TotalSkills) {
		const playerOneHasMoreSkillsThanPlayerTwo =
			player1TotalSkills > player2TotalSkills;
		const playerTwoHasMoreSkillsThanPlayerOne =
			player2TotalSkills > player1TotalSkills;

		if (playerOneHasMoreSkillsThanPlayerTwo && this.player2.points > 0) {
			console.log(
				`${this.player1.name} won the showdown! ${this.player2.name} lost 1 point 🐢`,
			);

			this.player2.removePoints(1);
		} else if (playerTwoHasMoreSkillsThanPlayerOne && this.player1.points > 0) {
			console.log(
				`${this.player2.name} won the showdown! ${this.player1.name} lost 1 point 🐢`,
			);

			this.player1.removePoints(1);
		} else {
			console.log('The showdown was a tie! No points were lost.');
		}
	}

	awardPoints(player1TotalSkills, player2TotalSkills) {
		if (player1TotalSkills > player2TotalSkills) {
			console.log(`${this.player1.name} scored a point!`);
			this.player1.addPoints(1);
		} else if (player2TotalSkills > player1TotalSkills) {
			console.log(`${this.player2.name} scored a point!`);
			this.player2.addPoints(1);
		}
	}
}
