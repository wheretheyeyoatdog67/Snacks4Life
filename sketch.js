let bw =40;
let w = 2000;
let h = 1200;
let xoff = 0;
let yoff = 0;
let itX = 0.007;
let itY =0.007;
let an;
var terrainValues = [];
var floorItems = [];
var invArr = [];
var animals = [];
var zombieArr=[]
let tree1;
let intro = true;
let scalev = 1;
let mousedx = 0;
let mousedy = 0;
function preload(){
  hit = loadSound('sounds/hitmarker-sound-effect_1.mp3');
rock = loadImage("Assets2/rocks.png")
  tree = loadImage("Assets2/tree1.png")
  plant1 = loadImage("Assets2/plants1.png")
  plant = loadAnimation('Assets2/plants/plant1.png','Assets2/plants/plant2.png', 'Assets2/plants/plant3.png');
  plantS = loadImage('Assets2/plants/plant1.png')
  cabin = loadImage("Assets2/cabin.png")

  dirt = loadImage("Assets2/stone.png")
  frogL = loadImage("Assets2/animals/frogL.png")
  frogR = loadImage("Assets2/animals/frogR.png")
  frogLr = loadImage("Assets2/animals/wolfl.png")
  frogRr = loadImage("Assets2/animals/wolf.png")
  grassMid = loadImage("Assets2/flora/grassMid.png")
  plant2 = loadImage("Assets2/flora/plant1.png")
  plant3 = loadImage("Assets2/flora/plant2.png")

  rock2 = loadImage("Assets2/flora/rock2.png")
  rock3 = loadImage("Assets2/flora/rock3.png")

  barrel = loadImage("Assets2/towns/barrel.png")
  box = loadImage("Assets2/towns/box.png")
  fire = loadImage("Assets2/towns/fire.png")
  logpile = loadImage("Assets2/towns/logpile.png")
flag = loadImage("Assets2/towns/flag.png")
  pad = loadImage("Assets2/flora/pad.png")
  tree2 = loadImage("Assets2/flora/tree2.png")
  mtree = loadImage("Assets2/flora/mtree.png")
  mdtree = loadImage("Assets2/flora/mdtree.png")
  wplant = loadImage("Assets2/flora/wplant.png")
  btree = loadImage("Assets2/flora/beachtree.png")
  reeds = loadImage("Assets2/flora/reeds.png")
  fern = loadImage("Assets2/flora/fern.png")
  sandRocks = loadImage("Assets2/sandRocks.png")
  boatl = loadImage("Assets2/boatl.png")
  boatr = loadImage("Assets2/boatr.png")

  sword = loadImage("Assets2/sword.png")

  pf = loadAnimation('Assets2/Sprite/sprite/f1.png','Assets2/Sprite/sprite/f2.png', 'Assets2/Sprite/sprite/f3.png');
  pl = loadAnimation('Assets2/Sprite/sprite/l1.png','Assets2/Sprite/sprite/l2.png', 'Assets2/Sprite/sprite/l3.png');
  pr = loadAnimation('Assets2/Sprite/sprite/r1.png','Assets2/Sprite/sprite/r2.png', 'Assets2/Sprite/sprite/r3.png');
  pu = loadAnimation('Assets2/Sprite/sprite/u1.png','Assets2/Sprite/sprite/u2.png',  'Assets2/Sprite/sprite/u3.png');

  zombR = loadAnimation('Assets2/zombieSprite/zomb1.png','Assets2/zombieSprite/zomb2.png',  'Assets2/zombieSprite/zomb3.png',  'Assets2/zombieSprite/zomb4.png');
  zombL = loadAnimation('Assets2/zombieSprite/zombl1.png','Assets2/zombieSprite/zombl2.png',  'Assets2/zombieSprite/zombl3.png',  'Assets2/zombieSprite/zombl4.png');
  zombD = loadAnimation('Assets2/zombieSprite/zombd1.png','Assets2/zombieSprite/zombd2.png',  'Assets2/zombieSprite/zombd3.png',  'Assets2/zombieSprite/zombd4.png');
let inv;

}

