
// You can write more code here

/* START OF COMPILED CODE */

class FixedToCamera {
	
	constructor(gameObject) {
		gameObject["__FixedToCamera"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {FixedToCamera} */
	static getComponent(gameObject) {
		return gameObject["__FixedToCamera"];
	}
	
	/* START-USER-CODE */

	// Write your code here.

		start() {

	this.gameObject.fixedToCamera = true;
	this.gameObject.setScrollFactor(1, 1);
		
	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
