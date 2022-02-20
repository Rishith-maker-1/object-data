img="";
Status="";
objects=[];
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
    if(Status!=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status=Objects Detected";
            fill("Red");
            percent=floor(objects[i].cofidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("blue");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
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
         objects=results;
     }
}
function back(){
    window.location="index.html";
}