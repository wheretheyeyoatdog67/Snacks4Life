let cp = 0;
function introS(){

  genMap(cp)
  for(let i = 0;i<w/bw;i++){
    for(let j = 0;j<h/bw;j++){
      let heightVal = terrainValues[i+dx][j+dy]
      if(heightVal<120 )fill(200-5*sin(-heightVal+counter),200,255-35*sin(counter*heightVal))
      else if(heightVal<128)fill(46 + 5*sin(heightVal/1.2),255,255)
      else if(heightVal<130)fill(70 + 10*sin(heightVal),91,50)
      else if(heightVal<150)fill(80 + 10*sin(heightVal/2),91,50)
      else if(heightVal<170){
        //image(dirt,i*bw,j*bw)
        fill(59,12,67+5*sin(heightVal)-heightVal/50)
      }
      else if(heightVal<200){
        //image(dirt,i*bw,j*bw)
        fill(180,0,67+5*sin(heightVal)-heightVal/50)
      }

      else if(heightVal<500)fill(255,255,255)
      else fill(0,67,90)
      rect(i*bw,j*bw,bw,bw)
    }
  }
}
