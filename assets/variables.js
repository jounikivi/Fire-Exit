		var flameCounter = 1;
		var nextShot = 1000;

		let heartGroup;
		let flamesGroup;
		let flameOver = 0;
		
		var coordinates = [];
		var i = 0;

		for (i = 0; i < 30; i++) {
			coordinates[i] = (Math.random()+0.014)*3200;
			}
			
/*
function luoEmitter() {
		//let particles = add.particles("flame");
		//particles.createEmitter();

		let emitter1 = this.particles.createEmitter();
		emitter.setPosition(coordinates[1], coordinates[2]);
		emitter.setSpeed(50);
		emitter.setBlendMode(Phaser.BlendModes.ADD);

		let emitter2 = particles.createEmitter();
		emitter.setPosition(coordinates[3], coordinates[4]);
		emitter.setSpeed(50);
		emitter.setBlendMode(Phaser.BlendModes.ADD);
	}
	*/

