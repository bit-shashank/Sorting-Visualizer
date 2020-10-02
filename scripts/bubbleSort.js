async function bubbleSort(arrayVisual) {
	var arr = arrayVisual.arr;
	var states = arrayVisual.states;

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			//We are comparing set state to 1
			states[j] = 1;
			states[j + 1] = 1;
			await arrayVisual.showArr();
			if (arr[j] > arr[j + 1]) {
				//Swapping set state to 2
				states[j] = 2;
				states[j + 1] = 2;
				await arrayVisual.showArr();
				var t = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = t;
			}
		}

		// position i will be sorted set it to green
		states[arr.length - 1 - i] = 3;
		await arrayVisual.showArr();
	}

	arrayVisual.sorting = false;
}
