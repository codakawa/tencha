// var users = [
//     {
//         username: "Jack",
//         salary: 500
//     },
//     {
//         username: "Max",
//         salary: 1500
//     },
//     {
//         username: "Umar",
//         salary: 2000
//     },
//     {
//         username: "Aida",
//         salary: 400
//     }
// ]

// var filteredArray = users.filter(user => user.salary < 1000)
// console.log(filteredArray);

var blackList = ["anna", "john", "rain", "adana", "aperi"];
var usname = "";
while(usname === "" || blackList.includes(usname.toLowerCase))
{
    usname = prompt("your name: ");

}