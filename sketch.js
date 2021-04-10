var  garden_img, cat_img1, mouse_img1, cat_img2, mouse_img2;
var cat, mouse;


function preload() {
    //load the images here
    garden_img = ("garden.png");
    cat_img1 = ("images/cat1.png");
    mouse_img1 = ("images/mouse1.png");
    cat_img2 = ("cat2.png,cat3.png");
    mouse_img2 = ("mouse2.png,mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(80,50);
    mouse = createSprite(90,60);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing", mouse_img2);
    mouse.changeAnimation("mouseTeasing");
    mouse. frameDelay = 25;
}

if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouse_img2);
    mouse.changeAnimation("mouseTeasing");
    mouse. frameDelay = 25;
}






}
