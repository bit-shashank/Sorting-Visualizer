class ArrayVisual {
	constructor(cntx, n, low, high, speed, algorithm) {
		this.cntx = cntx;
		this.n = n;
		this.low = low;
		this.high = high;
		this.states = new Array(n).fill(0);
		this.arr = this.generateRandomArray();
		this.colorCodes = {
			0: "grey", //Start
			1: "blue", //Comparing
			2: "red", //Swapped
			3: "green", //Sorted
		};
		this.width = W / this.n;
		this.speed = speed;
		this.sorting = false;
		this.algorithm = algorithm;
	}

	//Generates a random array
	generateRandomArray() {
		this.width = W / this.n;
		this.resetStates(true);
		var array = [];
		for (var i = 0; i < this.n; i++) {
			var n = Math.floor(this.low + Math.random() * (this.high - this.low));
			array.push(n);
		}
		return array;
	}
	/*
		Reset the array states
		@param hardReset : If set to true sorted element state is reset too
	*/
	resetStates(hardReset) {
		for (var i = 0; i < this.n; i++) {
			if (hardReset) {
				this.states[i] = 0;
			}
			if (this.states[i] != 3) {
				this.states[i] = 0;
			}
		}
	}

	sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	//Helped method to visualize the array
	async showArr() {
		await this.sleep(this.speed);
		this.cntx.fillStyle = "white";
		this.cntx.fillRect(0, 0, W, H);
		this.cntx.beginPath();
		for (var i = 0; i < this.n; i++) {
			this.cntx.fillStyle = this.colorCodes[this.states[i]];
			this.cntx.fillRect(i * this.width, 500 - this.arr[i], this.width - 2, this.arr[i]);
		}
		this.cntx.stroke();
		this.resetStates();
	}

	start() {
		//If already sorting simply return
		if (this.sorting) return;

		this.sorting = true;
		switch (this.algorithm) {
			case "bubble":
				bubbleSort(this);
				break;
			case "insertion":
				insertionSort(this);
				break;
			case "selection":
				selectionSort(this);
				break;
			case "quick":
				quickSort(this);
				break;
		}
	}
}
