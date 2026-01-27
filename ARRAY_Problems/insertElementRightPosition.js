
let arr = [1, 2, 3, 5, 6, 7];
let value = 4;

for (let i = arr.length - 1; i >= 0; i--) {    // 3

    if (arr[i] > value) {                   // 5 > 4 --> shift element
        arr[i + 1] = arr[i];
    } else {                            // 5 < 4  --> insert the element
        arr[i + 1] = value;
        break;                        // prevent extra inserting element
    }
}

console.log(arr);

// Using While
let i = arr.length - 1;
while (i >= 0 && arr[i] > value) {
    arr[i + 1] = arr[i];
    i--;
}

arr[i + 1] = value;

console.log(arr);