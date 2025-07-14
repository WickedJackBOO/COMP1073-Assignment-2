class Smoothie { // makes the smoothie class thing
    constructor(size, fruits, base) {
        this.size = size
        this.fruits = fruits
        this.base = base
    }
    getDescription() { // returns the message for the smoothie
        if (this.fruits.length == 0) {
            return "You ordered a " + this.size + " smoothie with no fruits and " + this.base + " as the base. Brave choice!"
        }

        let fruits = ""
        for (let i = 0; i < this.fruits.length; i++) { // loops through the fruits
            fruits += this.fruits[i]
            if (i < this.fruits.length - 1) { // if it's not the last fruit, add a comma
                fruits += ", "
            }
        }

        return "You ordered a " + this.size + " smoothie with " + fruits + " and " + this.base + " as the base. Enjoy!"
    }
}
// when the form is submitted
document.getElementById("smoothieForm").addEventListener("submit", function(e) {
    e.preventDefault() // prevents refreshing the page

    let sizePicked = document.getElementById("size").value
    let basePicked = document.getElementById("base").value
    let fruitList = [] // this will hold the fruits that are picked
//  let there be light
    let boxes = document.querySelectorAll(".checkbox-group input[type='checkbox']") // idk why i had to add this .checkbox-group part but it works soo...
    for (let i = 0; i < boxes.length; i++) { // loops through the checkboxes
        if (boxes[i].checked) { // if the checkbox is checked
            fruitList.push(boxes[i].value)
        }
    }
    // makes the smoothie
    let newSmoothie = new Smoothie(sizePicked, fruitList, basePicked)
    // shows the message
    document.getElementById("output").innerText = newSmoothie.getDescription()
})
