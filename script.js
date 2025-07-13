class Smoothie {
    constructor(size, fruits, base) {
        this.size = size
        this.fruits = fruits
        this.base = base
    }
    getDescription() {
        if (this.fruits.length == 0) {
            return "You ordered a " + this.size + " smoothie with no fruits and " + this.base + " as the base. Brave choice!"
        }

        let fruits = ""
        for (let i = 0; i < this.fruits.length; i++) {
            fruits += this.fruits[i]
            if (i < this.fruits.length - 1) {
                fruits += ", "
            }
        }

        return "You ordered a " + this.size + " smoothie with " + fruits + " and " + this.base + " as the base. Enjoy!"
    }
}

document.getElementById("smoothieForm").addEventListener("submit", function(e) {
    e.preventDefault()

    let sizePicked = document.getElementById("size").value
    let basePicked = document.getElementById("base").value
    let fruitList = []
//  let there be light
    let boxes = document.querySelectorAll(".checkbox-group input[type='checkbox']")
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            fruitList.push(boxes[i].value)
        }
    }

    let newSmoothie = new Smoothie(sizePicked, fruitList, basePicked)
    document.getElementById("output").innerText = newSmoothie.getDescription()
})
