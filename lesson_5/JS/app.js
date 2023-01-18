// function chooseCoffee() {
//     const userChoose = prompt("(coffee): ");
//     if(userChoose.toLowerCase() === "coffee") {
//         const userVarsChoose = prompt("(black, with cream): ");
//         switch (userVarsChoose.toLowerCase()) {
//             case "black":
//                 alert("black coffee");
//                 break;

//             case "with cream":
//                 alert("with cream coffee");
//                 break;

//             default:
//                 alert("we dont have that coffee!");
//                 break;
//         }
//     } else {
//         alert("we have only coffee");
//     }
// }

// chooseCoffee();


function getAllSum(...arrayOfNums) {
    console.log(arrayOfNums);
    let sum = arrayOfNums.reduce((a, b) => a+=b)
    console.log(sum);
}

getAllSum(5,4,1,2)


const getMax = (...arr) => console.log(Math.max(...arr));
getMax(2,4,5,0,12,2)