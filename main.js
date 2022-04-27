function preload(){
}
function setup(){
   canvas=createCanvas(540,500);
   canvas.position(110, 250);
   video=createCapture(VIDEO);
   video.hide();
   tint_color="";
}
function draw(){
 image(video, 0, 0, 540, 500);
 tint(tint_color);
}
function filter_color(){
    tint_color=document.getElementById("input_color").value;
}
function take_snapshot(){
    save('Filter_Applied_Photo.png');
}