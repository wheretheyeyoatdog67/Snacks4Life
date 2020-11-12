function spawnStoneCircle(){
    for (var i = 20; i < 980; i++) {
        for (var j = 0; j < 1000; j++) {
          if(terrainValues[i][j]>130 && terrainValues[i][j]<140&&i>20){
              if(random(0,100)<.4){
                for (var l = -4; l < 5; l++) {
                    for (var m = -4; m < 5; m++) {
                      //if(floorItems[i+l][j+m]=="tree"||floorItems[i+l][j+m]=="tree2")
                      floorItems[i+l][j+m]=undefined;

                    }
                  }
                  //floorItems[i][j]="rock";
              }
          }
    }
}
}
function bigrock(){
    for (var i = 20; i < 980; i++) {
        for (var j = 0; j < 1000; j++) {
          if(terrainValues[i][j]>130 && terrainValues[i][j]<150&&i>20){
              if(random(0,100)<.5){
                for (var l = -1; l < 3; l++) {
                    for (var m = -1; m < 3; m++) {
                      //if(floorItems[i+l][j+m]=="tree"||floorItems[i+l][j+m]=="tree2")
                      floorItems[i+l][j+m]=undefined;

                    }
                  }
                  floorItems[i][j]="rock2";
              }
          }
    }
}
}

function spawnCabin(){
    for (var i = 20; i < 980; i++) {
        for (var j = 0; j < 1000; j++) {
          if(terrainValues[i][j]>130 && terrainValues[i][j]<140&&i>20){
              if(random(0,100)<.1){
                for (var l = -4; l < 5; l++) {
                    for (var m = -4; m < 5; m++) {
                      //if(floorItems[i+l][j+m]=="tree"||floorItems[i+l][j+m]=="tree2")
                      if(random(0,10)<10)floorItems[i+l][j+m]=undefined;

                    }
                  }
                  floorItems[i][j-3]="cabin";
                  floorItems[i+3][j]="cabin";
                  if(random(0,10)<5)
                  floorItems[i-3][j]="cabin";
                  if(random(0,10)<5)
                  floorItems[i][j+4]="cabin";
                  floorItems[i][j]="fire";

                  floorItems[i+1][j-3]="barrel";
                  if(random(0,10)<5)
                  floorItems[i+2][j-3]="barrel";

                  if(random(0,10)<5)
                  floorItems[i-2][j-3]="box";
                  if(random(0,10)<2)
                  floorItems[i-3][j-3]="box";
                  if(random(0,10)<5)
                  floorItems[i-3][j-2]="box";

                  floorItems[i+3][j-3]="flag";
              }
          }
    }
}
}

function genMap(inp){

  let cavX=0;
  let cavY=0;
  let cavIX = .09;
  let cavIY = .08;
  for (var i = 0; i < 1000; i++) {
    terrainValues.push([]);
    invArr.push([]);
    floorItems.push([]);
    animals.push([])
    zombieArr.push([])
    xoff = 0;
    cavX=0;
    //yoff = 0;
    noiseDetail(8, 0.5)
    //yoff = inp;
    for (var j = 0; j < 1000; j++) {
      //terrainValues[i][j] = random(0,255);

      let caveVal  = floor(map(noise(cavX,cavY),0,1,60,65))

      let l = floor(map(noise(xoff,yoff),0,1,0,230))

      terrainValues[i][j] = l;
      if(terrainValues[i][j]<80){
        invArr[i][j] = 200- terrainValues[i][j]
        terrainValues[i][j]=invArr[i][j];
      }

      if(i == 0 || i == 1000||j==0||j==1000)terrainValues[i][j]=500;
      //console.log(terrainValues[i][j])
      if(terrainValues[i][j]>120 && terrainValues[i][j]<150){

        if(random(0,100)<5)
        floorItems[i][j]='rock3'
      }
      if(terrainValues[i][j]>135 && terrainValues[i][j]<149){
        if(random(0,100)<25)
        floorItems[i][j]='tree'
        else if(random(0,100)<15)
        floorItems[i][j]='tree2'

        //else if(random(0,100)<10)floorItems[i][j]='cabin'

      }
      if(terrainValues[i][j]>130 && terrainValues[i][j]<135){
      if(random(0,100)<75)
      floorItems[i][j]='plant'
    }
      if(terrainValues[i][j]>130 && terrainValues[i][j]<149){
        if(random(0,100)<25)
        floorItems[i][j]='plant2'
        if(random(0,100)<25)
        floorItems[i][j]='plant3'
      }
      // if(terrainValues[i][j]>140 && terrainValues[i][j]<145){
      //   if(random(0,100)<5)
      //   floorItems[i][j]='rock'
      //
      // }
      if(terrainValues[i][j]>130 && terrainValues[i][j]<140){
        if(random(0,100)<40)
        floorItems[i][j]='grassMid'

      }
      if(terrainValues[i][j]>145 && terrainValues[i][j]<150){
        if(random(0,100)<10)
        floorItems[i][j]='fern'

      }
      if(terrainValues[i][j]>125 && terrainValues[i][j]<128){
        if(random(0,100)<10)
        floorItems[i][j]='btree'


      }
      if(terrainValues[i][j]>125 && terrainValues[i][j]<128){
        if(random(0,100)<30)
        floorItems[i][j]='sandRocks'


      }

      if(terrainValues[i][j]>114 && terrainValues[i][j]<119){
        if(random(0,100)<1)
        floorItems[i][j]='wplant'

      }
      if(terrainValues[i][j]>120 && terrainValues[i][j]<123){
      if(random(0,100)<20)
      floorItems[i][j]='reeds'}
      if(terrainValues[i][j]>115 && terrainValues[i][j]<120){
        if(random(0,100)<5)
        floorItems[i][j]='pad'

      }
      if(terrainValues[i][j]>180 && terrainValues[i][j]<200){
        if(random(0,100)<5)
        floorItems[i][j]='mtree'

      }







      xoff= xoff+itX
      cavX= cavX +=cavIX
    }
    yoff = yoff+itY
    cavY= cavY +=cavIY
  }
spawnStoneCircle()
spawnCabin()
bigrock();
}
