let dX = w/bw;
let dY = h/bw;
class Animal{
  constructor(i,j,speed,type){
    this.prevX = i;
    this.prevY = j;
    this.x = i;
    this.y = j;
    this.hunger = 70;
    this.health = 70
    this.speed = speed
    this.curSkin = 0
    this.type = type
    this.destinationX=10;
    this.destinationY=1;
    if(this.type == 1)this.skin = [wolfL,wolfR]
    if(this.type == 2)this.skin = [frogL,frogR]
    this.waterWalk = false;

    this.moveCounter = 0;
  }
  draw(posX,posY){
    // noFill();
    // stroke(255,255,0)
    // rect(posX*bw,posY*bw,bw,bw)
    image(this.skin[this.curSkin],posX*90,posY*90)
    fill(255)
    rect(posX*90+10,posY*90+70,70,6)
    fill(255,0,0)
    rect(posX*90+10,posY*90+70,this.health,3)
    fill(0,255,0)
    rect(posX*90+10,posY*90+73,this.hunger,3)
    noFill();
    stroke(255,255,0)
    rect(this.destinationX*bw,this.destinationY*bw,bw,bw)
    noStroke();
  }
  basic_move(){
    let i = this.x+xinc;
    let j = this.y+yinc;
    let moved = false;
    let r = floor(random(0,4))

    if(r == 0 && fg[i+1][j]==0){
      this.x++;
      this.curSkin=1;
      moved = true;
    }
    else if(r == 1 &&fg[i-1][j]==0){
      this.x--;
      this.curSkin=0;
      moved = true;
    }
    else if(r == 2 &&fg[i][j+1]==0){
      this.y++;
      moved = true;
    }
    else if(r == 3 &&fg[i][j-1]==0){
      this.y--;
      moved = true;
    }
    if(moved){
      this.moveCounter = 1;
      animals[this.x][this.y] = animals[this.prevX][this.prevY]
      animals[this.prevX][this.prevY] = 0;
      this.prevX = this.x;
      this.prevY = this.y;
    }


  }
  hungry_move(){
    let i = this.x+xinc;
    let j = this.y+yinc;
    let moved = false;
    if(this.type ==2){
      let distXY = 200;
      for(let m =-4;m<4;m++){
        for(let n =-4;n<4;n++){
          if(mg[m+i][n+j] == 11){
            let distTemp = dist(i,j,m+i,n+j)
            if(distTemp < distXY){
              this.destinationX = m+i;
              this.destinationY = n+j;
              console.log(this.destinationX)
            }

          }
        }
      }

    }


    let r = floor(random(0,4))

    if(r == 0 && fg[i+1][j]==0 && this.destinationX>this.x){
      this.x++;
      this.curSkin=1;
      moved = true;
    }
    else if(r == 1 &&fg[i-1][j]==0&& this.destinationX<this.x){
      this.x--;
      this.curSkin=0;
      moved = true;
    }
    else if(r == 2 &&fg[i][j+1]==0&& this.destinationY>this.y){
      this.y++;
      moved = true;
    }
    else if(r == 3 &&fg[i][j-1]==0&& this.destinationY<this.y){
      this.y--;
      moved = true;
    }
    if(moved){
      this.moveCounter = 1;
      animals[this.x][this.y] = animals[this.prevX][this.prevY]
      animals[this.prevX][this.prevY] = 0;
      this.prevX = this.x;
      this.prevY = this.y;
    }
  }
  update(posX,posY){
    // console.log(posX)
    // console.log(posY)
    // //console.log("hi")
    if(counter%this.speed == 0 && this.moveCounter == 0){
    this.basic_move();
    //this.hungry_move();

    if(this.hunger>1)
    this.hunger-=1;
    }

    else this.moveCounter = 0;
    this.draw(posX,posY);
  }
}
