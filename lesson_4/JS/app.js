// var drinks = ["milk", "beer", 'soda', "coke"];
// for(var i = 0; i < drinks.length; i++) {
//     var drink = drinks[i];
//     console.log(`Today drink is -> ${drink}`);
// }

// var month;
// for(var i = 0; i <= 12; i++) {
//     var currentMonth = new Date().getMonth() + 1;
//     if(currentMonth === i) continue;
//     switch (i) {
//         case 1:
//             month = "Январь";
//             break;
    
//         case 2:
//             month = "Февраль";
//             break;
    
//         case 3:
//             month = "Март";
//             break;
    
//         case 4:
//             month = "Апрель";
//             break;
    
//         case 5:
//             month = "Май";
//             break;
    
//         case 6:
//             month = "Июнь";
//             break;
    
//         case 7:
//             month = "Июль";
//             break;
    
//         case 8:
//             month = "Август";
//             break;
    
//         case 9:
//             month = "Сентябрь";
//             break;
    
//         case 10:
//             month = "Октябрь";
//             break;
    
//         case 11:
//             month = "Ноябрь";
//             break;
    
//         case 12:
//             month = "Декабрь";
//             break;
    
//         default:
//             break;
//     }
// //     console.log(i === 1  ? `Год начинется с ${month}` : `Сегодня ${month}`);
// // }

// // ЗНАЧЕНИЯ
// var fruits = ['banana', 'apple', 'mango', 'lemon'];
// for(var i of fruits) {
//     console.log(i.toUpperCase());
// }

// var newWord = '';
// for(var i of 'string') {
//     newWord += i + '-';
// }
// console.log(newWord);

// var auto = {
//     name: 'BMW x7',
//     year: 2012,
//     color: 'black'
// }

// // ТОЛЬКО КЛЮЧИ
// for(var i in auto) {
//     console.log(i);
// }

// var array = [1, 2, 3, 3, 4, 5, 5, 6, 6, 6, 12, 14, 14];
// var fixedArr = [];

// for(var i of array) {
//     if(fixedArr.includes(i)) {
//         continue
//     } else {
//         fixedArr.push(i);
//     }
// }

// console.log(fixedArr);


function sayHello(a) {
    console.log(a);
}

sayHello('hello')

var a = [
    "mama", 
    {name: "tyty",
     age: 15}
];

console.log(a[1].name, a[1].age);