// Time Complexity - O(n)
// Space Complexity - O(n)

function flattenArray(arr) {
    let result = [];

    // Traverse the original Array
    for (let i = 0; i < arr.length; i++) {

        // Check if it an nested Array
        if (Array.isArray(arr[i])) {

            // Call recursively
            let flat = flattenArray(arr[i]);

            // Traverse Flat Array 
            for (let j = 0; j < flat.length; j++) {
                result.push(flat[j]);
            }
        } else {
            result.push(arr[i]); // Push the same element
        }
    }

    return result;
}

let arr = [1, 2, [3, 4, [5], [6], [7]], [8]];
console.log(flattenArray(arr));