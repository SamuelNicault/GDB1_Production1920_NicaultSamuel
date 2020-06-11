var config = {
	type: Phaser.AUTO,
	width: 748,
	height: 376,
	backgroundColor: "#FAF8D6",	
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 0},
			debug: true

		}
	},

	scene: [Scene0, Scene1, Scene2, Scene3, Scene4, Scene5, Scene6]

};

var game = new Phaser.Game(config);
