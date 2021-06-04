const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

if (backgroundImg ){
    background (backgroundImg)
} 

    Engine.update(engine);

    // write code to display time in correct format here
 if (hour >= 12 ){
     text ("Time:"+hour%12+"pm",200,200)
 } else if (hour == 0){
     text ("Time:12am",200,200)
 } else {
     text ("Time:"+hour%12+"am",200,200)
 }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var t1 = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
     var t1json = await t1.json()
    // write code slice the datetime
    var datetime =t1json.datetime;
    var hour = datetime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
if (hour <= 0400 && hour>=0600 ){
    bg = "sunrise1.png"
} else if (hour <= 0600 && hour>= 0800){
    bg = "sunrise2.png"
} else if (hour <= 23 && hour >= 0000){
    bg = "sunset10.png"
}else if (hour <= 00 && hour >= 0300){
    bg = "sunset11.png"
} else {
    bg = "sunset12.png"
}
    //load the image in backgroundImg variable here
backgroundImg = loadImage (bg)
}
