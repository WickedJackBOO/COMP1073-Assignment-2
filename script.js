class Smoothie {
    constructor(size, fruits, base) {
        this.size = size
        this.fruits = fruits
        this.base = base
    }
    desc() {
        let out = "Size: " + this.size + " | Fruits: "
        for (let i = 0; i < this.fruits.length; i++) {
            out += this.fruits[i]
            if (i != this.fruits.length - 1) {
                out += ", "
            }
        }
        out += " | Base: " + this.base
        return out
    }
}

document.getElementById("smoothieForm").addEventListener("submit", function(e) {
    e.preventDefault()

    let sizePicked = document.getElementById("size").value
    let basePicked = document.getElementById("base").value
    let fruitList = []
//  let there be light
    let boxes = document.querySelectorAll("input[type='checkbox']")
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            fruitList.push(boxes[i].value)
        }
    }

    let newSmoothie = new Smoothie(sizePicked, fruitList, basePicked)
    document.getElementById("output").innerText = newSmoothie.desc()
})
