// Find Any Lowest Element In An Array 
// Time Complexity: O(n * k)
// Space Complexity: O(1)

function findAnyLowestElement(arr, position) {
    let lowest;

    for (let i = 1; i <= position; i++) {
        lowest = Infinity;
        // Find current lowest number
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < lowest) lowest = arr[j];
        }

        // Remove that lowest number found in current iteration
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] === lowest) {
                arr[k] = Infinity;
                break;
            }
        }
    }
    return lowest;
}

console.log(findAnyLowestElement([12, 4, 13, 6, 10, 14], 3));