function rotateLeft(arr, k) {
    let n = arr.length;
    k = k % n;

    // Reverse- Whole Array
    reverse(arr, 0, n - 1);

    // Reverse - k element
    reverse(arr, 0, k - 1);

    // Reverse - Remaining element
    reverse(arr, k, n - 1);

    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

let arr = [1, 2, 3, 4, 5];
const result = rotateLeft(arr, 3);
console.log(result);


function leftRotation(arr, position) {
    let l = arr.length;

    position = position % l; // In case position is greater than array length

    for (let i = 0; i < position; i++) {
        let firstElement = arr[0];

        for (let j = 0; j < l - 1; j++) {
            arr[j] = arr[j + 1]; // make 2nd element for just first element
        }

        arr[l - 1] = firstElement; // make first for last element
    }
    return arr;
}

console.log(leftRotation([1, 2, 3, 4, 5], 2)); // [3,4,5,1,2]