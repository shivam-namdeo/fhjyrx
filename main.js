var canvas=new fabric.Canvas('myCanvas');
<canvas width='1100' heigtk='500' id='myCanvas'></canvas>
// Create canvas variable
ball_x=0;
ball_y=0;
hole_y=400;
hole_x=800

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	
fabric.Image.fromURL("golf-h.png",function(Img){
hole_obj=Img; 
hole_obj.scaleToWidth(50);
hole_obj= scaleToHeigth(50);
hole_obj= set({
	top:hole_y,
	left:hole_x
});
canvas.add(hole_obj);
});
	new_image();
}

function new_image(){

	fabric.Image.fromURL("ball.png",function(Img){
		hole_obj=Img; 
		hole_obj.scaleToWidth(50);
		hole_obj= scaleToHeigth(50);
		hole_obj= set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
		});
			new_image();
		
	new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)

	keyPressed = e.keyCode;
	console.log(keyPressed);
if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball.obj);
	document.getElementById('hd3').innerHTML="you have hit the goal!!!";
	document.getElementById('myCanvas').style.borderColor="red";
}
	
	else{
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
			ball_y=ball_y+bolck_image_heigth;
			console.log("bolck image heigth="+bolck_image_heigth);
			console.log("when dwon arrow key is pressed,X="+ball_x+"Y ="+ball_y);
			canvas.remove(ball_obj);
			new_image();

	}

	function down()
	{
		if(ball_y<=450)
		{
			ball_y=ball_y+bolck_image_heigth;
			console.log("bolck image heigth="+bolck_image_heigth);
			console.log("when dwon arrow key is pressed,X="+ball_x+"Y ="+ball_y);
			canvas.remove(ball_obj);
			new_image();

		}
	}

	function left()
	{
		if(ball_x >5)
		
		{
			ball_y=ball_y+bolck_image_heigth;
			console.log("bolck image heigth="+bolck_image_heigth);
			console.log("when dwon arrow key is pressed,X="+ball_x+"Y ="+ball_y);
			canvas.remove(ball_obj);
			new_image();

		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			
		{
			ball_y=ball_y+bolck_image_heigth;
			console.log("bolck image heigth="+bolck_image_heigth);
			console.log("when dwon arrow key is pressed,X="+ball_x+"Y ="+ball_y);
			canvas.remove(ball_obj);
			new_image();

		}
	}
	
}

