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
  gravity: 0.25,
  velocity: 0,
  draw() {
    context.drawImage(
      sprites,
      bird.sourceX, bird.sourceY, // source x and source y
      bird.width, bird.height, // source cut size: ;
      bird.x, bird.y,
      bird.width, bird.height,
    );
  },
  update() {
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;
  }
}

const getReadyMessage = {
  sourceX: 134,
  sourceY: 0,
  width: 174,
  height: 152,
  x: (canvas.width / 2) - 174 / 2,
  y: 50,
  draw () {
    context.drawImage(
      sprites, 
      getReadyMessage.sourceX, getReadyMessage.sourceY, 
      getReadyMessage.width, getReadyMessage.height, 
      getReadyMessage.x, getReadyMessage.y, 
      getReadyMessage.width, getReadyMessage.height
    );
  },
}

let activeScreen = {}
function changeScreen(newScreen) {
  activeScreen = newScreen;
}

const screens = {
  HOME: {
    draw () {
      background.draw();
      floor.draw();
      bird.draw();
      getReadyMessage.draw();
    },
    click() {
      changeScreen(screens.GAME);
    },
    update () {
    }
  },
  GAME: {
    draw () {
      background.draw();
      floor.draw();
      bird.draw();
    },
    update () {
      bird.update();
    },
  }
}

function loop() {
  activeScreen.draw();
  activeScreen.update();

  requestAnimationFrame(loop);
}

window.addEventListener('click', function (){
  if(activeScreen.click) {
    activeScreen.click();
  }
});

changeScreen(screens.HOME);
loop();
