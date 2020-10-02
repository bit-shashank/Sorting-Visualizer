async function selectionSort(arrayVisual) {
	var arr = arrayVisual.arr;
	var states = arrayVisual.states;

	for (var i = 0; i < arr.length; i++) {
		var min_idx = i;
		for (var j = i + 1; j < arr.length; j++) {
			//We are comparing set state to 1
			states[j] = 1;
			states[min_idx] = 1;
			await arrayVisual.showArr();
			if (arr[j] < arr[min_idx]) {
				min_idx = j;
			}
		}

		//Swapping set the states to 2
		states[min_idx] = 2;
		states[i] = 2;
		await arrayVisual.showArr();
		var temp = arr[min_idx];
		arr[min_idx] = arr[i];
		arr[i] = temp;

		// position i will be sorted set it to green
		states[i] = 3;
		await arrayVisual.showArr();
	}
	arrayVisual.sorting = false;
}
