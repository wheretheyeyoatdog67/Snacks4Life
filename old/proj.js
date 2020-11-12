class Proj1{
  constructor(){

    this.x = 0;
    this.y = 0;
    this.rot = atan2((mouseY-ofY*bw)/2,(mouseX-ofX*bw)/2);
    this.clock = 0;
  }
  drawProj(){
    push();

    translate(ofX*bw+30,ofY*bw+10)
    rotate(this.rot);
      fill(200,200,200, 100)
    ellipse(this.x*bw,-30*sin(this.x),50,10);

    ellipse(this.x*bw,30*sin(this.x),50,10);
    ellipse(this.x*bw+30*sin(this.x),0,50,120);
    fill(120,255,255)
    ellipse(this.x*bw+30,0,20,20);
    fill(200,255,255)
    ellipse(this.x*bw,-30,20,20);

    ellipse(this.x*bw,30,20,20);



    pop();

  }
  move(){

    this.x +=0.2;
  }
  update(){
    this.clock ++;
    this.drawProj();
    if(this.clock % 1 == 0)
    this.move();

  }
}
class Proj2{
  constructor(){

    this.x = 0;
    this.y = 0;
    this.rot = atan2((mouseY-ofY*bw)/2,(mouseX-ofX*bw)/2);
    this.clock = 0;
  }
  drawProj(){
    push();
    translate(ofX*bw+30,ofY*bw+10)
    rotate(this.rot);
    fill(120,20,20,120)
    ellipse(this.x*bw,0,50,15);
    ellipse(this.x*bw,-20,50,15);
    ellipse(this.x*bw,20,50,15);
    fill(255,0,255)
    ellipse(this.x*bw,-10*sin(this.x),70,5);
    ellipse(this.x*bw,10*sin(this.x),70,5);
    ellipse(this.x*bw+10,0,70,5);

    pop();

  }
  move(){
    this.x +=0.2;
  }
  update(){
    this.clock ++;
    this.drawProj();
    if(this.clock % 1 == 0)
    this.move();

  }
}
class Proj3{
  constructor(){

    this.x = 0;
    this.y = 0;
    this.rot = atan2((mouseY-ofY*bw)/2,(mouseX-ofX*bw)/2);
    this.clock = 0;
  }
  drawProj(){
    push();
    noFill();
    strokeWeight(5)
    translate(ofX*bw+45 ,ofY*bw+40)
    rotate(this.rot+this.clock/12);
    stroke(255,0,0)

    ellipse(0,0,this.x*20,this.x*10)
    stroke(255,128,0)

    pop();

  }
  move(){
    this.x = 7+2*sin(this.clock/PI);
  }
  update(){
    this.clock +=1;
    this.drawProj();
    if(this.clock % 1 == 0)
    this.move();

  }
}
class Proj4{
  constructor(){

    this.x = 0;
    this.y = 0;
    let dirY = floor((mouseY-40)/bw);
    let dirX = floor((mouseX-40)/bw);
    this.rot = atan2((dirY-ofY)/2,(dirX-ofX)/2);
    this.clock = 0;

  }
  drawProj(){
    push();

    translate(ofX*bw+50,ofY*bw+40)

    rotate(this.rot);
    //line(0,0,2450,0)
    fill(200,200,200, 255)
    ellipse(this.x*bw+50,0,70,30);
    fill(20,20,254,200)
    stroke(255)
    ellipse(this.x*bw+65,15*sin(this.clock/10),10,15);
    ellipse(this.x*bw+65,15*sin(-this.clock/10),10,15);
    ellipse(this.x*bw+65,15*sin(this.clock/5),10,15);
    fill(255,0,0)

    pop();
  }
  move(){
    this.x +=0.2;
  }
  update(){
    this.clock +=5;
    this.drawProj();
    // if(this.clock % 1 == 0)
    // this.move();

  }
}
class Proj5{
  constructor(){

    this.x = 0;
    this.y = 0;
    let dirY = floor((mouseY-40)/bw);
    let dirX = floor((mouseX-40)/bw);
    this.rot = atan2((dirY-ofY)/2,(dirX-ofX)/2);
    this.clock = 0;

  }
  drawProj(){
    push();

    translate(ofX*bw+45,ofY*bw+40)

    rotate(this.rot + this.clock);

    ellipse(10*sin(this.clock/10)+50,0,20,20)
    pop();
  }
  move(){
    this.x +=0.2;
    p.speed = 1;
  }
  update(){
    this.clock +=1;
    ///if(this.clock > 200)//p.speed = 6;
    this.drawProj();

  }
}
