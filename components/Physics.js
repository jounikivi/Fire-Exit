
// You can write more code here

/* START OF COMPILED CODE */

class Physics {
	
	constructor(gameObject) {
		gameObject["__Physics"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		/** @type {boolean} */
		this.static = false;
		/** @type {number} */
		this.width = 64;
		/** @type {number} */
		this.height = 64;
		/** @type {number} */
		this.offsetX = 0;
		/** @type {number} */
		this.offsetY = 0;
		
		/* START-USER-CTR-CODE */
		// Write your code here.

		this.scene = this.gameObject.scene

		// first time the scene is updated, call the `start` method
        this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);

		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Physics} */
	static getComponent(gameObject) {
		return gameObject["__Physics"];
	}
	
	/* START-USER-CODE */

	// Write your code here.

	start() {
		this.scene.physics.add.existing(this.gameObject, this.static)

		const body = this.gameObject.body

		body.setSize(this.width, this.height)
		body.setOffset(this.offsetX, this.offsetY)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
