var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.querySelector("body");
var rbutton = document.querySelector(".randButton");

function randomColor(){
	r1 = Math.random() * 255;
	r2 = Math.random() * 255;
	g1 = Math.random() * 255;
	g2 = Math.random() * 255;
	b1 = Math.random() * 255;
	b2 = Math.random() * 255;
	body.style.background = 'linear-gradient(to right, rgb('+ r1+', '+ g1+', '+b1+'), rgb('+ r2+', '+g2+', '+b2+')';
}

function init(){
	changeBackgroundGradient();
	updateColorInfo();
}

function updateColorInfo(){
	h3.textContent = body.style.background;	
}

function changeBackgroundGradient(){
	body.style.background = 'linear-gradient(to right, '+ c1.value+', '+ c2.value+')';
}

init();
c1.addEventListener("input", function(){
	changeBackgroundGradient();
	updateColorInfo();
});

c2.addEventListener("input", function(){
	changeBackgroundGradient();
	updateColorInfo();
});

rbutton.addEventListener("click",function(){
	randomColor();
	updateColorInfo();
});