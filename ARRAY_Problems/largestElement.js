// 1st 
function largest(arr) {
    let n = arr.length;
    let largest = -Infinity;
    for (let i = 0; i < n; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// 2nd Largest 
function secondLargest(arr) {
    let n = arr.length, second = -Infinity, first = -Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && second !== first) {
            second = arr[i];
        }
    }
    return second;
}

// 3rd Largest
function thirdLargest(arr) {
    let n = arr.length, third = -Infinity, second = -Infinity, first = -Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        } else if (arr[i] > second && second !== first) {
            third = second;
            second = arr[i];
        } else if (arr[i] > third && third !== second) {
            third = arr[i];
        }
    }
    return third;
}

let arr = [19, 12, 3, 10, 14, 17, 6];
console.log(largest(arr)); // 19
console.log(secondLargest(arr)); // 17
console.log(thirdLargest(arr)); // 14

// Time Complexity = O(n)
function firstLargestElement(arr) {

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(firstLargestElement([3, 5, 7, 2, 8])); // 8
console.log(firstLargestElement([-10, -3, -1, -7])); // -1