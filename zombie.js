//x y refer to abs
class Zombie{
  constructor(type,x,y){

    this.x = x;
    this.y = y;
    this.speed = floor(random(5,20));
    this.type = type;
    this.breedPot = 0;
    this.dir = 1;
    this.health = 1000;
    this.isDead = false;
    this.isAnD= false;
    this.anTimer = 0;
  }
  draw(){
    // this.breedPot += random(0,1);
    // if(this.breedPot > 200 && this.type ==0&& terrainValues[this.x-1][this.y] > 130){animals[this.x-1][this.y] = new Animal(0,this.x-1,this.y);
    // this.breedPot = 0;
    // }
    // if(this.breedPot > 200 && this.type ==1 && animals[this.x-1][this.y]){animals[this.x-1][this.y] = new Animal(1,this.x-1,this.y);
    // this.breedPot = 0;
    // }
    // if(this.breedPot > 80)
    // {
    // if(random(0,100)< 1)animals[this.x-1][this.y] = undefined;
    // }
    //
    //
      if(!this.isAnD){
        if(this.dir == 1)
        animation(zombR,(this.x-dx)*bw,(this.y-dy)*bw)
        else if(this.dir == -1)
        animation(zombL,(this.x-dx)*bw,(this.y-dy)*bw)
        fill(0,255,255)
        rect((this.x-dx)*bw-bw/2+3,(this.y-dy)*bw+25,44,5)
        fill(120,255,255)
        rect((this.x-dx)*bw-bw/2+3,(this.y-dy)*bw+25,this.health/1000*44,5)
      }
      else{
        if(this.anTimer >10)this.isDead = true;
        animation(zombD,(this.x-dx)*bw,(this.y-dy)*bw)
        this.anTimer++;
      }




  }
  move(){
    if(clock%this.speed == 0){
      if(dist(this.x-dx,this.y-dy,playerx,playery)<15){
        let rand = floor(random(0,2));
        if(rand == 0 && playerx > this.x-dx){
          this.dir = 1
          this.x++;
        }
        else if(rand == 0 && playerx < this.x-dx){
          this.x--;
          this.dir = -1;
        }
        else if(playery > this.y-dy)this.y++;
        else if(playery < this.y-dy)this.y--;
      }
      else{
      let rand =  floor(random(0,4));
      switch(rand){
        case 0:
        if(terrainValues[this.x-1][this.y]<150 &&terrainValues[this.x][this.y]>120 ){
          this.x -=1;
          this.dir = -1;
        }

        break;
        case 1:
        if(terrainValues[this.x+1][this.y]<150 &&terrainValues[this.x][this.y]>120 ){
        this.x +=1;
        this.dir = 1
      }
        break;
        case 2:
        if(terrainValues[this.x][this.y-1]<150 &&terrainValues[this.x][this.y]>120 ){
        this.y -=1;
      }
        break;
        case 3:
        if(terrainValues[this.x][this.y+1]<150 &&terrainValues[this.x][this.y]>120 ){
        this.y +=1;
      }

        break;
      }
    }
    }
  }
  swordCol(){


    if(dist((this.x-dx)*bw,(this.y-dy)*bw,mouseX,mouseY) < 50){
      if(dist(playerx*bw,playery*bw,mouseX,mouseY) < 150){
        let mk = abs(winMouseX - pwinMouseX)+abs(winMouseY - pwinMouseY);
        let l = map(mk,0,250,0,1)
        console.log(l)
        hit.setVolume(l);
        hit.play();
      this.health-=abs(winMouseX - pwinMouseX)+abs(winMouseY - pwinMouseY);
      this.x+=floor((winMouseX - pwinMouseX)/200)
      this.y+=floor((winMouseY - pwinMouseY)/200)
      if(this.health<0){
        this.isAnD = true;
      }
    }
  }
  }
    update(){
      this.swordCol()
      if(!this.isAnD){
        this.move();
      }

      this.draw();
    }


  }
