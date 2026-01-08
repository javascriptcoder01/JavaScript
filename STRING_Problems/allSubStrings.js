// Time Complexity: O(n2);
function allSubStrings(str) {
    for (let i = 0; i < str.length; i++) {
        let result = "";

        for (let j = i; j < str.length; j++) {
            result += str[j];
            console.log(result);
        }
    }
}

allSubStrings('babacabc');