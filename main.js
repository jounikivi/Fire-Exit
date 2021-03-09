
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 3200,
		height: 3200,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 0},
			debug: true
				}		
		}
	});

	game.scene.add("Boot", Boot, true);

});

let textTime;
let timer;
let textGameOver;
let textEnd;
let timedEvent;
let childrenFlames;
let heartsLeft = 5;
let emitters = [];
let emitterPositionsX = [];
let emitterPositionsY = [];
var flameCounter = 1;
var nextShot = 1000;
let heartGroup;
let flamesGroup;
let flameOver = 0;
let finalScore;


class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/asset-pack.json");
		this.load.image("flame", "assets/images_environment/flame.png");

	}

	create() {
		
		this.scene.start("Menu");
	}

}