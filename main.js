var canvas=document.getElementById("canvas")
var move=canvas.getContext("2d")
var alto=90
var ancho=65
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var px=130
var py=90
function add() {
bg=new Image()
bg.onload=cargarfondo
bg.src=background_image
c=new Image()
c.onload=cargarcarro
c.src=greencar_image
}

function cargarfondo() {
move.drawImage(bg,0,0,canvas.width,canvas.height)
}

function cargarcarro() {
move.drawImage(c,px,py,ancho,alto)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(py>=0){py=py-10
cargarfondo()
cargarcarro()
}
}

function down()
{
	if(py<=600){py=py+10
		cargarfondo()
		cargarcarro()}
	}
function left()
{
	if(px>=0){px=px-10
		cargarfondo()
		cargarcarro()}
	}

function right()
{
	if(px<=600){px=px+10
		cargarfondo()
		cargarcarro()}
}
