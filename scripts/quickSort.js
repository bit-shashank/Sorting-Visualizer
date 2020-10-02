async function partition(arr, low, high, arrayVisual) {
	var pivot = arr[high];
	var i = low - 1;
	for (var j = low; j <= high - 1; j++) {
		// If current element is smaller than the pivot
		//Comparing
		arrayVisual.states[j] = 1;
		arrayVisual.states[high] = 1;
		await arrayVisual.showArr();
		if (arr[j] < pivot) {
			i++; // increment index of smaller element
			//Swapping arr[i] and arr[j]
			arrayVisual.states[i] = 2;
			arrayVisual.states[j] = 2;
			await arrayVisual.showArr();
			var t = arr[i];
			arr[i] = arr[j];
			arr[j] = t;
		}
	}
	//swap arr[i+1] and arr[high]
	arrayVisual.states[i + 1] = 2;
	arrayVisual.states[high] = 2;
	await arrayVisual.showArr();
	var t = arr[i + 1];
	arr[i + 1] = arr[high];
	arr[high] = t;

	//Correct postion
	arrayVisual.states[i + 1] = 3;
	await arrayVisual.showArr();
	return i + 1;
}

async function quickSortUtil(arr, low, high, arrayVisual) {
	if (low < high) {
		var pi = await partition(arr, low, high, arrayVisual);
		await quickSortUtil(arr, low, pi - 1, arrayVisual);
		await quickSortUtil(arr, pi + 1, high, arrayVisual);
	}
}

async function quickSort(arrayVisual) {
	var arr = arrayVisual.arr;
	await quickSortUtil(arr, 0, arr.length - 1, arrayVisual);
	arrayVisual.sorting = false;
	console.log(arrayVisual.arr);
}
