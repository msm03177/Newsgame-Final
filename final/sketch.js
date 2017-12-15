wifiX=[];
wifiY=[];
var img;
var time=10;
var second=int(millis/1000);
var bg;

function setup() {
  img=loadImage("images/wifi.png");
  bg=loadImage("images/devil.jpg");
  createCanvas(600,600);
  for (var i=0;i<30;i++){
    wifiX[i]=int(random(width));
    wifiY[i]=int(random(height));
}
}

function draw() {
  var currentTime=int(millis()/1000);
  if(currentTime>time){
    imageMode(CORNER);
  background(bg); 
  }
  
  else{ 
  background(0);

fill(255);
textSize(15);
text("Collect more money to pay for your internet bill", 10, 20);
text("Want to access social media, video sites, and game servers?", 10, 40);
text("You'll need more money, thanks to the recent repeal of net neutrality.", 10, 60);


fill(0,255,0);
for (var i=0;i<wifiX.length;i++){
  ellipse(wifiX[i],wifiY[i],10,10);
  hit = collideCircleCircle(wifiX[i],wifiY[i],10,mouseX,mouseY,50);
  if (hit){
  wifiX[i]=-500;
    
  
  }
}
}


//cursor
imageMode(CENTER);
image(img,mouseX,mouseY,50,50);



}