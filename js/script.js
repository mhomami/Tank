const canvas = document.getElementById('mycanvas');

let _w = window.innerWidth;
let _h = window.innerHeight;

const renderer = new PIXI.Renderer({
  view: canvas,
  width: _w,
  height: _h,
  transparent: true,
  resolution: window.devicePixelRatio,
  autoDensity: true
});

window.addEventListener('resize', resize);

function resize(){
  _w = window.innerWidth;
  _h = window.innerHeight;
  renderer.resize(_w, _h);
}

function rndInt(){
  return Math.floor(Math.random() * _h);
}

//function to condense driver/jimmy initial setup
function makeSprite(spriteFile){
  const tSpr = stage.addChild(new PIXI.Sprite(spriteFile));
  return tSpr;
}

function makeGif(gifFile){
  const tGif = stage.addChild(new PIXI.AnimatedSprite(gifFile));
  return tGif;
}

const stage = new PIXI.Container();
const driver1 = PIXI.Texture.from('/img/driver_pix3x.png');
const driver2 = PIXI.Texture.from('/img/driver_pix_inv3x.png');
const jimmy1 = PIXI.Texture.from('/img/jimmy1x_pix.png');

// animate bits
const bitsImages = ["/img/bits_pix3x1.png", "/img/bits_pix3x2.png", "/img/bits_pix3x3.png", "/img/bits_pix3x4.png",
"/img/bits_pix3x5.png","/img/bits_pix3x6.png","/img/bits_pix3x7.png","/img/bits_pix3x8.png","/img/bits_pix3x9.png",
"/img/bits_pix3x10.png","/img/bits_pix3x11.png"];
const textureArray = bitsImages.map(image => PIXI.Texture.from(image));

// initial setup for drivers and jimmy
// x and y get overwritten in the animate function once fish are reset when they drift offscreen
const driver1sprite = makeSprite(driver1);
driver1sprite.x = -500;

const driver2sprite = makeSprite(driver2);
driver2sprite.x = _w + 400;

const jimmy1sprite = makeSprite(jimmy1);
jimmy1sprite.x = -600;

///////////////////////////// START - find a way to condense this //////////////////////////////////////
const bits1sprite = makeGif(textureArray);
bits1sprite.x = -1550;
bits1sprite.y = 200;
bits1sprite.animationSpeed = 0.2;
bits1sprite.play();

const bits2sprite = makeGif(textureArray);
bits2sprite.x = -1450;
bits2sprite.animationSpeed = 0.2;
bits2sprite.y = 300;
bits2sprite.play();

const bits3sprite = makeGif(textureArray);
bits3sprite.x = -1250;
bits3sprite.animationSpeed = 0.2;
bits3sprite.y = 150;
bits3sprite.play();

const bits4sprite = makeGif(textureArray);
bits4sprite.x = -1700;
bits4sprite.animationSpeed = 0.2;
bits4sprite.y = 250;
bits4sprite.play();
///////////////////////////// END - find a way to condense this /////////////////////////////////////////

const ticker = new PIXI.Ticker();
ticker.add(animate);
ticker.start();

let delta = 0;
let y1, y2, y3;

function animate(){
  delta += 0.025;
  let rndY = rndInt();

  renderer.render(stage);

  if (driver1sprite.x < -600){
    y1 = rndY;
    driver1sprite.x = _w + 100;
  }else{
    driver1sprite.x -= 0.8;
    driver1sprite.y = y1 + Math.sin(delta) * 5;
  };

  if (driver2sprite.x > _w + 600){
    y2 = rndY;
    driver2sprite.x = -400;
  }else{
    driver2sprite.x += 0.8;
    driver2sprite.y = y2 + Math.sin(delta + 1.5) * 5;
  };

  if (jimmy1sprite.x < -600){
    y3 = rndY;
    jimmy1sprite.x = _w + 100;
  }else{
    jimmy1sprite.x -= 0.4;
    jimmy1sprite.y = y3 + Math.cos(delta) * 7;
  };

  if (bits1sprite.x > _w + 600){
    bits1sprite.x = -1150;
    bits1sprite.y = rndY;
  }else{
    bits1sprite.x += 2;
  }; 

  if (bits2sprite.x > _w + 600){
    bits2sprite.x = -1350;
    bits2sprite.y = rndY;
  }
  else bits2sprite.x += 2;

  if (bits3sprite.x > _w + 600){
    bits3sprite.x = -1250;
    bits3sprite.y = rndY;
  }
  else bits3sprite.x += 2;

  if (bits4sprite.x > _w + 600){
    bits4sprite.x = -1450;
    bits4sprite.y = rndY;
  }
  else bits4sprite.x += 2;
}