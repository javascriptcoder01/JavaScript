// Time Complexity = O(n2)
// Space Complexity = O(1)

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                // Swapping
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

let arr = [5, 1, 4, 3, 6, 7];
console.log(bubbleSort(arr));