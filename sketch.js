
var back;
var center,up1,right1,left1,iss1
var hasDocked=false
var main
var up
var right
var left
var iss
function preload(){
back=loadImage("spacebg.jpg")
var main=loadImage("spacecraft1.png")
var up=loadImage("spacecraft2.png")
var right=loadImage("spacecraft3.png")
var left=loadImage("spacecraft4.png")
var iss=loadImage("iss.png")
}



function setup() {
  createCanvas(800,700);
  center=createSprite(random(140,600), 200, 50, 50);
  center.addImage("middle",main)
  iss1=createSprite(400,100,50,50)
  iss1.addImage("iss",iss)


}


function draw() {
  background(back);  
  if(!hasDocked){
  if(keyDown(UP_ARROW)){
center.y=center.y+30
center.changeImage(up)
  }
  if(keyDown(LEFT_ARROW)){
    center.x=center.x-30
    center.changeImage(left)
      }
      if(keyDown(RIGHT_ARROW)){
        center.x=center.x+30
        center.changeImage(right)
          }

  }
  if(center.isTouching(iss1)){
    hasDocked=true
  }
  drawSprites();
}