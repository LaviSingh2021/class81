var last_position_x; 
var last_position_y;
var current_position_x;
var current_position_y;
var mouseevent="empty";


canvas= document.getElementById("myCanvas") ;
ctx=canvas.getContext("2d");

color ="violet" ;
width = 2;

canvas.addEventListener("mousedown" , my_mousedown) ;

function my_mousedown(e) {
    //taking color from input box
    //additional activity start
    color = document.getElementById("color").value;
    console.log(color);

    width= document.getElementById("line-width").value;
    console.log(width);

    mouseevent="mouseDown";
   
}

canvas.addEventListener("mouseup" , my_mouseup) ;
function my_mouseup(e) {
    //taking color from input box
    //additional activity start
    
    mouseevent="mouseUp";
   
}

canvas.addEventListener("mouseleave" , my_mouseleave) ;
function my_mouseleave(e) {
    //taking color from input box
    //additional activity start
    
    mouseevent="mouseleave";
   
}

canvas.addEventListener("mousemove" , my_mousemove) ;
function my_mousemove(e) {
    //taking color from input box
    //additional activity start
    current_position_x=e.clientX - canvas.offsetLeft;
    current_position_y=e.clientY - canvas.offsetTop;

   if(mouseevent="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(current_position_x,current_position_y);
    ctx.stroke();
    console.log("Last position x =" + last_position_x );
    console.log("Last position y =" + last_position_y );
    console.log("Current position x =" + current_position_x );
    console.log("Current position y =" + current_position_y );
   }
        
   last_position_x = current_position_x;
   last_position_y = current_position_y;

}



function clearArea() {
    ctx.clearRect(0, 0 , canvas.width , canvas.height);

}