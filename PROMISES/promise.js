// Resolve
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data mil gaya hai...");
    }, 1000);
});

promise.then((data) => console.log(data));  // print the data

// Reject

const promiseReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Kuch error ho gaya...");
    }, 2000);
});

promiseReject.catch((error) => console.log(error));   // print error

//  Fetch API  using Promise reject

const employeeData = new Promise(async (resolve, reject) => {
    reject(await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => data))
});
employeeData.catch(data => console.log("Error in fetching API"));