

var me, ground,meIm,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,enemy,revolve2,revolve1,Keys,keyIm;
var KeyGot = 0
function preload() {
 meIm= loadImage("Images/me.png")
keyIm = loadImage("Images/key.png")

}

function setup() {
	createCanvas(2200, 700);
  
Keys = createSprite(-1700,550,20,20)
Keys.addImage(keyIm)
Keys.scale = 0.3

  me = createSprite(70, 500, 30, 30)
me.addImage(meIm)
  me.scale = 0.2;

  ground = createSprite(600, 600, 5000, 30)
  
box1= createSprite(100,570,30,30)

box2 = createSprite(130,570,30,30)
box3 = createSprite(160,570,30,30)
box4= createSprite(135,540,30,30)

box5 = createSprite(160,540,30,30)
box6 = createSprite(160,510,30,30)

box7 = createSprite(350,570,30,30)
box8 = createSprite(380,540,30,30)

box9 = createSprite(410,540,30,30)
box10 = createSprite(440,540,30,30)
enemy = createSprite(300,540,10,95)
enemy.shapeColor = "red"

revolve1 = createSprite(700,440,10,300)
enemy.velocityX = -10
revolve1.rotationSpeed = -5
revolve2 = createSprite(700,440,300,10)
me.setCollider("rectangle",0,50,200,200)
Keys.setCollider("rectangle",0,-50,200,200)
revolve2.rotationSpeed = -5
revolve2.shapeColor ="red"
revolve1.shapeColor ="red"
ground.shapeColor = "White"

box1.shapeColor = "White"
box2.shapeColor = "White"
box3.shapeColor = "White"
box4.shapeColor = "White"
box5.shapeColor = "White"
box6.shapeColor = "White"
box7.shapeColor = "White"
box8.shapeColor = "White"
box9.shapeColor = "White"
box10.shapeColor = "White"

}


function draw() {
	
	background(0);
if(Keys.isTouching(me)){
 Keys.destroy();
KeyGot = KeyGot+1
}
  
if(keyDown("UP_ARROW")&&me.y>=470){

	me.velocityY = -8
}
if(enemy.isTouching(me)||revolve1.isTouching(me)||revolve2.isTouching(me)){
  me.x = 70
  me.y = 450
}



if(keyDown("RIGHT_ARROW")){
me.x = me.x+10

} 

if(keyDown("LEFT_ARROW")){
  me.x = me.x-10

  } 
  if(me.y>750){
    me.x = 70
    me.y = 450
  }


console.log(me.y)

  camera.position.x = me.x;
  camera.position.y = me.y
me.velocityY = me.velocityY+1

me.debug = true;
Keys.debug = true;
me.collide(ground);
me.collide(box1);
me.collide(box2);
me.collide(box3);

box1.collide(ground);
box2.collide(ground);
box2.collide(ground);

me.collide(box4);
me.collide(box5);
me.collide(box6);
me.collide(box7)
me.collide(box8)


box8.collide(ground);

box4.collide(ground);
box5.collide(ground);
box6.collide(ground);
box7.collide(ground)
enemy.bounceOff(box3)
enemy.bounceOff(box7)

me.collide(box9)
me.collide(box10)


box9.collide(ground);

box10.collide(ground);


drawSprites()
fill(255)

textSize(30)
text(""+KeyGot,me.x-10,me.y-50)
text("Go To Extreme Left And Collect The Key",-250,300)
text("Dont Go Down. Dead End!",-2300,400)
text("Dont Touch Red Things",-500,400)
text("You Can Air Jump :D",150,400)
}



