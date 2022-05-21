canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
rover_image = "rover.png";

function add(){
background_imgtag = new Image();
background_imgtag.onload = uploadBackground;
background_imgtag.src = background_image;

rover_imgtag = new Image();
rover_imgtag.onload = uploadRover;
rover_imgtag.src = rover_image;
}

function uploadBackground(){
ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", key_down);
function key_down(e){
keypressed = e.keyCode;
console.log(keypressed);

if(keypressed == "38")
{
up();
console.log("up");    
}

if(keypressed == "40")
{
down();
console.log("down");
}

if(keypressed == "37")
{
left();
console.log("left");
}

if(keypressed == "39")
{
right();
console.log("right");
}
}