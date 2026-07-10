// Time Complexity - O(n3)
// Space Complexity - O(n)

function findDuplicate(arr) {
    let duplicate = [], index = 0, start = 0, end = arr.length;

    while (start < end) {
        let alreadyExist = false;

        for (let i = start + 1; i < end; i++) {

            if (arr[start] === arr[i]) {

                // Push Element in duplicate Array
                for (let j = 0; j < index; j++) {

                    if (duplicate[j] === arr[start]) {
                        alreadyExist = true;
                        break;
                    }
                }

                if (!alreadyExist) {
                    duplicate[index] = arr[start];
                    index++;
                }
            }
        }
        start++;
    }
    console.log(duplicate);
}


let arr = [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5, 6, 4, 4, 5, 5];
findDuplicate(arr);