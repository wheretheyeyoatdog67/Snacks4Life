class Inv{
  constructor(){


  }
  draw(){
    push();
    rect(-40,h+35,w+100,140)
    translate(w/4,h+40)
    fill(120,90,50)
    stroke(90,70,0)
    strokeWeight(10)
    for(let i = 0;i<10;i++){

    rect(100*i,0,100,100)}

    fill(255,0,0)
    noStroke();
    arc(1050, 45, 100, 100, PI-counter/100, counter/100,CHORD);
    noFill()
    stroke(90,70,0)
    ellipse(1050,45,100,100)
    pop();
  }
}
