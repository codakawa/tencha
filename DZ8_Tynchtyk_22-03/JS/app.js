for(i of document.querySelectorAll("button")) {
    i.onclick = function() {
        console.log(i.id);
        if(this.textContent === this.id) {
            this.textContent = "ОТВЕТ";
        } else {
            this.textContent = this.id;
        }
    }
}