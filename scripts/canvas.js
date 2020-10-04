const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Fixing the canvas width and height
var W = 800;
var H = 500;
var offset = 10;

//Setting the canvas width and height
canvas.width = W + offset;
canvas.height = H;

//Default Number of elements in the array
var N = 50;
var arrayVisual = new ArrayVisual(ctx, N, 30, 300, 250);
arrayVisual.showArr();

// Setting the event handellers on html elements
const generateRan = document.getElementById("randomArr");
const start = document.getElementById("btnSort");
const numSlider = document.getElementById("numSlider");
const speedSlider = document.getElementById("speedSlider");
const algoSelector = document.getElementById("algoSelect");

numSlider.addEventListener("input", () => {
	if (arrayVisual.sorting) return;
	var arrSize = numSlider.value;
	arrayVisual.n = arrSize;
	arrayVisual.arr = arrayVisual.generateRandomArray();
	arrayVisual.showArr();
});

speedSlider.addEventListener("change", () => {
	//setting speed from slider
	var maxSpeed = parseInt(speedSlider.max);
	var minSpeed = parseInt(speedSlider.min);
	var speed = maxSpeed - speedSlider.value + minSpeed;

	//Setting the speed of the arrayVisual
	arrayVisual.speed = speed;
});

start.addEventListener("click", () => {
	if (arrayVisual.sorting) return;

	//Setting the algorithm
	arrayVisual.algorithm = algoSelector.value;
	//Starting the visualizer

	arrayVisual.start();
});

//Generates a new random array
generateRan.addEventListener("click", () => {
	//If already sorting simply return
	if (arrayVisual.sorting) return;
	arrayVisual.arr = arrayVisual.generateRandomArray();
	arrayVisual.showArr();
});
