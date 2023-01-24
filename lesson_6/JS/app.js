// document.querySelector(".btn").addEventListener("click", function() {
//     console.log("btn pressed");
// })

const btns = document.querySelectorAll(".btn");
for(let i =0; i<btns.length; i++){
    btns[i].addEventListener("click", function() {
        console.log("btn pressed");
    })
}


const frst = () => {
    setTimeout(() => {
        console.log(1);
    }, 5000);
}

const scnd = () => {
    console.log(2);
}

// frst()
// scnd()

// ----------------------------------------------------------------------

function sqr(...array) {
    const result = []
    for(let i of array) {
        result.push(i**2)
    }
    // return array.map(i => i**2);
    return result
}

console.log(sqr(2,2,3,3)); 


function getName(firstName) {
    return function(lastName) {
        return `Hello ${firstName} ${lastName}`
    }
}

console.log(getName("tyncha")("raim"));

// -----------------------------замыкание-----------------------------------------------

function getProf(prof) {
    const profUpper = prof.toUpperCase();
    return function(name) {
        return `${profUpper} ${name}`
    }
}

// -------------------------------------------------------------------------------

const div = document.createElement("div");
div.classList.add("wrapper");
const body = document.querySelector("body"); //document.body
body.appendChild(div);
const header = document.createElement("h1");
header.textContent = "DOM-element"
div.insertAdjacentElement("beforebegin", header);
const ul = `
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
`

div.innerHTML = ul;

class Animal {
    constructor(color, name) {
        color = this.color
        name = this.color
    }
}
