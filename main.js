

const grigliaHtml = document.getElementById(`griglia`)
for(let i = 1; i<100; i++ ){
    let box= document.createElement("div")
    box.classList.add("box")
    grigliaHtml.append(box)
}