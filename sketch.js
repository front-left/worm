var width;
var height;
var b = 0;
var curX = window.innerWidth/2;
var curY = window.innerHeight/2;
var sx = 0;
var sy = Math.PI/2;

function setup(){
	
	width = window.innerWidth;
	height = window.innerHeight;
	createCanvas(width, height);
	
}

function draw(){
	// background('#0f0f0f');
	
	b = 1-b;
	fill(255*b);
	noStroke();
	if (b){
		fill('#828282');
	} else {
		fill('#1eff00');
	}
	sx += 0.05;
	sy += 0.05;
	curX += (mouseX - curX)/40 + sin(sx)*2;
	curY += (mouseY - curY)/40 + sin(sy)*2;
	ellipse(curX, curY, 80, 80);
}