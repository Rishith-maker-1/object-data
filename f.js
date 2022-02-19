img="";
Status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function preload(){
    img=loadImage('https://imgcdn.floweraura.com/fruitilicious-basket-9932240co.jpg');
}
function draw(){
    image(img,0,0,640,420);
}
function modelloaded(){
    console.log("Model Loaded");
    Status=true;
    objectDetector.detect(img,gotresults);
}
function gotresults(error,results){
     if(error){
         console.error(error);
     }else{
         console.log(results);
     }
}
function back(){
    window.location="index.html";
}