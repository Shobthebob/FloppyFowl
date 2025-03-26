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
let hasLanded = false;
let hasBumped = false;
let cursors
let isGameStarted = false;
let message;

// Function to bring images in
function preload() {
  this.load.image('background', 'assets/background.png');
  this.load.image('road', 'assets/road.png');
  this.load.image('column', 'assets/column.png');
  // loading the bird as a spirtesheet and not a standard image since we'll be animating it
  this.load.spritesheet('bird', 'assets/bird.png', {frameWidth: 25, frameHeight: 15});
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

  bird = this.physics.add.sprite(0, 50, 'bird').setScale(2);
  bird.setBounce(0.3);
  bird.setCollideWorldBounds(true);
  this.physics.add.overlap(bird, road, () => hasLanded = true, null, this);
  this.physics.add.collider(bird, road);
  
  this.physics.add.overlap(bird, topColumns, ()=> hasBumped=true, null, this);
  this.physics.add.collider(bird, topColumns);
  this.physics.add.collider(bird, bottomColumns);

  cursors = this.input.keyboard.createCursorKeys( );
  
// In the create function:
message = this.add.text(
  this.cameras.main.centerX,  // Center horizontally
  this.game.config.height -20,  // Position from bottom
  'Instructions: Press space bar to start', 
  { 
      fontFamily: '"Comic Sans MS", Times, serif', 
      fontSize: "23px", 
      color: "white", 
      backgroundColor: "#310547",
      padding: { x: 5, y: 2 },
  }
).setOrigin(0.5);  // Center the text around its position point

// Remove this line since we're positioning the text directly:
// Phaser.Display.Align.In.BottomCenter(message, background, 0, 50);
}

// Function to update the bird object
function update() {
  if (cursors.space.isDown && !isGameStarted) {
    isGameStarted = true;
    message.text = "Use the up arrow (^) to control";
  }

  if (!isGameStarted) {
    bird.body.velocity.x = 0;
    bird.setVelocityY(-160);
  } 
  else{
  
  if (cursors.up.isDown && !hasLanded && !hasBumped) {
    bird.setVelocityY(-160);
  }

  console.log(bird.x)

  if (!hasLanded || !hasBumped) {
    bird.body.velocity.x = 50;
  }
  if (hasLanded || hasBumped) {
    bird.body.velocity.x = 0;
    this.input.keyboard.enabled = false;
    if(bird.x > 660){
      message.text = "You Won!";
    }
    else{
    message.text = `Game Over`;
    }
  }
}
}

