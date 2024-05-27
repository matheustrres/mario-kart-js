export class RaceLogger {
	static logRollResult(player, block, diceResult, attribute) {
		console.log(
			`${player.name} 🎲 rolled a ${block} dice ${diceResult} + ${attribute} = ${diceResult + attribute}`,
		);
	}

	static logShowdown(player1, player2, player1DiceResult, player2DiceResult) {
		console.log(`${player1.name} faced off with ${player2.name}! 🥊`);

		this.logRollResult(player1, 'power', player1DiceResult, player1.power);
		this.logRollResult(player2, 'power', player2DiceResult, player2.power);
	}

	static logFinalResults(player1, player2) {
		console.log('Final results:');
		console.log(`${player1.name}: ${player1.points} point(s)`);
		console.log(`${player2.name}: ${player2.points} point(s)`);

		if (player1.points > player2.points) {
			console.log(`\n${player1.name} won the race! Congratulations! 🏆`);
		} else if (player2.points > player1.points) {
			console.log(`\n${player2.name} won the race! Congratulations! 🏆`);
		} else {
			console.log('The race ended in a tie');
		}
	}
}
