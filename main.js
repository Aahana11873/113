function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video,0,0,640,480);
    stroke(0,148,0)
    fill(0,0,255)
    circle(50,30,40)
    circle(50,150,40)
    circle(50,300,40)
    circle(50,450,40)
    circle(300,25,40)
    circle(600,25,40)
    circle(600,150,40)
    circle(600,300,40)
    circle(600,450,40)
    
}
function take_snapshot(){
    save("DevelopedbyAahana.png");
}
