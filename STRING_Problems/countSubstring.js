// Formula: n * (n + 1) / 2 where n = String Length

function countSubstring(str) {
    let n = str.length;

    return (n * (n + 1)) / 2;
}

console.log(countSubstring('abcd'));