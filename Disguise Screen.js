// creates the div for the canvas
const canvasContainer = document.createElement('div');
	canvasContainer.id = 'container';
	canvasContainer.style.left = "0px";
	canvasContainer.style.top = "0px";
	canvasContainer.style.position = "absolute";
//console.log("1")
//makes the place where the canvas will be, and styles it.
var x = document.createElement("CANVAS");
	x.style.top = "0px"
	x.style.left = "0px"
	x.style.position = "absolute";
	x.id = 'canvas';
	x.width = window.innerWidth + 100;
	x.height = window.innerHeight + 100; //uh theres prob a better way to do this then to add another x but in the end it really doesn't matter
	canvasContainer.appendChild(x);

var ctx = x.getContext("2d");
	ctx.font = "25px Times New Roman";

//button to start the thingy
const start = document.createElement('button');
	start.innerText = "start";
	start.style.left = "0px";
	start.style.top = "1000px";
	canvasContainer.appendChild(start)
start.addEventListener('click', () => {
	if (animationPlaying == false) {
		startAnimation();
		console.log("good day init?")
	}
	else {
		stopAnimation();
		console.log("Fok u too")
	}
})
	
/*button to stop the clear the screen.*/
const clear = document.createElement('button')
	clear.innerText = "clear";
	clear.style.left = "40px";
	clear.style.top = "0px";
	canvasContainer.appendChild(clear);
clear.addEventListener('click', () => {
	ctx.clearRect(0, 0, x.width, x.height);
})
	
// /*button to remove the canvas.*/
// const removeCanvas = document.createElement('button');
	// removeCanvas.innerText = "remove canvas";
	// removeCanvas.style.left = "80px";
	// removeCanvas.style.top = "0px";
	// canvasContainer.appendChild(removeCanvas);
// removeCanvas.addEventListener('click', () => {
	// document.getElementById("canvas").remove();
// })
	// 
// /*button to stop the clear the screen.*/
// const addCanvasButton = document.createElement('button');
	// addCanvasButton.innerText = "add canvas";
	// addCanvasButton.style.left = "80px";
	// addCanvasButton.style.top = "0px";
	// canvasContainer.appendChild(addCanvasButton);
// 
// addCanvasButton.addEventListener('click', () => {
	// document.body.appendChild(x);
	// x.style.left = "0px";
	// x.style.top = "0px";
// })

var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = 'image/png';
	link.rel = 'shortcut icon';
	link.href = 'https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico';
	document.getElementsByTagName('head')[0].appendChild(link); //changes favicon :)

var animationPlaying = false //duh
function startAnimation() {
	//console.log("3")
	animationPlaying = true
	canvasContainer.appendChild(x);
	driveImage = new Image();
	driveImage.src = 'https://media.discordapp.net/attachments/893932233298165790/1154612932013989951/image.png'; //replace with your own image if your desktop is set up differently
	xW = x.width
	xH = x.height
	driveImage.onload = ctx.drawImage(driveImage, 0, 0, xW, xH)
	if (document.title != "My Drive - Google Drive") {
		document.title = "My Drive - Google Drive";
		window.history.pushState('drive', 'drive', '/drive/u/0/my-drive');
	}
	//console.log("4")
}
function stopAnimation() {
	animationPlaying = false
	document.getElementById("canvas").remove();
}
document.body.appendChild(canvasContainer);
startAnimation();
//console.log("2")

