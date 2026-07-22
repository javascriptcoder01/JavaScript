// Time Complexity - O(n log n)
// Space Complexity - O(n) - O(log n)

function mergeSort(arr, start, end) {
    // Base Condition
    if (start >= end) return;

    // Find mid value
    let mid = Math.floor((start + end) / 2);

    // call for left half array
    mergeSort(arr, start, mid);

    // Call for right half array
    mergeSort(arr, mid + 1, end);

    // Merge Array bottom to top
    merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
    let temp = [], index = 0;
    // need two pointers
    let i = start;
    let j = mid + 1;

    // Compare the Left and right array element and change for Ascending and descending order
    while (i <= mid && j <= end) {
        if (arr[i] >= arr[j]) {
            temp[index] = arr[i];
            i++;
        } else {
            temp[index] = arr[j];
            j++;
        }
        index++;
    }

    // Push the remaining element left Half 
    while (i <= mid) {
        temp[index++] = arr[i++];
    }

    // Push the remaining element right half
    while (j <= end) {
        temp[index++] = arr[j++];
    }

    // Copy temp array into an original array
    for (let x = 0; x < index; x++) {
        arr[start + x] = temp[x];
    }
}

let arr = [5, 1, 4, 3, 2, 6];
console.log(mergeSort(arr, 0, arr.length - 1));
console.log(arr);