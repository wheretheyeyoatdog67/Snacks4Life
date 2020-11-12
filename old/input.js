function movement(){

if(counter%p.speed==0 ){
    if (keyIsDown(65)) {

        if(fg[xinc-1+ofX][yinc+ofY] == 0&& xinc > 12){

          cloudTimerY-=0.02;
          xinc-=1;
          p.x -=1;
          p.frame = 2;
      }
    }
    if (keyIsDown(68)) {
    if(fg[xinc+1+ofX][yinc+ofY] == 0 ){
        cloudTimerY+=0.02;
          xinc+=1;
          p.x+=1;
          p.frame = 3;
        }
    }
    if (keyIsDown(87)) {
    if(fg[xinc+ofX][yinc-1+ofY] == 0 && yinc > 2){
        cloudTimerX-=0.02;
          yinc-=1;
          p.y-=1;
          p.frame = 4;
        }
    }
    if (keyIsDown(83)) {
    if(fg[xinc+ofX][yinc+1+ofY] == 0){
      cloudTimerX+=0.02;
          yinc+=1;
          p.y+=1;
          p.frame = 1;
        }
    }

  }
}
function mouseClicked() {
  if(spell == 1)
  projArr.push(new Proj1());
  else if(spell == 2) projArr.push(new Proj2());
  else if(spell == 3) projArr.push(new Proj3());
  else if(spell == 4){
  p.blockBreak(mouseX,mouseY);
  projArr.push(new Proj4());
}
else if(spell == 5){

  projArr.push(new Proj5());
}
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

  }
  else if (keyCode === RIGHT_ARROW) {

  }
  else if (keyCode === DOWN_ARROW) {
  bw+=2;

  }
  else if (keyCode === UP_ARROW) {
  bw-=2;

  }
  else if (keyCode === 65) {
  //yinc-=0.1;
  }
  else if (keyCode === 68) {
  //yinc+=0.1;
  }
  else if (keyCode === 87) {
  //xinc-=0.1;
  }
  else if (keyCode === 83) {
  //xinc+=0.1;

  }
  else if (keyCode === 81) {
  //xinc+=0.1;
  if(devMode == false)devMode = true;
  else devMode = false;
  }
  else if (keyCode === 49) {
    spell = 1;

  }
  else if (keyCode === 50) {
    spell = 2;

  }
  else if (keyCode === 51) {
    spell = 3;

  }
  else if (keyCode === 52) {
    spell = 4;

  }
  else if (keyCode === 53) {
    spell = 5;

  }
}
