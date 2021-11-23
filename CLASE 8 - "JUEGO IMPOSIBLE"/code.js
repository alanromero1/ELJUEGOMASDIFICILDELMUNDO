var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var grupoplaying = createGroup();

var temp = 0

var winarea = createSprite(309,200,60,70);
winarea.shapeColor = rgb(144,238,144);
grupoplaying.add(winarea);

var pelotaj = createSprite(105,200,20,20);
grupoplaying.add(pelotaj);

var muro1 = createSprite(70,200,3,70);
grupoplaying.add(muro1);

var muro2 = createSprite(100,165,60,3);
grupoplaying.add(muro2);

var muro3 = createSprite(100,235,60,3);
grupoplaying.add(muro3);

var muro4 = createSprite(130,130,3,70);
grupoplaying.add(muro4);

var muro5 = createSprite(130,270,3,70);
grupoplaying.add(muro5);

var muro6 = createSprite(205,95,150,3);
grupoplaying.add(muro6);

var muro7 = createSprite(205,305,150,3);
grupoplaying.add(muro7);

var muro8 = createSprite(280,130,3,70);
grupoplaying.add(muro8);

var muro9 = createSprite(280,270,3,70);
grupoplaying.add(muro9);

var muro10 = createSprite(310,165,60,3);
grupoplaying.add(muro10);

var muro11 = createSprite(310,235,60,3);
grupoplaying.add(muro11);

var muro12 = createSprite(340,200,3,70);
grupoplaying.add(muro12);

var pelota1 = createSprite(160,200,10,10);
pelota1.velocityY=-10;
grupoplaying.add(pelota1);

var pelota2 = createSprite(200,200,10,10);
pelota2.velocityY=10;
grupoplaying.add(pelota2);

var pelota3 = createSprite(240,200,10,10);
pelota3.velocityY=-10;
grupoplaying.add(pelota3);

var muertes=0;


var estadodeljuego = "playing";

function draw() {
background("white");
drawSprites();
addmuerte();
playsound();

  pelotaj.bounceOff(muro1);
  pelotaj.bounceOff(muro12);
  pelotasbounceoff();

  if(estadodeljuego === "playing"){
    textSize(15);
    text("Muertes = " + muertes,170,65);
    movement();
    resetpelotaj();
  }

  if(estadodeljuego === "playing" && temp === 1){
    createroom();
  }

  if(temp === 1){
    temp = 0;
  }

  if(estadodeljuego === "playing" && pelotaj.isTouching(winarea)){
    estadodeljuego = "won";
  }

  if(estadodeljuego === "won"){
    setestadodeljuego();
    grupoplaying.destroyEach();
    textSize(15);
    text("¡GANASTE! MORISTE " + muertes + " VECES",100,200);
    textSize(10);
    text("PRESION R PARA RESETEAR",150,210);
    textSize(10);
  }

}

  





  function moverx(){
    pelotaj.velocityX=5;
  }

  function pararmoverx(){
    pelotaj.velocityX=0;
  }
  
  function moverxneg(){
    pelotaj.velocityX=-5;
  }
  
  function pelotasbounceoff(){
    pelota1.bounceOff(muro6);
    pelota1.bounceOff(muro7);
    pelota2.bounceOff(muro6);
    pelota2.bounceOff(muro7);
    pelota3.bounceOff(muro6);
    pelota3.bounceOff(muro7);
  }
  
  function addmuerte(){
    if(pelotaj.isTouching(pelota1) || pelotaj.isTouching(pelota2) || pelotaj.isTouching(pelota3)){
      muertes = muertes + 1;
    }
  }
  
  function playsound(){
    if(pelotaj.isTouching(pelota1) || pelotaj.isTouching(pelota2) || pelotaj.isTouching(pelota3)){
      playSound("assets/category_digital/error_1.mp3");
    }
  }
  
  function movement(){
  
    if(keyDown("right")){
      moverx();
    }
  
    else{
      pararmoverx();
    }

    if(keyDown("left")){
      moverxneg();
    }
  }
  
  function resetpelotaj(){
    if(pelotaj.isTouching(pelota1) || pelotaj.isTouching(pelota2) || pelotaj.isTouching(pelota3)){
      pelotaj.x=105;
    }
  }
  
  function setestadodeljuego(){
    if(estadodeljuego === "won" && keyDown("R")){
      estadodeljuego = "playing";
      temp = 1
      console.log("Estado ha sido cambiado a playing");
    }
  }

  function createroom(){
    var grupoplaying = createGroup();

  var winarea = createSprite(309,200,60,70);
    winarea.shapeColor = rgb(144,238,144);
    grupoplaying.add(winarea);

  var pelotaj = createSprite(105,200,20,20);
    grupoplaying.add(pelotaj);

  var muro1 = createSprite(70,200,3,70);
    grupoplaying.add(muro1);

  var muro2 = createSprite(100,165,60,3);
    grupoplaying.add(muro2);

  var muro3 = createSprite(100,235,60,3);
    grupoplaying.add(muro3);

  var muro4 = createSprite(130,130,3,70);
    grupoplaying.add(muro4);

  var muro5 = createSprite(130,270,3,70);
    grupoplaying.add(muro5);

  var muro6 = createSprite(205,95,150,3);
    grupoplaying.add(muro6);

  var muro7 = createSprite(205,305,150,3);
    grupoplaying.add(muro7);

  var muro8 = createSprite(280,130,3,70);
    grupoplaying.add(muro8);

  var muro9 = createSprite(280,270,3,70);
    grupoplaying.add(muro9);

  var muro10 = createSprite(310,165,60,3);
    grupoplaying.add(muro10);

  var muro11 = createSprite(310,235,60,3);
    grupoplaying.add(muro11);

  var muro12 = createSprite(340,200,3,70);
    grupoplaying.add(muro12);

  var pelota1 = createSprite(160,200,10,10);
    pelota1.velocityY=-10;
  grupoplaying.add(pelota1);

  var pelota2 = createSprite(200,200,10,10);
  pelota2.velocityY=10;
  grupoplaying.add(pelota2);

  var pelota3 = createSprite(240,200,10,10);
  pelota3.velocityY=-10;
  grupoplaying.add(pelota3);
  }
  
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