function setup() {

frameRate( 60 )
createCanvas(1980,1100)
genMap(0)
colorMode(HSB)

imageMode(CENTER)
pf.frameDelay = 10;
pl.frameDelay = 10;
pr.frameDelay = 10;
pu.frameDelay = 10;
plant.frameDelay = 100;

zombR.frameDelay = 20;
zombL.frameDelay = 20;
zombD.frameDelay = 20;
//an = pf;
sword.resize(50,30)
btree.resize(300,300)
tree.resize(200,200)
dirt.resize(bw,bw)
rock.resize(4*bw,3*bw)
reeds.resize(bw,bw)
cabin.resize(2*bw,2*bw)
grassMid.resize(bw,bw)
wplant.resize(1.2*bw,1.2*bw)
pad.resize(1.2*bw,1.2*bw)
//btree.resize(250,250)
fern.resize(1.2*bw,1.2*bw)
frogL.resize(bw,bw)
frogR.resize(bw,bw)
frogLr.resize(bw,bw)
frogRr.resize(bw,bw)
rock2.resize(2*bw,2*bw)
btree.resize(100,100)
boatl.resize(1.5*bw,1.5*bw)
boatr.resize(1.5*bw,1.5*bw)
an = pf

 inv = new Inv();

for (var i = 0; i < 500; i++) {

  for (var j = 0; j < 500; j++) {
    if(terrainValues[i][j]<150 &&terrainValues[i][j]>130 ){
    if(random(0,1000)<4) zombieArr[i][j] = new Zombie(0,i,j);}
    if(terrainValues[i][j]<150 &&terrainValues[i][j]>130 ){
      if(random(0,1000)<1)
      animals[i][j] = new Animal(0,i,j)
      if(random(0,1000)<1)
      animals[i][j] = new Animal(1,i,j)
    }
}
}
}
let mapping = false;

let dx=0;
let dy=0;
let counter = 0;
let clock = 0;

let playerx = w/bw/2-1;
let playery = h/bw/2-1;

function draw(){
  let mx = mouseX;
  let my = mouseY;
  translate(-(scalev-1)*990,-(scalev-1)*550)
    scale(scalev)

    background(0)
    noStroke()
    movement();
    counter+=.1;
    clock++;
    for(let i = 0;i<w/bw;i++){
      for(let j = 0;j<h/bw;j++){
        let heightVal = terrainValues[i+dx][j+dy]
        if(heightVal<120 )fill(200-5*sin(-heightVal+counter),200,255-35*sin(counter*heightVal))
        else if(heightVal<124)fill(40 + 5*sin(heightVal),70,60)
        else if(heightVal<130)fill(70 + 10*sin(heightVal),91,50)
        else if(heightVal<150)fill(60 + 10*sin(heightVal/2),120,50)
        else if(heightVal<170){
          //image(dirt,i*bw,j*bw)
          fill(59,12,67+5*sin(heightVal)-heightVal/50)
        }
        else if(heightVal<200){
          //image(dirt,i*bw,j*bw)
          fill(180,0,67+10*sin(heightVal)-heightVal/50)
        }

        else if(heightVal<500)fill(255,255,255)
        else fill(0,67,90)

        rect(i*bw,j*bw,bw,bw)
        // if(heightVal > 125&&heightVal<145)
        // image(plant1,i*bw,j*bw)

        //if(floorItems[i+dx][j+dy]=='rock')image(rock,i*bw-10,j*bw)
        if(floorItems[i+dx][j+dy]=='reeds')image(reeds,i*bw,j*bw)
        if (!mapping){
        if(floorItems[i+dx][j+dy]=='grassMid')image(grassMid,i*bw,j*bw)
        if(floorItems[i+dx][j+dy]=='pad')image(pad,i*bw,j*bw)

        if(floorItems[i+dx][j+dy]=='wplant')image(wplant,i*bw,j*bw)
        if(floorItems[i+dx][j+dy]=='fern')image(fern,i*bw,j*bw)
        if(floorItems[i+dx][j+dy]=='plant2')image(plant2,i*bw,j*bw)
        if(floorItems[i+dx][j+dy]=='barrel')image(barrel,i*bw,j*bw)
if(floorItems[i+dx][j+dy]=='box')image(box,i*bw,j*bw)
if(floorItems[i+dx][j+dy]=='flag')image(flag,i*bw,j*bw)
        if(floorItems[i+dx][j+dy]=='fire')image(fire,i*bw,j*bw)

        if(floorItems[i+dx][j+dy]=='rock3')image(rock3,i*bw,j*bw)
        if(floorItems[i+dx][j+dy]=='sandRocks')image(sandRocks,i*bw,j*bw)

        if(floorItems[i+dx][j+dy]=='plant'){
          // var pos = i*25+25;
          // var posy = j*25+25;
          if(dist(dx+playerx,dy+playery,i+dx,j+dy)<2) {
             plant.play();
            animation(plant,i*bw,j*bw)

          }else{
            image(plantS,i*bw,j*bw)
          }
        }

        //triangle(30+i, 75, 58+i, 20, 86+i, 75);
        //ellipse(i*bw,j*bw,bw,bw)
      }
      else {
        fill(0,255,255)
        rect(playerx+dx,playery+dy,bw,bw);
      }
    }
    }
if (!mapping){
    if(terrainValues[playerx+dx][playery+dy]<120){
      if(an ==pl)image(boatl,playerx*bw+bw/2,playery*bw+bw);
      else image(boatr,playerx*bw+bw/2,playery*bw+bw);
      speed = 2;
    }else speed = 3;
  animation(an,playerx*bw+bw/2,playery*bw+bw/2)

    push();
    if(dist(mouseY , mouseX ,height / 2, width / 2)<150){
    translate(mouseX-10, mouseY+10);
     let a = atan2(mouseY - height / 2, mouseX - width / 2);
     rotate(a);
     fill(0,0,90)

     image(sword,-30, -5)
     //rect(-30, -5, 60, 10);
   }
   else{
     translate(width/2-20, height/2+20);
      let a = atan2(mouseY - height / 2, mouseX - width / 2);
      rotate(a);
      fill(0,0,90)

      image(sword,100, 0)
   }
    pop();



  //rect(playerx*bw,playery*bw,bw,bw)player
  // push();
  // translate(width/2,height/2)
  // angleMode(RADIANS)
  // let rotFact  = atan2((mouseY-height/2)/2,(mouseX-width/2)/2);
  // let d = dist(mouseX,mouseY,width/2,height/2)
  // if(d> 100)d=100;
  //   fill(0,0,255)
  //   rotate(rotFact)
  //   ellipse(d,0,10,10)
  // pop();

for (var j = 0; j < h/bw; j++) {
  for (var i = 0; i < w/bw; i++) {
        if(zombieArr[i+dx][j+dy]){
          zombieArr[i+dx][j+dy].update();
          if(zombieArr[i+dx][j+dy].isDead)zombieArr[i+dx][j+dy]=undefined;
        }

        if(animals[i+dx][j+dy])animals[i+dx][j+dy].update();

        if(floorItems[i+dx][j+dy]=='tree'){


          if(dist(dx+playerx,dy+playery,i+dx,j+dy)<4){
            push();
             tint(255, .4);
             image(tree,i*bw+bw/2,j*bw-bw/1.5)
            pop();
            if(dist(mouseX/bw+dx,mouseY/bw+dy,i+dx,j+dy)<1){
              fill(0,255,255,.5)
              stroke(90,255,255,.8)
              rect(i*bw,j*bw,bw,bw)
            }

          }
          else image(tree,i*bw+bw/2,j*bw-bw/1.5)

        }
        else if(floorItems[i+dx][j+dy]=='tree2'){
          image(tree2,i*bw+bw/2,j*bw)
          if(dist(dx+playerx,dy+playery,i+dx,j+dy)<4&&dist(mouseX/bw+dx,mouseY/bw+dy,i+dx,j+dy)<1){
            fill(0,255,255,.5)
            stroke(90,255,255,.8)
            rect(i*bw,j*bw,bw,bw)
          }

        }
        else if(floorItems[i+dx][j+dy]=='btree'){
          image(btree,i*bw,j*bw-bw)
          //rect(i*bw,j*bw,bw,bw)
        }
        else if(floorItems[i+dx][j+dy]=='rock2')image(rock2,i*bw,j*bw)
        else if(floorItems[i+dx][j+dy]=='cabin'){
          image(cabin,i*bw,j*bw)
        }
        else if(floorItems[i+dx][j+dy]=='rock')image(rock,i*bw,j*bw)
        else if(floorItems[i+dx][j+dy]=='mtree')image(mtree,i*bw,j*bw)
    }
  }


}
inv.draw();
mousedx = mx;
mousedy = my;
}


