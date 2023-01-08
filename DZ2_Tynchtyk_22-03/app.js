var movieFriends = {
    name: "Друзья",
    realeseDate: 1994,
    mainActors: "Дженнифер Энистон, Кортни Кокс, Лиза Кудроу, Мэтт Леблан, Мэттью Перри и Дэвид Швиммер",
    episodes: 236,
    seasons: 10,
    raiting: 9.1,
}

console.log("Сериал " + movieFriends.name + " был выпущен " + movieFriends.realeseDate + " года. В главных ролях " + movieFriends.mainActors + ". В фильме " + movieFriends.name + " " + movieFriends.seasons + " сезонов и " + movieFriends.episodes + " серии. А так же сериал имеет оценку " + movieFriends.raiting + ".");

// ----------------------------------------------------------------------------------------------------------------

var dayOfWeek = prompt("Введите день недели (english): ");

switch (dayOfWeek.toLowerCase()) {
    case "monday":
        alert("Понедельник")
        break;

    case "tuesday":
        alert("Вторник")
        break;

    case "wednesday":
        alert("Среда")
        break;

    case "thursday":
        alert("Четверг")
        break;

    case "friday":
        alert("Пятница")
        break;

    case "saturday":
        alert("Суббота")
        break;

    case "sunday":
        alert("Воскресенье")
        break;

    default:
        alert("Проверьте корректность введенных данных!")
        break;
}