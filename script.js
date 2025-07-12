class Smoothie {
    constructor(s, i, b) {
        this.s = s
        this.i = i
        this.b = b
    }
    getDetails() {
        return "Size: " + this.s + " Fruits: " + this.i + " Base: " + this.b
    }
}

let myForm = document.getElementById("smoothieForm")

myForm.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log("form is submitting")

    let s = document.getElementById("size").value
    let b = document.getElementById("base").value

    let fruits = []
    let checks = document.querySelectorAll("input[type='checkbox']")
    for (let j = 0; j < checks.length; j++) {
        if (checks[j].checked) {
            fruits.push(checks[j].innerText)
        }
    }

    let myS = new Smoothie(s, fruits, b)
    console.log(myS.getDetails())
    document.getElementById("output").innerText = "ordered something maybe idk"
})
