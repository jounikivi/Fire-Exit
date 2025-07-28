
window.addEventListener('load', function () {
  const game = new Phaser.Game({
    width: 3200,
    height: 3200,
    type: Phaser.AUTO,
    backgroundColor: '#242424',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: true,
      },
    },
  });

  game.scene.add('Boot', Boot, true);
  game.scene.add('Menu', Menu);
  game.scene.add('Game', Game);
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.pack('pack', 'assets/asset-pack.json');
    this.load.image('flame', 'assets/images_environment/flame.png');
  }

  create() {
    this.scene.start('Menu');
  }
}

class Menu extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  create() {
    this.add.text(300, 200, 'Aloita peli painamalla ENTER', {
      font: '32px Arial',
      fill: '#ff0000',
    });

    this.input.keyboard.on('keydown-ENTER', () => {
      this.scene.start('Game');
    });
  }
}

class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.add.text(300, 300, 'Peli käynnistyi!', {
      font: '32px Arial',
      fill: '#00ff00',
    });
  }
}
