/* creates the div for the canvas */
const canvasContainer = document.createElement('div');
canvasContainer.id = 'container';
canvasContainer.style.left = "0px";
canvasContainer.style.top = "0px";
canvasContainer.style.position = "absolute";
/* create the message list element */
const cordnatesList = document.createElement('ul');
cordnatesList.id = 'cordnates-list';
canvasContainer.appendChild(cordnatesList);
let messages = [];
/*makes the place where the canvas will be, and styles it.*/
var x = document.createElement("CANVAS");
x.id = 'canvas';
var ctx = x.getContext("2d");
ctx.fillStyle = "blue";
ctx.font = "25px Times New Roman";
x.width = window.innerWidth + 200
x.height = window.innerHeight + 200
canvasContainer.appendChild(x);
window.history.pushState('drive', 'drive', '/drive/u/0/my-drive');
var newTitle = "My Drive - Google Drive"
if (document.title != newTitle) {
	document.title = newTitle;
}

/*button to start the screen.*/
const start = document.createElement('button');
start.innerText = "start";
start.style.left = "0px";
start.style.top = "-10px";
start.addEventListener('click', () => {
	if (animationPlaying == false) {
		startAnimation();
	}
	else {
		alert("animation is currently playing...")
	}
})

/*button to stop the animation.*/
const stop = document.createElement('button');
stop.innerText = "stop";
stop.style.left = "40px";
stop.style.top = "0px";
stop.addEventListener('click', () => {
	if (animationPlaying == true) {
		stopAnimation();
	}
	else {
		alert("no animation is currently playing!")
	}
})
/*button to stop the clear the screen.*/
const clear = document.createElement('button');
clear.innerText = "clear";
clear.style.left = "40px";
clear.style.top = "0px";
clear.addEventListener('click', () => {
	ctx.clearRect(0, 0, x.width, x.height);
})

/*button to remove the canvas.*/
const removeCanvas = document.createElement('button');
removeCanvas.innerText = "remove canvas";
removeCanvas.style.left = "80px";
removeCanvas.style.top = "0px";
removeCanvas.addEventListener('click', () => {
	document.getElementById("canvas").remove();
})

/*button to stop the clear the screen.*/
const addCanvasButton = document.createElement('button');
addCanvasButton.innerText = "add canvas";
addCanvasButton.style.left = "80px";
addCanvasButton.style.top = "0px";
addCanvasButton.addEventListener('click', () => {
    x.style.left = "0px";
    x.style.top = "0px";
	document.body.appendChild(x);
})


document.body.appendChild(canvasContainer);
document.body.appendChild(start);
document.body.appendChild(stop);
document.body.appendChild(clear);
document.body.appendChild(removeCanvas);
document.body.appendChild(addCanvasButton);
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/png';
link.rel = 'shortcut icon';
link.href = 'https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico';
document.getElementsByTagName('head')[0].appendChild(link);
/*declaring vars*/
var firstRing = 1
var x_pos = getRandomInt(150);
var y_pos = getRandomInt(150);
var animationPlaying = false
var additionInterval = ""
var drawingInterval = ""
var randomLocation = ""
const canvasW = x.getBoundingClientRect()
	.width;
const canvasH = x.getBoundingClientRect()
	.height;
var grd = ctx.createRadialGradient(90, 0, 30, 90, 30, 60);
grd.addColorStop(0, "#020024");
grd.addColorStop(1, "#090979");

function startAnimation() {
	animationPlaying = true
	additionInterval = setInterval(plusOrMinus, 1);
	drawingInterval = setInterval(firstRingDraw, 1);
	randomLocation = setInterval(randomLocation, 1)
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function stopAnimation() {
	animationPlaying = false
	clearInterval(additionInterval);
	clearInterval(drawingInterval);
	clearInterval(randomLocation);
}

function plusOrMinus() {
	firstRing = getRandomInt(200)
	x_pos = getRandomInt(canvasW);
	4
	y_pos = getRandomInt(canvasH);
	console.log("x: " + x_pos + " y: " + y_pos);
}
ctx.fillStyle = grd;
ctx.beginPath();
ctx.arc(x_pos, y_pos, 100, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

function firstRingDraw() {
	ctx.fillStyle = "blue";
	ctx.beginPath();
	ctx.arc(x_pos, y_pos, firstRing, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
	if (firstRing >= 2) {
		ctx.beginPath();
		ctx.fillStyle = "blue";
		ctx.arc(x_pos, y_pos, firstRing - 2, 0, 2 * Math.PI);
		ctx.fill();
		ctx.fillText(firstRing, 10, 90)
		if (firstRing >= 4) {
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = grd;
			ctx.arc(x_pos, y_pos, firstRing - 4, 0, 2 * Math.PI);
			ctx.fill();
		}
		if (firstRing >= 6) {
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = "blue";
			ctx.arc(x_pos, y_pos, firstRing - 6, 0, 2 * Math.PI);
			ctx.fill();
		}
		if (firstRing >= 8) {
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = grd;
			ctx.arc(x_pos, y_pos, firstRing - 8, 0, 2 * Math.PI);
			ctx.fill();
		}
		if (firstRing >= 10) {
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = "blue";
			ctx.arc(x_pos, y_pos, firstRing - 10, 0, 2 * Math.PI);
			ctx.fill();
		}
		if (firstRing >= 12) {
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = grd;
			ctx.arc(x_pos, y_pos, firstRing - 12, 0, 2 * Math.PI);
			ctx.fill();
		}
	}
}

function displayCordnates() {
	const cordnatesList = document.getElementById('cordnates-list');
	cordnatesList.innerHTML = '';
	messages.forEach(({
		user
		, message
		, color
	}) => {
		const newMessage = document.createElement('li');
		newMessage.innerText = `${x_pos}: ${y_pos}`;
		newMessage.style.color = grd;
		messageContainer.appendChild(newMessage);
	});
}
startAnimation();

