var password = "qwerty";
var name = prompt("Your name: ");
var guessPass = prompt("Your password: ");

if(guessPass === password)
{
    alert("Hello " + name)
} else
{
    alert("Wrong password!")
}


var bornMonth = Number(prompt("Месяц рождения (numbers): "));
var bornDay = Number(prompt("День рождения (numbers): "));


if(bornDay < 1 || bornMonth < 1 || bornMonth > 12)
{
    alert("Введите корректную дату!")
} else
{
    if(bornMonth === 1)
    {
        if(bornDay <= 20)
        {
            alert("Козерог");
        } else if(bornDay >= 21 && bornDay <= 31)
        {
            alert("Водолей");
        } else if(bornDay > 31)
        {
            alert("Введите корректную дату!")
        } else
        {
            alert("Только цифры!")
        }
    } else if(bornMonth === 2)
    {
        if(bornDay <= 18)
        {
            alert("Водолей")
        } else if(bornDay >= 19 && bornDay <= 29)
        {
            alert("Рыбы")
        } else if(bornDay > 29)
        {
            alert("Введите корректную дату!")
        } else
        {
            alert("Только цифры!")
        }
    } else if(bornMonth === 3)
    {
        if(bornDay <= 20)
        {
            alert("Рыбы")
        } else if(bornDay >= 21 && bornDay <= 31)
        {
            alert("Овен")
        } else if(bornDay > 31)
        {
            alert("Введите корректную дату!")
        } else
        {
            alert("Только цифры!")
        }
    } else if(bornMonth === 4)
    {
        if(bornDay <= 20)
        {
            alert("Овен")
        } else if(bornDay >= 21 && bornDay <= 30)
        {
            alert("Телец")
        } else if(bornDay > 30)
        {
            alert("Введите корректную дату!")
        } else
        {
            alert("Только цифры!")
        }
    } else if(bornMonth === 5)
    {
        if(bornDay <= 21)
        {
            alert("Телец")
        } else if(bornDay >= 22 && bornDay <= 30)
        {
            alert("Близнецы")
        } else if(bornDay > 30)
        {
            alert("Введите корректную дату!")
        } else
        {
            alert("Только цифры!")
        }
    } else if(bornMonth === 6)
    {
        if(bornDay <= 21)
        {
            alert("Близнецы")
        } else if(bornDay >= 22 && bornDay <= 30)
        {
            alert("Рак")
        } else if(bornDay > 30)
        {
            alert("Введите корректную дату!")
        } else
        {
            alert("Только цифры!")
        }
    } else if(bornMonth === 7)
    {
        if(bornDay <= 22)
        {
            alert("Рак")
        } else if(bornDay >= 23 && bornDay <= 31)
        {
            alert("Лев")
        } else if(bornDay > 31)
        {
            alert("Введите корректную дату!")
        } else
        {
            alert("Только цифры!")
        }
    } else if(bornMonth === 8)
    {
        if(bornDay <= 23)
        {
            alert("Лев")
        } else if(bornDay >= 24 && bornDay <= 31)
        {
            alert("Дева")
        } else if(bornDay > 31)
        {
            alert("Введите корректную дату!")
        } else
        {
            alert("Только цифры!")
        }
    } else if(bornMonth === 9)
    {
        if(bornDay <= 22)
        {
            alert("Дева")
        } else if(bornDay >= 23 && bornDay <= 30)
        {
            alert("Весы")
        } else if(bornDay > 30)
        {
            alert("Введите корректную дату!")
        } else
        {
            alert("Только цифры!")
        }
    } else if(bornMonth === 10)
    {
        if(bornDay <= 23)
        {
            alert("Весы")
        } else if(bornDay >= 24 && bornDay <= 31)
        {
            alert("Скорпион")
        } else if(bornDay > 31)
        {
            alert("Введите корректную дату!")
        } else
        {
            alert("Только цифры!")
        }
    } else if(bornMonth === 11)
    {
        if(bornDay <= 22)
        {
            alert("Скорпион")
        } else if(bornDay >= 23 && bornDay <= 30)
        {
            alert("Стрелец")
        } else if(bornDay > 30)
        {
            alert("Введите корректную дату!")
        } else
        {
            alert("Только цифры!")
        }
    } else if(bornMonth === 12)
    {
        if(bornDay <= 21)
        {
            alert("Стрелец")
        } else if(bornDay >= 22 && bornDay <= 31)
        {
            alert("Козерог")
        } else if(bornDay > 31)
        {
            alert("Введите корректную дату!")
        } else
        {
            alert("Только цифры!")
        }
    } else
    {
        alert("Только цифры")
    }
}    

