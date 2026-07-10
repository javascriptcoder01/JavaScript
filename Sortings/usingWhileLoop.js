// Time Complexity - O(n2)
// Space Complexity - O(1)

// Sorted - Ascending Order [1,2,3,4,5,....]
function ascSorting(arr) {
    let start = 0;
    let end = arr.length;

    while (start < end) {

        for (let i = 0; i < end; i++) {

            if (arr[start] < arr[i]) {

                // Swapping
                [arr[start], arr[i]] = [arr[i], arr[start]];

            }
        }

        start++;
    }

    console.log("Sorted Array in Ascending Order: ", arr);
}


// Sorted - Descending Array [9,8,7,6,5,.....]
function descSorting(arr) {
    let start = 0;
    let end = arr.length;

    while (start < end) {

        for (let i = 0; i < end; i++) {

            if (arr[start] > arr[i]) {

                // Swapping
                let temp = arr[start];
                arr[start] = arr[i];
                arr[i] = temp;
            }
        }
        start++;
    }

    console.log("Sorted in Descending Order: ", arr);
}
let arr = [1, 9, 3, 4, 2, 8, 6, 5];
ascSorting(arr);
descSorting(arr);