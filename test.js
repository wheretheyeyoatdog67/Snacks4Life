function setup(){
  createCanvas(800,800)
  background(0)
  colorMode(HSB)
  sliderp = createSlider(0, 10, 1);
  sliderp.position(10, 10);
  sliderp.style('width', '150px');
  sliderv = createSlider(0, 5, 1,.1);
  sliderv.position(10, 20);
  sliderv.style('width', '150px');
  slidert = createSlider(0, 500, 50);
  slidert.position(10, 30);
  slidert.style('width', '150px');
}

function draw(){
  let pressure = sliderp.value();
  let volume= sliderv.value()+.001;
  let temperature= slidert.value();
  //background(pressure,255,255)
  let p = (1)*(0.08206)*(temperature+273)/volume;
  console.log(p)
  background(255-p*5,255,255)
  text("Pressure: ",10,20)
  text(p,80,20)
  text("Temp: ",10,40)
  text(temperature,80,40)
  text("Vol: ",10,60)
  text(volume,80,60)




  push();
  translate(width/2,height/2)
  fill(0,255,255)
  rect(100*-volume/2,100*-volume/2,100*volume,100*volume)
  pop();
}
