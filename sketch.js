
var jake
var jake_img
var pista
var pista_img
var bordaE
var bordaD

function preload(){
 
  jake_img = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
  pista_img = loadImage("path.png")


}

function setup(){
  
  createCanvas(200,400);

pista = createSprite(100,250,10,10)
pista.addImage(pista_img)
pista.velocityY = 5
pista.scale = 0.65

jake = createSprite(100,350,10,10)
jake.addAnimation("correr",jake_img)
jake.scale = 0.7

bordaE = createSprite(10,250,20,500)
bordaD = createSprite(190,250,20,500)

 
}

function draw() {
  background(0);
  
bordaE.visible = false
bordaD.visible = false

jake.collide(bordaE)
jake.collide(bordaD)

jake.x = mouseX







if(pista.y > 250){

  pista.y = height/2

}


  
  
  
  drawSprites();
}
