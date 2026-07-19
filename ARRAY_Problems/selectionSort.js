

function selectionSort(arr) {

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        let min = i;

        for (let j = i + 1; j < n; j++) {

            // Change over here below to acsending and descending Order
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        // Swapped
        // [arr[min], arr[i]] = [arr[i], arr[min]];
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

let arr = [5, 1, 4, 3, 6, 7];
console.log(selectionSort(arr));