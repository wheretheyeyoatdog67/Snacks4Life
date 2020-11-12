//x y refer to abs
class Animal{
  constructor(type,x,y){

    this.x = x;
    this.y = y;
    this.speed = floor(random(20,50));
    this.type = type;
    this.breedPot = 0;
    this.dir = 1;
  }
  draw(){
    this.breedPot += random(0,1);
    if(this.breedPot > 200 && this.type ==0&& terrainValues[this.x-1][this.y] > 130){animals[this.x-1][this.y] = new Animal(0,this.x-1,this.y);
    this.breedPot = 0;
    }
    if(this.breedPot > 200 && this.type ==1 && animals[this.x-1][this.y]){animals[this.x-1][this.y] = new Animal(1,this.x-1,this.y);
    this.breedPot = 0;
    }
    if(this.breedPot > 80)
    {
    if(random(0,100)< 1)animals[this.x-1][this.y] = undefined;
    }


    if(this.type == 0){
      if(this.dir == 1)
      image(frogR,(this.x-dx)*bw,(this.y-dy)*bw)
      else if(this.dir == -1)
      image(frogL,(this.x-dx)*bw,(this.y-dy)*bw)
    }
    else {
      if(this.dir == 1)
      image(frogRr,(this.x-dx)*bw,(this.y-dy)*bw)
      else if(this.dir == -1)
      image(frogLr,(this.x-dx)*bw,(this.y-dy)*bw)
    }
    //rect((this.x-dx)*bw,(this.y-dy)*bw,bw,bw)

  }
  move(){
    if(clock%this.speed == 0){
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
    update(){
      this.move();
      this.draw();
    }


  }
