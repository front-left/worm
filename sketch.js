var width;
var height;
var b = 0;

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
	
	ellipse(mouseX, mouseY, 80, 80);
}