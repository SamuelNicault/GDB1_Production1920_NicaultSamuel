var config = {
	type: Phaser.AUTO,
	width: 748,
	height: 376,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 0},
			debug: false

		}
	},

	scene: [Scene1, Scene2]

};

var game = new Phaser.Game(config);
