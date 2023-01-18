function stringReverse(str) {
    const reversedArr = [];
    for(let i of str) {
        reversedArr.unshift(i);
    }
    return reversedArr.join("");
}
console.log(stringReverse("Hello World!"));

// ----------------------------------------------------------------------------------------

function avgNums(...arrayOfNums) {
    return ((arrayOfNums.reduce((a, b) => a += b)) / arrayOfNums.length);
}
console.log(avgNums(5,5,5,5,10,20,25));