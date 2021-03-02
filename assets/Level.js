
// You can write more code here
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/** @type {Phaser.Tilemaps.TilemapLayer} */
		this.gamelayer;
		/** @type {Phaser.GameObjects.Sprite} */
		this.player;
		/** @type {Phaser.GameObjects.Text} */
		this.timer;
		/** @type {Phaser.GameObjects.Image} */
		this.step;
		/** @type {Phaser.Tilemaps.TilemapLayer[]} */
		this.walls;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// fire_exit_uusi
		const fire_exit_uusi = this.add.tilemap("Fire_exit_uusi");
		fire_exit_uusi.addTilesetImage("tileset_1", "tiles");
		fire_exit_uusi.addTilesetImage("exit", "exit_tile");
		
		// floor_1
		fire_exit_uusi.createLayer("Floor", ["tileset_1","exit"], 0, 0);
		
		// gamelayer
		const gamelayer = fire_exit_uusi.createLayer("Gamelayer", ["tileset_1"], 0, 0);
		
		// player
		const player = this.add.sprite(3047, 3112, "player_23");
		
		// timer
		const timer = this.add.text(2916, 3064, "", {});
		timer.scaleX = 3;
		timer.scaleY = 3;
		timer.text = "0";
		timer.setStyle({"color":"#302727ff","fontSize":"26px","fontStyle":"bold"});
		
		// step
		const step = this.add.image(96, 54, "wall_tile");
		step.scaleX = 1.2775417181338569;
		step.scaleY = 1.8106937841426556;
		
		// lists
		const walls = [gamelayer]
		
		// player (components)
		const playerPhysics = new Physics(player);
		playerPhysics.width = 40;
		playerPhysics.height = 32;
		playerPhysics.offsetX = 15;
		playerPhysics.offsetY = 20;
		new Movement(player);
		
		// step (components)
		new Physics(step);
		
		this.gamelayer = gamelayer;
		this.player = player;
		this.timer = timer;
		this.step = step;
		this.fire_exit_uusi = fire_exit_uusi;
		this.walls = walls;
	}
	
	/* START-USER-CODE */

	// Write your code here.

	create() {

		this.editorCreate();
		this.player.play("down-idle");
		this.player.setDepth(10);
		this.gamelayer.setDepth(9);

		//  ADD COLLIDERS
			// Set collision to the gamelayer tile number 16 (red tile)
		this.gamelayer.setCollision(16);
			// Set the player hit the walls:
		this.physics.add.collider(this.player, this.walls);
			// When the player hits the step, then call final -function.
		this.physics.add.collider(this.player, this.step, this.final, null, this);

		// CAMERA SETTINGS:
			// Set cameras boundaries same as the game area
		this.cameras.main.setBounds(0, 0, 3200, 3200);
    		// make the camera follow the player
    	this.cameras.main.startFollow(this.player);
			// Set the camera zoom so that the player can see only small part of the game
    	this.cameras.main.setZoom(1);
		// CAMERA SETTINGS ENDS HERE
		//================================
		// ADD A GROUP OF HEARTS TO INDICATE THE PLAYER HEALTH CONDITION:
			heartGroup = this.add.group({
				key: 'heart_64',
				frameQuantity: 5
			});

			var children = heartGroup.getChildren();

			for (var i = 0; i < children.length; i++)
			{
				var x = 2050 + (i*70);
				var y = 3060;

				children[i].setPosition(x, y);
			}
		// HEART GROUP SETTINGS ENDS HERE
		//========================================
		// SET GAME OVER TEXT APPEARING ON THE SCREEN WHEN PALYER FAILS:
				var configEnd = {
				x: 1570,
				y: 1500,
				text: 'GAME OVER',
				style: {
					fontSize: '144px',
					fontFamily: 'Arial',
					fontStyle: 'bold',
					color: '#302727ff'
					}
			};
			textGameOver = this.make.text(configEnd);
			textGameOver.setOrigin(0.5);
			textGameOver.visible = false;
		// GAME OVER TEXT SETTINGS ENDS
		//==================================
		// SET OVERLAP TIMER TO COUNT TIME FOR OVERLAPPING (player & flames):
			var tconfig = {
				x: 2200,
				y: 2530,
				text: '00',
				style: {
					fontSize: '44px',
					fontFamily: 'Arial',
					fontStyle: 'bold',
					color: '#302727ff'
					}
			};
			
			//textTime = this.make.text(tconfig);
			timedEvent = this.time.addEvent({ delay: 1000, callback: this.destroyHearts, callbackScope: this, repeat: 5 });
			timedEvent.paused = true;
		// OVERLAP TIMER SETTINGS END HERE
		
		// ADD PARICLE EMITTERS:
			this.addFlames();
			/*
			let particles = this.add.particles("flame_big_1");
			particles.setDepth(99);	

			emitterNames = ['emitter1', 'emitter2', 'emitter3', 'emitter4', 'emitter5', 'emitter6',
			'emitter7', 'emitter8', 'emitter9', 'emitter10', 'emitter11', 'emitter12', 'emitter13', 'emitter14', 'emitter15'];
			
			var h;
			for(h=0; h < 15; h++) {
				emitterPositionsX[h] = (Math.random()+0.020)*3000;
				emitterPositionsY[h] = (Math.random()+0.020)*3000;
			}

			var i;
			for (i = 0; i < 15; i += 1) {
				emitterNames[i] = particles.createEmitter();
				emitterNames[i].setPosition(emitterPositionsX[i], emitterPositionsY[i]);
				emitterNames[i].setSpeed(50);
				emitterNames[i].setBlendMode(Phaser.BlendModes.ADD);
				} 						
				*/
		// PARICLE EMITTER SECTION ENDS
			
	}

	restartLevel() {

		let button = this.add.image(1470, 1670, "restart").setInteractive();
		button.setDepth(100);
		button.inputEnabled = true;
		//this.input.on('pointerdown',this.restartLevel);

		this.input.on('pointerdown', (event) => {
        this.scene.restart(); 
		this.timer.setText("00");
    	});
	}

		//  DESTROY ONE HEART FROM THE SCREEN:
		destroyHearts() {
			
			--heartsLeft;
			// Get the first alive item and destroy it.
			var item = heartGroup.getFirstAlive();
			if (item && heartsLeft)
			{
				console.log("Heart destroy ");						
				item.destroy();
			}else{	
				console.log("Heart destroy last time");
				this.physics.pause();
				this.cameras.main.setZoom(1);
				textGameOver.visible = true;
				textGameOver.setDepth(95);
				let endScreen = this.add.image(1600,1600, "gameOver");
				endScreen.setDepth(90);
				endScreen.alpha = 0.5;
				this.restartLevel();
			}
		}

		
	addFlames() {
		// ADD PARICLE EMITTERS:
			let particles = this.add.particles("flame_big_1");
			particles.setDepth(99);	
			
			var h;
			for(h=0; h < 15; h++) {
				emitterPositionsX[h] = (Math.random()+0.020)*3000;
				emitterPositionsY[h] = (Math.random()+0.020)*3000;
			}

			var i;
			for (i = 0; i < 15; i += 1) {
				emitters[i] = particles.createEmitter();
				emitters[i].setPosition(emitterPositionsX[i], emitterPositionsY[i]);
				emitters[i].setSpeed(50);
				emitters[i].setBlendMode(Phaser.BlendModes.ADD);
				} 	
		}


	update() {

			const seconds = this.time.now / 1000
			this.timer.text = seconds.toFixed(0)

			//textTime.setText('Event.progress: ' + timedEvent.getProgress().toString().substr(0, 5) + '\nEvent.repeatCount: ' + timedEvent.repeatCount + '\nPaused?: ' + timedEvent.paused);

			// SET DISTANCE BETWEEN PLAYER AND EMITTERS:

			if(Phaser.Math.Distance.Between(this.player.x, this.player.y, emitterPositionsX[flameOver], emitterPositionsY[flameOver]) < 50) {
				timedEvent.paused = false;	
			}else{

				timedEvent.paused = true;	

				let j;
				for(j=0; j< 15; j++)
				{
				var dist = Phaser.Math.Distance.Between(this.player.x, this.player.y, emitterPositionsX[j], emitterPositionsY[j]);
					if(dist < 150) {	
						flameOver = j;
						timedEvent.paused = false;				
					}
				}	
			}

		// DISTANCE BETWEEN PLAYER AND EMITTERS ENDS

				this.children.each(c => {

				/** @type {Phaser.Physics.Arcade.Sprite} */
				// @ts-ignore
				const child = c

				if(!DepthSortY.getComponent(child)) {
					return
				}
				child.setDepth(child.y)
			})
	}		

	final() {
			this.scene.start("Final");
			}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
