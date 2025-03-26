let config = {
  renderer: Phaser.AUTO,
  width: 785,
  height: 442,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);
let bird;

// Function to bring images in
function preload() {
  this.load.image('background', 'assets/background.png');
  this.load.image('road', 'assets/road.png');
  this.load.image('column', 'assets/column.png');
  this.load.spritesheet('bird', 'assets/bird.png', { frameWidth: 1216, frameHeight: 800 });
}

// Function that'll create the elements for the game
function create( ){
  const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
  
  // adding physics using this.physics
  const roads = this.physics.add.staticGroup();
  
  
  const road = roads.create(300, 468, 'road').setScale(2).refreshBody();

  const topColumns = this.physics.add.staticGroup({
    key: 'column',
    repeat: 1,
    setXY: { x: 210, y: 0, stepX: 300 }
  });

  const bottomColumns = this.physics.add.staticGroup({
    key: 'column',
    repeat: 1,
    setXY: { x: 360, y: 400, stepX: 300 },
  });

  bird = this.physics.add.sprite(150, 200, 'bird').setScale(2);
  bird.setBounce(0.2);
  bird.setCollideWorldBounds(true);

  // this.physics.add.collider(bird, road);
}

// Function to update the bird object
function update( ){

}

