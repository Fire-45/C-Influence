var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "";
var color = "";
var width = "";
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
mouseEvent = "mousedown";
color = document.getElementById("color").value;
width = document.getElementById("width").value;

}
canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e){
mouseEvent = "mouseleave";

}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e){
currentPositionOfX = e.clientX - canvas.offsetLeft;
currentPositionOfY = e.clientY - canvas.offsetTop;
if (mouseEvent == "mousedown"){
    ctx.beginPath()
    ctx.strokeStyle=color;
    ctx.lineWidth = width;
    ctx.moveTo(lastPositionX,lastPositionY);
    ctx.lineTo(currentPositionOfX,currentPositionOfY)
    ctx.stroke();


}
lastPositionX = currentPositionOfX;
lastPositionY = currentPositionOfY;
}
canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
mouseEvent = "mouseup"


}

function back(){
    window.location = "Prototype.html";
}