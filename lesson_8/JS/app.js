
document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if(e.code.toLowerCase() === "space") {
        setRandomColor();
    }
})


function getRandomColor() {
    const randomColor = "0123456789ABCDEF";
    let color = "";
    for(let i = 0; i < 6; i++) {
        color += randomColor[Math.floor(Math.random() * randomColor.length)];
    }

    return `#${color}`
}

function setTextColor(obj, color) {
    const luminance = chroma(color).luminance();
    obj.style.color = luminance > 0.5 ? "black" : "white";

}

const cols = document.querySelectorAll(".col");
function setRandomColor() {
    cols.forEach(col => {
        const islocked = col.querySelector("i").classList.contains("fa-lock")
        if(islocked) {
            return
        }
        const text = col.querySelector("h2");
        const button = col.querySelector("button")
        // const color = chroma.random();
        const color = getRandomColor();
        col.style.background = color;

        text.textContent = getRandomColor()

        setTextColor(text, color)
        setTextColor(button, color);
    })
}

document.addEventListener("click", (e) => {
    const type = e.target.dataset.type;
    if(type === "lock") {
        const node = e.target.tagName.toLowerCase() === "i"
        ? e.target
        : e.target.children[0];
        node.classList.toggle("fa-lock-open");
        node.classList.toggle("fa-lock");
    }
})

setRandomColor()