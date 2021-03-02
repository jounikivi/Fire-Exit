
// You can write more code here

/* START OF COMPILED CODE */

class Flame {
	
	constructor(gameObject) {
		gameObject["__Flame"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		
		/* START-USER-CTR-CODE */
		// Write your code here.

		this.scene = this.gameObject.scene

		// first time the scene is updated, call the `start` method
        this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Flame} */
	static getComponent(gameObject) {
		return gameObject["__Flame"];
	}
	
	/* START-USER-CODE */

	// Write your code here.

	start() {

	const flame = this.gameObject
	flame.play('flame', true)
	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
