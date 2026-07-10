// Tiem Complexity - O(n2)
// Space Complexity - O(n)
function uniqueElement(arr) {
    let unique = [], index = 0, start = 0, end = arr.length;

    while (start < end) {
        let alreadyExist = false;

        for (let i = 0; i < index; i++) {
            if (unique[i] === arr[start]) {
                alreadyExist = true;
                break;
            }
        }

        if (!alreadyExist) {
            unique[index] = arr[start];
            index++;
        }

        start++;
    }

    console.log("This is your unique element: ", unique);
}

let arr = [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5, 4, 4, 4, 4];
uniqueElement(arr);

function removeDuplicateElements(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            arr[result] = arr[i];
            result++;
        }
    }
    arr.length = result;
    // console.log(arr.length);
    return arr;
}

console.log(removeDuplicateElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5] 
