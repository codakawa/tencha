// console.log('Hello Wolrd!');

var name = 'Tynchtyk';
var surname = "Raousad";
var lastname = "asdasd";
console.log(name + lastname);
console.log(surname);

var fullName = name + ' ' + surname;
console.log(fullName);

var directionInProg = 'JS'
var profession = 'Frontend'
console.log('Сфера разработки - ' + directionInProg + ',\nа именно - ' + profession);

var country = 'Kg'
console.log(country.toUpperCase());

var numb = 15;
console.log(numb);

var num1 = 50;
var num2 = 10;
console.log(num1 - num2);

// var input1 = prompt('First number: ')
// var input2 = prompt('Second number: ')
// console.log(Number(input1) + Number(input2));


// man = true, woman = false
var gender = false;
if(gender){
    console.log("goorogaia");
} else if(!gender){
    console.log("dorogoi");
} else{
    console.log('eror');
}

if(1 !== 2){
    console.log('1=1');
}



var userName = prompt('Your name: ');
var userSurname = prompt('Your Surname: ');
var userAge = Number(prompt('Your age: '))

if(userAge <= 18){
    alert("Hi " + userName)
} else if(userAge > 18 && userAge <= 40){
    alert("Hello " + userSurname + ' ' + userName)
} else if(userAge > 40){
    alert("Welcome " + userSurname + ' ' + userName)
}

