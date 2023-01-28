
function getRandomColor() {
    const randomColor = "0123456789ABCDEF";
    let color = "";
    for(let i = 0; i < 6; i++) {
        color += randomColor[Math.floor(Math.random() * randomColor.length)];
    }

    return `#${color}`
}


const cols = document.querySelectorAll(".col");

function setRandomColor() {
    cols.forEach(col => {
        const color = getRandomColor();
        col.style.background = color;
    })
}

setRandomColor()