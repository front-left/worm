var width;
var height;
var b = 0;
var curX = window.innerWidth/2;
var curY = window.innerHeight/2;
var sx = 0;
var sy = Math.PI/2;
var circles = [];
var alt = 0;

function setup(){
	
	width = window.innerWidth;
	height = window.innerHeight;
	createCanvas(width, height);
	
}

function draw(){
	// background('#0f0f0f');
	if (alt == 4){
		alt = 0;
		b = 1-b;
		fill(255*b);
		noStroke();
		var colour;
		if (b){
			colour = '#828282';
		} else {
			colour = '#1eff00';
		}
		fill(colour);
		sx += 0.05;
		sy += 0.05;
		var dx = mouseX - curX;
		var dy = mouseY - curY;
		curX += (dx)/30 + sin(sx*1.2);
		curY += (dy)/30 + sin(sy*0.7);
		var d = Math.sqrt(Math.pow(dx,2), Math.pow(dy,2));
		// ellipse(curX, curY, 80, 80);
		circles.push({
				x: curX,
				y: curY,
				r: 4,
				colour: colour
		});
	}
	alt++;
	clear();
	for (var i = 0; i < circles.length; i++){
		
		// circles[i].r += 7;
		if (circles[i].r < 100){
			circles[i].r += 3;
		}
		
		fill(circles[i].colour)
		ellipse(circles[i].x, circles[i].y, circles[i].r , circles[i].r );
	}
}