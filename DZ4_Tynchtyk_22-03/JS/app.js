var array = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];
var sortArray = array.sort();
var noDuplicateArray = Array.from(new Set(sortArray)); //список без дубликатов
var arrayValue = []; //кол-во дубликатов каждого эл. списка (идут в той же очередности что и список без дубликатов)
var numberedArray = []; //готовый список со всеми эл. и кол-вом их дубликатов
var sortNumberedArray = [];
var obj = {}; //объект с элементами в виду ключа и кол-вом дубликатов в виде значения ключей
var sortObj = {}; 


//аннулирую кол-во дубликатов для последующей записи
for(var i = 0; i < noDuplicateArray.length; i++) {
    arrayValue[i] = 0;
}


//записываю кол-во дубликатов для каждого эл. (идут в той же очередности что и список без дубликатов)
var i1 = 0;
for(var i of sortArray) {
    if(noDuplicateArray[i1].includes(i)) {
        arrayValue[i1] += 1;
    } else {
        i1++
        arrayValue[i1] += 1;
    }
}


//записываю элементы и кол-во дубликатов в отдельный массив
for(var i = 0; i < noDuplicateArray.length; i++) {
    numberedArray.push([noDuplicateArray[i], arrayValue[i]]);
}


//сортировка по значению эл. от большего к меньшему
numberedArray.sort(function(b, a) {
    return a[1] - b[1]
});


//преобразование массивов в объекты
obj = Object.fromEntries(numberedArray);

console.log("Отсортированный список");
console.log(obj);


// ----------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("-------------------------------------------------------------------------------------------------------------------------------------------------------");


function returnBiggest(arrayToSort) {
    var max = -Infinity;
    for (var i of arrayToSort) {
        if (i > max) {
            max = i;
        }
    }
    return max;
}

console.log(returnBiggest([2,4,5,0,12,2]));
