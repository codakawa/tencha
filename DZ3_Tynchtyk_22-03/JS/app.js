i = 0;
while(i <= 20)
{
    if((i % 2) === 0)
    {
        console.log(i);
        i++
    } else
    {
        i++
    }
}

//--------------------------------------------------------------------

var total = 0;
var userInput;
do {
    userInput = Number(prompt("Number: "));
    if(userInput > 0)
    {
        total += userInput;
    } else 
    {
        alert(total);
    }
} while (userInput > 0);