var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
block_img_width = 30;
block_img_height = 30;
player_object = "";
block_img_object = "";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
    });
}
//console.log("true", player_update());
function new_img(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({top:player_y, left:player_x});
        canvas.add(block_img_object);
    });
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == "80"){
        console.log("shift and p have been pressed together");
        block_img_width = block_img_width+10;
        block_img_height = block_img_height+10;
        document.getElementById("currentwidth").innerHTML = block_img_width;
        document.getElementById("currentheight").innerHTML = block_img_height;
    }
    if(e.shiftKey == true && keypressed == "77"){
        console.log("shift and m have been pressed together");
        block_img_width = block_img_width-10;
        block_img_height = block_img_height-10;
        document.getElementById("currentwidth").innerHTML = block_img_width;
        document.getElementById("currentheight").innerHTML = block_img_height;
    }
    if(keypressed == "38"){
        up();
        console.log("up arrow key has been pressed");
    }
    if(keypressed == "40"){
        down();
        console.log("down arrow key has been pressed");
    }
    if(keypressed == "37"){
        left();
        console.log("left arrow key has been pressed");
    }
    if(keypressed == "39"){
        right();
        console.log("right arrow key has been pressed");
    }
    if(keypressed == "87"){
        new_img("wall.jpg");
        console.log("w has been pressed");
    }
    if(keypressed == "68"){
        new_img("dark_green.png");
        console.log("d has been pressed");
    }
    if(keypressed == "71"){
        new_img("ground.png");
        console.log("g has been pressed");
    }
    if(keypressed == "76"){
        new_img("light_green.png");
        console.log("l has been pressed");
    }
    if(keypressed == "82"){
        new_img("roof.jpg");
        console.log("r has been pressed");
    }
    if(keypressed == "84"){
        new_img("trunk.jpg");
        console.log("t has been pressed");
    }
    if(keypressed == "85"){
        new_img("unique.png");
        console.log("u has been pressed");
    }
    if(keypressed == "89"){
        new_img("yellow_wall.jpg");
        console.log("y has been pressed");
    }
    if(keypressed == "67"){
        new_img("cloud.jpg");
        console.log("c has been pressed");
    }
}
function up(){
    if(player_y > 0){
        player_y = player_y-block_img_height;
        console.log("x coordinate is equal to"+player_x+"y coordinate is equal to"+player_y);
        console.log("the current image hieght is "+block_img_height);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <= 460 ){
        player_y = player_y + block_img_height;
        console.log("the x coordinate is equal to "+player_x+"the y coordinate is equal to "+player_y);
        console.log("the current image hieght is "+block_img_height);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x > 0){
        player_x = player_x - block_img_width;
        console.log("the x coordinate is equal to "+player_x+"the y coordinate is equal to "+player_y);
        console.log("the current image width is "+ block_img_width);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <= 850){
        player_x = player_x + block_img_width;
        console.log("the x coordinate is equal to "+player_x+"the y coordinate is equal to "+player_y);
        console.log("the current image width is "+block_img_width);
        canvas.remove(player_object);
        player_update();
    }
}