
// You can write more code here

/* START OF COMPILED CODE */

class Movement {
	
	constructor(gameObject) {
		gameObject["__Movement"] = this;
		
		/** @type {Phaser.GameObjects.Sprite} */
		this.gameObject = gameObject;
		
		/* START-USER-CTR-CODE */
		// Write your code here.

		const scene = this.gameObject.scene

		this.cursors = scene.input.keyboard.createCursorKeys()

		// each time the scene is updated, call the `update` method
        scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Movement} */
	static getComponent(gameObject) {
		return gameObject["__Movement"];
	}
	
	/* START-USER-CODE */

	// Write your code here.

	update() {

		const speed = 700
		const player = this.gameObject

		/**@type {Phaser.Physics.Arcade.Body} */
		const body = player.body

		if(!body) {
			return
		}

		if (this.cursors.left.isDown)
		{
			body.setVelocity(-speed, 0)
			player.play('left_walk', true)
		}
		else if (this.cursors.right.isDown)
		{
			body.setVelocity(speed, 0)
			player.play('right_walk', true)
		}
		else if (this.cursors.up.isDown)
		{
			body.setVelocity(0, -speed)
			player.play('up_walk', true)
		}
		else if (this.cursors.down.isDown)
		{
			body.setVelocity(0, speed)
			player.play('down_walk', true)
		}
		else
		{
			body.setVelocity(0, 0)
			const key = player.anims.currentAnim.key
			const parts = key.split('_')
			const direction = parts[0]
			player.play(`${direction}_idle`)
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
