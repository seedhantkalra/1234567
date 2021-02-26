var dog,sadDog,happyDog;
var milkImg;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milkImg=loadImage("Images/Milk.png");
  
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  milk=createSprite(300,200,150,150);
  milk.addImage(milkImg);
  milk.scale=0.15;
  

}

function draw() {
  background(46,139,87);
  milk.display()
  drawSprites();
}

  
//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
