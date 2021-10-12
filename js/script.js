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

function randomY(){
  return Math.floor(Math.random()*_h);
}

function newSprite(spriteName, spriteFile){
  return spriteName = new PIXI.Sprite(spriteFile);
}

const stage = new PIXI.Container();
const driver1 = PIXI.Texture.from('driver_pix3x.png');
const driver2 = PIXI.Texture.from('driver_pix_inv3x.png');
const jimmy1 = PIXI.Texture.from('jimmy1x_pix.png');

const bitsImages = ["bits_pix3x1.png", "bits_pix3x2.png", "bits_pix3x3.png", "bits_pix3x4.png",
"bits_pix3x5.png","bits_pix3x6.png","bits_pix3x7.png","bits_pix3x8.png","bits_pix3x9.png",
"bits_pix3x10.png","bits_pix3x11.png"];

const textureArray = bitsImages.map( image => PIXI.Texture.from(image));

let driver1sprite, driver2sprite, jimmy1sprite, bits1sprite, bits2sprite, bits3sprite, bits4sprite;

/* PIXI.Loader.shared.add("../bits_pix3x.json").load(setup);

function setup(){
  let bitSprite = PIXI.Loader.shared.resources["../bits_pix3x.json"].spritesheet;
  animatedSprite = new PIXI.AnimatedSprite(sheet.animations["image_sequence"]);
} */

// driver1sprite = stage.addChild(new PIXI.Sprite(driver1));

driver1sprite = newSprite(driver1sprite, driver1);
driver1sprite.x = _w + 600;

// driver1sprite = new PIXI.Sprite(driver1);
// driver1sprite.x = _w + 600;
// stage.addChild(driver1sprite);

driver2sprite = new PIXI.Sprite(driver2);
driver2sprite.x = _w - (_w + 400);
stage.addChild(driver2sprite);

jimmy1sprite = new PIXI.Sprite(jimmy1);
jimmy1sprite.x = _w + 100;
stage.addChild(jimmy1sprite);

bits1sprite = new PIXI.AnimatedSprite(textureArray);
bits1sprite.x = _w - (_w + 1550);
bits1sprite.y = 200;
bits1sprite.animationSpeed = 0.2;
bits1sprite.play();
stage.addChild(bits1sprite);

bits2sprite = new PIXI.AnimatedSprite(textureArray);
bits2sprite.x = _w - (_w + 1450);
bits2sprite.animationSpeed = 0.2;
bits2sprite.y = 300;
bits2sprite.play();
stage.addChild(bits2sprite);

bits3sprite = new PIXI.AnimatedSprite(textureArray);
bits3sprite.x = _w - (_w + 1250);
bits3sprite.animationSpeed = 0.2;
bits3sprite.y = 150;
bits3sprite.play();
stage.addChild(bits3sprite);

bits4sprite = new PIXI.AnimatedSprite(textureArray);
bits4sprite.x = _w - (_w + 1700);
bits4sprite.animationSpeed = 0.2;
bits4sprite.y = 250;
bits4sprite.play();
stage.addChild(bits4sprite);

const ticker = new PIXI.Ticker();
ticker.add(animate);
ticker.start();

let delta = 0;
y1 = randomY();
y2 = Math.floor(Math.random() * _h);
y3 = Math.floor(Math.random() * _h);

function animate(){
  delta += 0.025;
  rndInt = Math.floor(Math.random() * _h);
  
  driver1sprite.y = y1 + Math.sin(delta) * 5;
  driver2sprite.y = y2 + Math.sin(delta + 1.5) * 5;

  jimmy1sprite.y = y3 + Math.cos(delta) * 5;

  renderer.render(stage);

  if (jimmy1sprite.x < _w - (_w + 600)){
    jimmy1sprite.x = _w + 100;
    jimmy1sprite.y = rndInt + Math.cos(delta) * 5;
  }
  else jimmy1sprite.x -= 0.2;

  if (driver1sprite.x < _w - (_w + 600)){
    driver1sprite.x = _w + 100;
    driver1sprite.y = rndInt + Math.sin(delta) * 3;
  }
  else driver1sprite.x -= 0.8;

  if (driver2sprite.x > _w + 600){
    driver2sprite.x = -300;
    driver2sprite.y = rndInt + Math.sin(delta + 1.5) * 3;
  }
  else driver2sprite.x += 0.8;

  if (bits1sprite.x > _w + 600){
    bits1sprite.x = -1500;
    bits1sprite.y = rndInt + Math.sin(delta + 1.5) * 5;
  }
  else bits1sprite.x += 2;

  if (bits2sprite.x > _w + 600){
    bits2sprite.x = -1450;
    bits2sprite.y = rndInt + Math.sin(delta + 1.5) * 5;
  }
  else bits2sprite.x += 2;

  if (bits3sprite.x > _w + 600){
    bits3sprite.x = -1550;
    bits3sprite.y = rndInt + Math.sin(delta + 1.5) * 5;
  }
  else bits3sprite.x += 2;

  if (bits4sprite.x > _w + 600){
    bits4sprite.x = -1475;
    bits4sprite.y = rndInt + Math.sin(delta + 1.5) * 5;
  }
  else bits4sprite.x += 2;
}