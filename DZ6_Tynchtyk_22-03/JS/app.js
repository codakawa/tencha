const btns = document.querySelectorAll(".btn");
for(let i =0; i<btns.length; i++){
    btns[i].addEventListener("click", function() {
        console.log("btn pressed");
    })
}

let num = 0;
const p = document.createElement("p");
p.textContent = num;
const body = document.body; //document.body
body.appendChild(p);

document.querySelector(".plusBtn").addEventListener("click", function() {
    num++;
    p.textContent = num;
})

document.querySelector(".minusBtn").addEventListener("click", function() {
    num--;
    p.textContent = num;
})

