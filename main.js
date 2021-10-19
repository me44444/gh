canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";

function add(){
    background_imgTag=new Image();//defining a variable with a new image
    background_imgTag.onload=uploadBackground;//on loading the variable it calls the function "uploadbackground"
    background_imgTag.src=background_image;//load the image
    rover_imgTag=new Image();//defining a variable with a new image
    rover_imgTag.onload=uploadrover;//on loading the variable it calls the function uploadbackground
    rover_imgTag.src=rover_image;//load the image
}
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
    }
    window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=="38"){
    up();//this is a function call, we are calling the up function
    console.log("up");
}
if(keypressed=="40"){
    down();
    console.log("down");
}
if(keypressed=="37"){
    left();
    console.log("left");
}
if(keypressed=="39"){
    right();
    console.log("right");
}


}
function up(){
if(rover_y>=0){
rover_y=rover_y-10;
uploadBackground();
uploadrover();
}}

function down(){
    if(rover_y<=500){
    rover_y=rover_y+10;
    uploadBackground();
    uploadrover();
    }}

    function left(){
        if(rover_x>=0){
        rover_x=rover_x-10;
        uploadBackground();
        uploadrover();
        }}

        function right(){
            if(rover_x<=700){
            rover_x=rover_x+10;
            uploadBackground();
            uploadrover();
            }}
        











































