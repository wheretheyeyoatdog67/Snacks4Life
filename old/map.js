class Map{
  constructor(){

  }
  genMap(){

  yoff = 0;
  for (var i = 0; i < 200; i++) {
    terrainValues.push([]);
    boarderMut.push([]);
    fg.push([]);
    mg.push([]);
    mtId.push([])
    animals.push([])
    xoff = 0;
    for (var j = 0; j < 200; j++) {
      let terrainMap = map(noise(xoff,yoff),0,1,0,300)
      terrainValues[i][j] = terrainMap;






      fg[i][j] = 0;
      mg[i][j] = 0;
      animals[i][j] = 0;



      if(terrainMap > 150 && terrainMap < 175){
        let rand = random(0,100)
        if(rand<2)animals[i][j]=(new Animal(i,j,50+random(-10,10),1));
        if(rand<30)fg[i][j] = 1;
        else if(rand<31) fg[i][j] = 14 // stoneM1
        else if(rand<32)fg[i][j] = 15 // stoneM1
        else if(rand<35) mg[i][j] = 16 // stoneM1
        else if(rand<60) mg[i][j] = 30 // stoneM1
        if(random(0,100)<20)mg[i][j] = 12; // grassmid




      }

      if(terrainMap > 140&& terrainMap < 175){
        if(random(0,100)<10)mg[i][j] = 5;

      }
      if(terrainMap > 130 && terrainMap<140){
        if(random(0,100)<50)mg[i][j] = 11 //reeds
        if(random(0,100)<2)animals[i][j]=(new Animal(i,j,100+random(-10,10),2));
      }
      if(terrainMap > 120 && terrainMap<130){
        if(random(0,100)<20)mg[i][j] = 20 //reeds
      }

      if(terrainMap > 130&& terrainMap < 135){
        if(random(0,100)<10)fg[i][j] = 6;
        if(random(0,100)<10)fg[i][j] = 17;
        if(random(0,100)<10)mg[i][j] = 19;

      }

      if(terrainMap > 175 && terrainMap <180){

        if(random(0,100)>60)  fg[i][j] = 2;

      }
      if(terrainMap > 173 && terrainMap <185){

        mg[i][j] = 13;

      }

      if(terrainMap > 180){
          fg[i][j] = 3;
      }
    //   if(terrainMap > 140&& terrainMap < 180){
    //     if(random(0,100)<5){
    //       if(i>0 && fg[i-1][j] == 0 && mg[i-1][j]==0){
    //         fg[i][j] = 21
    //       }
    //     }
    //
    //
    // }



      xoff= xoff+itX
    }
    yoff = yoff+itY
  }
  //CREATE  MOUNTAINS TERRAIN

  for (var i = 1; i < 179; i++) {

    for (var j = 1; j < 200; j++) {
      let fgItem = fg[i+xinc][j+yinc]
      if(fgItem == 3){
        let counter = 0;
        let m1 = fg[i+xinc-1][j+yinc];
        let p1 = fg[i+xinc+1][j+yinc];
        let ym1 = fg[i+xinc][j+yinc-1];
        let yp1 = fg[i+xinc][j+yinc+1];
        if(m1!=3)counter++;
        if(p1!=3)counter++;
        if(ym1!=3)counter++;
        if(yp1!=3)counter++;
        //Case1:
        //if(counter<=3){
        if(m1 != 3){
          if(ym1!=3){
            if(p1==3){
              if(yp1==3){
                mtId[i+xinc][j+yinc] = 1;
              }
            }
          }
          if(ym1==3){
            if(p1==3){
              if(yp1==3){
                mtId[i+xinc][j+yinc] = 4;
              }
            }
          }
          if(ym1==3){
            if(p1==3){
              if(yp1!=3){
                mtId[i+xinc][j+yinc] = 7;
              }
            }
          }
        }
        if(m1 == 3 && p1 ==3){
          if(ym1 !=3 && yp1 ==3){
            mtId[i+xinc][j+yinc] = 2
          }

          if(ym1 ==3 && yp1 ==3){
            mtId[i+xinc][j+yinc] = 5
          }
          if(ym1 ==3 && yp1 !=3){
            mtId[i+xinc][j+yinc] = 8
          }
        }
        if(m1 == 3 && p1 !=3){
          if(ym1 !=3 && yp1 ==3){
            mtId[i+xinc][j+yinc] = 3
          }

          if(ym1 ==3 && yp1 ==3){
            mtId[i+xinc][j+yinc] = 6
          }
          if(ym1 ==3 && yp1 !=3){
            mtId[i+xinc][j+yinc] = 9
          }
        }
      //}

        // if(m1!=7 && m1!=3 && m1!=22)fg[i+xinc][j+yinc] = 8
        // if(m1==8)fg[i+xinc][j+yinc] = 3
        // if(p1!=7 && p1!=3)fg[i+xinc][j+yinc] = 9
        // if(fg[i+xinc][j+yinc]==3&&fg[i+xinc][j+yinc+1]!=3)fg[i+xinc][j+yinc] = 22





      }

    }
}
//mtn code Creation
for (var i = 1; i < 179; i++) {
  for (var j = 1; j < 200; j++) {
    if(mtId[i][j] ==4)fg[i][j]=8
    if(mtId[i][j] ==6)fg[i][j]=9
    if(mtId[i][j] ==8)fg[i][j]=23
    if(mtId[i][j] ==7)fg[i][j]=22
    if(mtId[i][j] ==9)fg[i][j]=24
    if(mtId[i][j] ==1)fg[i][j]=25
    if(mtId[i][j] ==3)fg[i][j]=26

  }}


}

drawMap(){
    noStroke();
    cloudTimerY+=0.01;
    cloudTimerX+=0.01;
    cItY = cloudTimerY;
    for (var i = 0; i < w/bw; i++) {
      cItX = cloudTimerX;
      for (var j = 0; j < h/bw; j++) {
        let fgItem = fg[i+xinc][j+yinc]
        let mgItem = mg[i+xinc][j+yinc]
        let tVal = terrainValues[i+xinc][j+yinc]
          if(xinc> 10){
          if(terrainValues[i+xinc][j+yinc] < 130) {
              image(sand,i*bw,j*bw);
              fill(0,0,255,255-tVal)
              rect(i*bw,j*bw,bw,bw)
            }
          else if(tVal < 140 ){image(dirt,i*bw,j*bw);}
          else if(tVal < 160 ){image(grassD,i*bw,j*bw);
}
          else if(tVal < 181){image(grass,i*bw,j*bw);
}
          else image(mtfl,i*bw,j*bw);

          if(animals[i+xinc][j+yinc]!= 0)animals[i+xinc][j+yinc].update(i,j);

          //midgroud
          if(mgItem != 0){
            if(mgItem == 5)image(bbush,i*bw,j*bw)
            else if(mgItem == 12)image(grassMid,i*bw,j*bw)
            else if(mgItem == 13)image(cobble,i*bw,j*bw);
            else if(mgItem == 16)image(trunk,i*bw,j*bw);
            else if(mgItem == 11)image(reed,i*bw,j*bw);
            else if(mgItem == 19)image(bmush,i*bw,j*bw);
            else if(mgItem == 20)image(pad,i*bw,j*bw);
            else if(mgItem == 30){
              if(dist(11,6,i,j)<1.5) {
                plant.play();
                animation(plant,i*bw,j*bw)
              }else{
                image(plantS,i*bw,j*bw)
              }}
          }


          //foreground
          if(fgItem!=0){

            if(fgItem == 3){
              image(mtn,i*bw,j*bw)
              if(fg[i+xinc+1][j+yinc] ==3){
                if(fg[i+xinc-1][j+yinc] ==3){
                  if(fg[i+xinc][j+yinc+1] ==3){
                    if(fg[i+xinc][j+yinc-1] ==3){
                      fill(90,90,90,170)
                      rect(i*bw,j*bw,bw,bw)
                    }
                  }
                }
              }
            }

            else if(fgItem == 5)image(bbush,i*bw+10,j*bw)
            else if(fgItem == 7){
              image(grass,i*bw,j*bw);
              image(rock,i*bw,j*bw)
            }
            else if(fgItem == 8){
              image(grass,i*bw,j*bw);
              image(mtnl,i*bw,j*bw)
            }
            else if(fgItem == 22){
              image(grass,i*bw,j*bw);
              image(mtnb,i*bw,j*bw)
            }
            else if(fgItem == 23){
              image(grass,i*bw,j*bw);
              image(mtnbl,i*bw,j*bw)
            }
            else if(fgItem == 24){
              image(grass,i*bw,j*bw);
              image(mtnbr,i*bw,j*bw)
            }
            else if(fgItem == 25){
              image(grass,i*bw,j*bw);
              image(mtntl,i*bw,j*bw)
            }
            else if(fgItem == 26){
              image(grass,i*bw,j*bw);
              image(mtntr,i*bw,j*bw)
            }
            else if(fgItem == 9){
              image(grass,i*bw,j*bw);
              image(mtnr,i*bw,j*bw)
            }
            else if(fgItem == 10){
              image(grass,i*bw,j*bw);
              image(mtnb,i*bw,j*bw)
            }
            else if(fgItem == 11){
              image(reed,i*bw,j*bw);
            }
            else if(fgItem == 12){
              image(grassMid,i*bw,j*bw);
            }
            else if(fgItem == 14){
              image(stoneM1,i*bw,j*bw);
            }
            else if(fgItem == 15){
              image(stoneM2,i*bw,j*bw);
            }
          }

          let clouds = map(noise(cItY,cItX),0,1,0,300)
          if(clouds > 200){
            noStroke();
            fill(200,200,200, 100 + 20*sin(cItY))
            rect(i*bw,j*bw,bw,bw)
          }
            cItX = cItX + itX;

        }}
        cItY = cItY + itY;
      }


  }
  drawFG(){
  for (var i = 0; i < w/bw; i++) {
    for (var j = 0; j < h/bw; j++) {
      let fgItem = fg[i+xinc][j+yinc]

      let mgItem = mg[i+xinc][j+yinc]
      if(devMode){
        noFill();
        stroke(255,255,0)
        rect(i*bw,j*bw,bw,bw)
        stroke(0)
        fill(255,255,0)
        text(yinc+i,i*bw,30+j*bw)
        text(xinc+j,i*bw,50+j*bw)
        text(mgItem,70+i*bw,30+j*bw)
        text(fgItem,40+i*bw,30+j*bw)
      }


      if(fgItem!=0){
      if(fgItem == 1)image(tree,i*bw-30,j*bw-40)
      else if(fgItem == 4)image(tree2,i*bw-30,j*bw-150)
      else if(fgItem == 6)image(willow,i*bw-20,j*bw-30)
      else if(fgItem == 17)image(willow2,i*bw-20,j*bw-30)
      else if(fgItem == 2)image(rock,i*bw,j*bw)
      else if(fgItem == 20)image(trunk1,i*bw,j*bw);




      if(devMode){
        text(mgItem,70+i*bw,30+j*bw)
        text(fgItem,40+i*bw,30+j*bw)
      }

  }
  }
  }
}

}
