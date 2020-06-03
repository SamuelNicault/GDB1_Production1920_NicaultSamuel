var config = {
	type: Phaser.AUTO,
	width: 748,
	height: 376,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 0},
			debug: true

		}
	},

	scene: [Scene2]

};

var game = new Phaser.Game(config);
