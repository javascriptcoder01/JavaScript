function rightRotate(arr, k) {
    let n = arr.length;

    k = k % n;

    
    reverse(arr, 0, n - 1); // Reverse - Whole Array   
    reverse(arr, 0, k - 1); // Reverse - k element  
    reverse(arr, k, n - 1); // Reverse - Remeaining Element

    return arr;
}

let arr = [1, 2, 3, 4, 5];
let result = rightRotate(arr, 2);
console.log(result);

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rightRotation(arr, position) {
    let l = arr.length;

    position = position % l;  // In case position is greater than array length

    for (let i = 0; i < position; i++) {

        let lastElelement = arr[l - 1];  // Pick last element

        for (let j = l - 1; j > 0; j--) {

            arr[j] = arr[j - 1];  // Make last just --> previous element
        }

        arr[0] = lastElelement;  // Now shift last element into first element
    }

    return arr;
}

console.log(rightRotation([1, 2, 3, 4, 5], 3)); // [4,5,1,2,3]