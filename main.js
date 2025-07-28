
window.addEventListener('load', function () {
  const game = new Phaser.Game({
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false,
      },
    },
  });

  game.scene.add('Boot', Boot, true);
  game.scene.add('Menu', Menu);
  game.scene.add('Level', Level); // Rekisteröi Level-scene
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.image('menu_bg', 'assets/images_environment/FireMenu.png');
    this.load.image('flame', 'assets/images_environment/flame.png');

    // Tässä oletetaan että asset-pack.json lataa kentän tilemapin
    this.load.pack('pack', 'assets/asset-pack.json');
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
    const centerX = this.cameras.main.centerX;
    const centerY = this.cameras.main.centerY;

    this.add.image(centerX, centerY, 'menu_bg').setOrigin(0.5).setDisplaySize(800, 600);

    this.add.text(centerX, 60, 'Fire Exit', {
      font: '64px Arial',
      fill: '#ff0000',
      stroke: '#000',
      strokeThickness: 4
    }).setOrigin(0.5);

    this.add.text(centerX, 200, 'Aloita peli painamalla Enter', {
      font: '28px Arial',
      fill: '#ff0000'
    }).setOrigin(0.5);

    this.add.text(centerX, 230, 'press enter start game', {
      font: '20px Arial',
      fill: '#ff0000'
    }).setOrigin(0.5);

    this.add.text(centerX, 550, 'Tekijät\nJouni Kiviperä,\nRauno Vesti', {
      font: '20px Arial',
      fill: '#ff0000',
      align: 'center'
    }).setOrigin(0.5);

    this.input.keyboard.on('keydown-ENTER', () => {
      this.scene.start('Level'); // Käynnistää kentän
    });
  }
}
