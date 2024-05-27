export class RaceBlock {
	static TYPES = {
		STRAIGHT_LINE: 'STRAIGHT LINE',
		CURVED_LINE: 'CURVED LINE',
		SHOWDOWN: 'SHOWDOWN',
	};

	static getRandomBlock() {
		const random = Math.random();

		if (random < 0.33) return RaceBlock.TYPES.STRAIGHT_LINE;
		if (random < 0.66) return RaceBlock.TYPES.CURVED_LINE;

		return RaceBlock.TYPES.SHOWDOWN;
	}
}
