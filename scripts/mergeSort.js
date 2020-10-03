async function merge(arr, low, mid, high, arrayVisual) {
	var n1 = mid - low + 1;
	var n2 = high - mid;
	var L = [],
		R = [];

	for (var i = 0; i < n1; i++) {
		L[i] = arr[low + i];
	}

	for (var i = 0; i < n2; i++) {
		R[i] = arr[mid + 1 + i];
	}

	/* Merge the temp arrays back into arr[l..r]*/
	var i = 0;
	var j = 0;
	var k = low;
	while (i < n1 && j < n2) {
		//Comparision is between L[i] and R[j]
		arrayVisual.states[low + i] = 1;
		arrayVisual.states[mid + 1 + j] = 1;
		await arrayVisual.showArr();
		if (L[i] <= R[j]) {
			//Swapping is done between arr[k] and L[i]
			arrayVisual.states[k] = 2;
			arrayVisual.states[low + i] = 2;
			await arrayVisual.showArr();
			arr[k] = L[i];
			i++;
		} else {
			//Swapping is done between arr[k] and R[j]
			arrayVisual.states[k] = 2;
			arrayVisual.states[mid + 1 + j] = 2;
			await arrayVisual.showArr();

			arr[k] = R[j];
			j++;
		}
		k++;
	}

	/* Copy the remaining elements of L[], if there 
       are any */
	while (i < n1) {
		arr[k] = L[i];
		i++;
		k++;
	}

	/* Copy the remaining elements of R[], if there 
       are any */
	while (j < n2) {
		arr[k] = R[j];
		j++;
		k++;
	}
	// Now arr[low....high] is sorted
	for (var i = low; i <= high; i++) {
		arrayVisual.states[i] = 3;
	}
	await arrayVisual.showArr();
}

async function mergeSortUtil(arr, low, high, arrayVisual) {
	if (low < high) {
		var m = Math.floor((low + high) / 2);
		await mergeSortUtil(arr, low, m, arrayVisual);
		await mergeSortUtil(arr, m + 1, high, arrayVisual);
		await merge(arr, low, m, high, arrayVisual);
	}
}
async function mergeSort(arrayVisual) {
	var arr = arrayVisual.arr;
	await mergeSortUtil(arr, 0, arr.length - 1, arrayVisual);
	arrayVisual.sorting = false;
}
