//get the body element
const body = document.getElementsByTagName("body")[0]

// define function to change color
function setColor(name){
    body.style.backgroundColor = name
}

// define random color

function randomColor(){
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color
    
}
