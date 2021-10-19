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
// const bit1 = PIXI.Texture.from('/img/1bit_pix.png');

// animate bits
const bitsImages = ["/img/bits_pix3x1.png", "/img/bits_pix3x2.png", "/img/bits_pix3x3.png", "/img/bits_pix3x4.png",
"/img/bits_pix3x5.png","/img/bits_pix3x6.png","/img/bits_pix3x7.png","/img/bits_pix3x8.png","/img/bits_pix3x9.png",
"/img/bits_pix3x10.png","/img/bits_pix3x11.png"];
const textureArray = bitsImages.map(image => PIXI.Texture.from(image));

//animate hungry driver - left to right
const dEatingImg = ["/img/driver_eating/driver_eatingR1.png", "/img/driver_eating/driver_eatingR2.png",
"/img/driver_eating/driver_eatingR3.png","/img/driver_eating/driver_eatingR4.png","/img/driver_eating/driver_eatingR5.png",
"/img/driver_eating/driver_eatingR6.png","/img/driver_eating/driver_eatingR7.png","/img/driver_eating/driver_eatingR8.png",
"/img/driver_eating/driver_eatingR9.png","/img/driver_eating/driver_eatingR10.png","/img/driver_eating/driver_eatingR11.png",
"/img/driver_eating/driver_eatingR12.png","/img/driver_eating/driver_eatingR13.png","/img/driver_eating/driver_eatingR14.png",
"/img/driver_eating/driver_eatingR15.png","/img/driver_eating/driver_eatingR16.png","/img/driver_eating/driver_eatingR17.png",];
const dEatingArray = dEatingImg.map(image => PIXI.Texture.from(image));

// initial setup for drivers and jimmy
const driver1sprite = makeSprite(driver1);
driver1sprite.x = -500;

const driver2sprite = makeSprite(driver2);
driver2sprite.x = _w + 400;

const jimmy1sprite = makeSprite(jimmy1);
jimmy1sprite.x = -600;

/* const driver4sprite = makeSprite(driver2);
driver4sprite.x = -400;
 */

//initial setup for single bits
/* const bit1r = makeSprite(bit1);
bit1r.x = -50; */


//initial setup for school of bits
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

const driverEating = makeGif(dEatingArray);
driverEating.x = -1450;
driverEating.y = 400;


///////////////////////////// END - find a way to condense this /////////////////////////////////////////

const ticker = new PIXI.Ticker();
ticker.add(animate);
ticker.start();

let delta = 0;
let y1, y2, y3, y4;

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



  // if (driver4sprite.x > _w + 600){
  //   y4 = rndY;
  //   driver4sprite.x = -1200;
  // }else{
  //   driver4sprite.x += 7;
  //   driver4sprite.y = y4;
  // };

  // if (bit1r.x > _w + 666){
  //   y4 = rndY;
  //   bit1r.x = -816;
  // }else{
  //   bit1r.x += 7;
  //   bit1r.y = y4;
  // };






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



    if (driverEating.x > _w + 600){
      y4 = rndY;
      driverEating.y = y4;
      driverEating.x = -1450;
      // driverEating.currentFrame[0];
    }else if(driverEating.x > 0){
      driverEating.play();
      driverEating.loop = false;
      driverEating.x += 10;
      driverEating.y -= 1;
      driverEating.animationSpeed = 0.2;

    }
    else{
      driverEating.x += 10;
      driverEating.y += 1;
      driverEating.stop();
    } 


}