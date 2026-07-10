
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

console.log(rightRotation([1, 2, 3, 4, 5], 2)); // [4,5,1,2,3]