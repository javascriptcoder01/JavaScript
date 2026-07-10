
let arr = [1, 2, 3, 4, 5, 6];
let value = 4;
let newLength = 0;

for (let i = 0; i < arr.length; i++) {
    // add element in new Length
    if (arr[i] !== value) {
        arr[newLength] = arr[i];
        newLength++;
    }
}

arr.length = newLength;
console.log(arr);

// Using Filter

let result = arr.filter(item => item !== value);
console.log(result);

// Using Splice Method
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        arr.splice(i, 1);
    }
}
console.log(arr);

// Using Push Method
let results = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) results.push(arr[i]);
}
console.log(results);