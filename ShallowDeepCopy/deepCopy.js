// Outer and Inner or Nested Object and Array makes a Separate copy
// So Original and Copied object or Array absolutely independent 
// it supports Date, Map, Set using structuredClone(). 
// Not support Function, Undefined, Date using JSON.parse().

// One line - it creates a new Memory on each level.

// Using JSON.parse(JSON.stringify(obj));

let obj = {
    name: "Neeraj",
    age: 29,
    address: {
        city: "Bareilly"
    },
};

let obj1 = JSON.parse(JSON.stringify(obj));
// console.log("Data: ", obj1);
obj1.address.city = "Mumbai";
console.log(obj.address.city);  // Output: Bareilly

// Using structuredClone(obj) - Best and Modern JS
let obj2 = {
    name: "Aarti",
    age: 26,
    address: {
        city: "Mumbai",
    },
    arr: [1, 3, 4, 6],
};

let obj3 = structuredClone(obj2);
obj3.address.city = "Bareilly";
obj3.arr[0] = 50;


console.log(obj2.address.city);  // Output: Mumbai
console.log(obj2.arr[0]);  // Output: 1
console.log(obj3.arr[0]);  // Output: 50


// Using lodash Library ._cloneDeep()
// import _ from "lodash";

// let obj5 = {
//     a : 10,
//     b : {
//         c : 20
//     }
// };

// let obj6 = _.cloneDeep(obj5);

// obj6.b.c = 50;
// console.log(obj5.b.c);

// Manual Deep Copy using Recursion

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') return obj;

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}

let obj6 = {
    name: 'Neeraj',
    age: 26,
    address: {
        city: "Cananda"
    },
};

let obj7 = deepCopy(obj6);
obj7.address.city = "Kolkata";

console.log(obj6.address.city);





