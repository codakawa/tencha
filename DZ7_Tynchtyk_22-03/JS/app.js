let toSolve = "";
let result = "";

let header = document.querySelector("header");
for(let i of document.querySelectorAll("button")) {
    if(i.textContent === "=") {
        i.onclick = function() {
            result = `${toSolve} = ${eval(toSolve)}`
            header.textContent = result;
            toSolve = "";
        }
    } else {
        i.onclick = function() {
            toSolve += i.textContent;
            header.textContent = toSolve;
        }   
    }
}

header.onclick = function() {
    toSolve = "";
    this.textContent = toSolve;
}

