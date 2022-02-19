img="";
Status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function preload(){
    img=loadImage('https://rukminim1.flixcart.com/image/416/416/kc29n680/bottle/x/s/n/1000-exclusive-water-bottles-for-fridge-school-college-office-original-imafta2gpxt7zjhr.jpeg?q=70');
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