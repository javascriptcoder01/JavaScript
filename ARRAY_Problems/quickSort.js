// Time Complexity - 
// Space Complexity - 

function quickSort(arr, start, end) {

    if (start < end) {

        // Find index of pivot element
        let pivot = partition(arr, start, end);

        // Left half recursion
        quickSort(arr, start, pivot - 1);

        // Right half recursion
        quickSort(arr, pivot + 1, end);

        // return arr;
    }
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let idx = start - 1;

    // [5,2,4,3,1,6]
    // i = 0, arr[0] = 5 <= pivot = 6 --> true, idx = -1 --> 0 = 5
    // i = 1, arr[1] = 2 <= pivot = 6 --> true, idx = 0 --> 1 =  2
    // i = 2, arr[2] = 4 <= pivot = 6 --> true, idx = 1 --> 2 = 4
    // i = 3, arr[3] = 3 <= pivot = 6 --> true, idx = 2 --> 3 = 3
    // i = 4, arr[4] = 1 <= pivot = 6 --> true, idx = 3 --> 4 = 4
    // i = 5, arr[5] = 6 <= pivot = 6 --> true, idx = 4 --> 5 = 6
    // i = 6 --> Loop End
    // [5,2,4,3,1]
    // i = 0, arr[0] = 5 <= pivot = 1 --> false, idx = -1 
    // i = 1, arr[1] = 2 <= pivot = 1 --> false, idx = -1
    // i = 2, arr[2] = 4 <= pivot = 1 --> false, idx = -1 
    // i = 3, arr[3] = 3 <= pivot = 1 --> false, idx = -1
    // i = 4, arr[4] = 1 <= pivot = 1 --> true, idx = 0
    // [2,4,3]
    // i = 0, arr[0] = 2 <= pivot = 3 --> true, idx = -1 --> 0 
    // i = 1, arr[1] = 4 <= pivot = 3 --> true, idx = 1 
    // i = 2, arr[3] = 3 <= pivot = 3 --> true, idx = 1

    for (let i = start; i < end; i++) {
        if (arr[i] <= pivot) {
            idx++; // i = 0,1,2,3,4,5     --> using to create space in array

            [arr[idx], arr[i]] = [arr[i], arr[idx]];
            // pivot = 6         pivot = 1       pivot = 3
            // [5,5] = [5,5]    [5,5] = [5,5]    [1,1] = [1,1]
            // [2,2] = [2,2]    [2,2] = [2,2]    [2,2] = [2,2]
            // [4,4] = [4,4]    [4,4] = [4,4]    [4,3] = [3,4]
            // [3,3] = [3,3]    [3,3] = [3,3]
            // [1,1] = [1,1]    [5,1] = [1,5]
            // [6,6] = [6,6]
        }
    }

    idx++;
    [arr[idx], arr[end]] = [arr[end], arr[idx]];

    return idx;
}

let arr = [5, 2, 4, 3, 1, 6];
quickSort(arr, 0, arr.length - 1);
console.log(arr);