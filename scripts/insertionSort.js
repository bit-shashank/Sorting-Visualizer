async function insertionSort(arrayVisual) {
	var arr = arrayVisual.arr;
	this.states = arrayVisual.states;
	this.states[0] = 3;
	for (var i = 1; i < arr.length; i++) {
		var key = arr[i];
		var j = i - 1;
		while (j >= 0 && arr[j] > key) {
			//Comparision is done between arr[j] and arr[i]
			states[j] = 1;
			states[i] = 1;
			await arrayVisual.showArr();

			//Swapping is done between arr[j+1] and arr[j]
			states[j + 1] = 2;
			states[j] = 2;
			await arrayVisual.showArr();
			arr[j + 1] = arr[j];
			j = j - 1;

			//INitial i-1 elements are sorted
			for (var k = 0; k <= i; k++) {
				arrayVisual.states[k] = 3;
			}
			await arrayVisual.showArr();
		}
		arr[j + 1] = key;
	}

	arrayVisual.sorting = false;
}