let speed = 3;
function movement(){
  if (keyIsDown(65)&& dx>0&&clock%speed ==0) {
    console.log(playerx+dx-1)
    console.log(floorItems[playerx+dx-1][playery+dy])
    if(floorItems[playerx+dx-1][playery+dy]!='tree'){
      an = pl;
       dx -= 1;
    }



   }

   if (keyIsDown(68)&&clock%speed ==0) {
     if(floorItems[playerx+dx+1][playery+dy]!='tree'){
     an = pr;
     dx += 1;
   }
   }

   if (keyIsDown(87)&&clock%speed ==0) {
     if(floorItems[playerx+dx][playery+dy-1]!='tree'){
     an =pu
     dy -= 1;}
   }

   if (keyIsDown(83)&&clock%speed ==0) {
     if(floorItems[playerx+dx][playery+dy+1]!='tree'){
     an = pf
     dy += 1;}
   }

}
function keyPressed(){
  if(keyCode == 81){
    let fs = fullscreen();
    fullscreen(!fs);
  }
  else if(keyCode == 77){
    if(mapping==true){
      bw= 40;
      mapping=false;
    }else {
      mapping = true;
      bw = 15;
    }
  }

}
function mouseClicked() {
  let x = floor(mouseX/bw)+dx;
  let y = floor(mouseY/bw)+dy;
  terrainValues[x][y]= 500
}
function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  //pos += event.delta;
  if(event.delta==-53){


    scalev -=1;
  }
  if(event.delta==53){

    scalev +=1;
    // dy+=2
  }

}
