// You can write more code here

/* START OF COMPILED CODE */

class Menu extends Phaser.Scene {
  constructor() {
    super('Menu')

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate() {
    // fire_Exitmenu
    this.add.image(1600, 1600, 'Fire-Exitmenu')

    // fireMenu
    this.add.image(1600, 1600, 'FireMenu')
  }

  /* START-USER-CODE */

  // Write your code here.

  create() {
    this.editorCreate()

    this.input.keyboard.on('keydown', (event) => {
      console.log('Key pressed:', event.code)
      if (event.code === 'Enter' || event.key === 'Enter') {
        this.enterPressed()
      }
    })

    this.input.on('pointerdown', this.enterPressed, this)
  }

  enterPressed() {
    this.scene.start('Level')
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
