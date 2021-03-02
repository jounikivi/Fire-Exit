
// You can write more code here

/* START OF COMPILED CODE */

class Final extends Phaser.Scene {
	
	constructor() {
		super("Final");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// fireExitend2
		this.add.image(1600, 1600, "FireExitend2");
	}
	
	/* START-USER-CODE */

	// Write your code here.

	create() {

		this.editorCreate();
		this.restartLevel();

	}

			restartLevel() {

		let button = this.add.image(1470, 2170, "restart").setInteractive();
		button.setDepth(100);
		button.inputEnabled = true;
		//this.input.on('pointerdown',this.restartLevel);

		this.input.on('pointerdown', (event) => {
        this.scene.start("Level");
    	});
		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
