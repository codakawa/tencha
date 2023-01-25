document.querySelector(".addBtn").onclick = function() {
    if(document.querySelector("input").value.length === 0) {
        alert("Empty block!")
    } else {
        document.querySelector(".tasks").innerHTML  += `
            <div class = "task">
                <span class = "taskName">${document.querySelector("input").value}</span>
                <button class = "delete">DEL</button>
            </div>
        `;

        document.querySelector("input").value = "";

        for(let i of document.querySelectorAll(".delete")) {
            i.onclick = function() {
                this.parentNode.remove();
            }
        }

        for(let i of document.querySelectorAll(".taskName")) {
            i.onclick = function() {
                this.classList.toggle("completed");
            }
        }
        
    }
}