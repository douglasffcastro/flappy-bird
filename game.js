console.log('Douglas Castro - Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const background = {
  sourceX: 390,
  sourceY: 0,
  width: 275,
  height: 204,
  x: 0,
  y: canvas.height - 204,
  draw () {
    context.fillStyle = '#70C5CE';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.drawImage(
      sprites, 
      background.sourceX, background.sourceY, 
      background.width, background.height, 
      (background.x + background.width), background.y, 
      background.width, background.height
    );

    context.drawImage(
      sprites, 
      background.sourceX, background.sourceY, 
      background.width, background.height, 
      background.x, background.y, 
      background.width, background.height
    );
  },
}

const floor = {
  sourceX: 0,
  sourceY: 610,
  width: 224,
  height: 112,
  x: 0,
  y: canvas.height - 112,
  draw () {
    context.drawImage(
      sprites, 
      floor.sourceX, floor.sourceY, 
      floor.width, floor.height, 
      floor.x, floor.y, 
      floor.width, floor.height
    );

    context.drawImage(
      sprites, 
      floor.sourceX, floor.sourceY, 
      floor.width, floor.height, 
      floor.x + floor.width, floor.y, 
      floor.width, floor.height
    );
  },
}

const bird = {
  sourceX:0,
  sourceY: 0, // source x and source y
  width: 33,
  height: 24, // source cut size
  x: 10,
  y: 50,
  draw() {
    context.drawImage(
      sprites,
      bird.sourceX, bird.sourceY, // source x and source y
      bird.width, bird.height, // source cut size: ;
      bird.x, bird.y,
      bird.width, bird.height,
    );
  },
}

function loop() {
  background.draw();
  bird.draw();
  floor.draw();

  requestAnimationFrame(loop);
}

loop();
