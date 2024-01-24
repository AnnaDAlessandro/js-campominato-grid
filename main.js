const btnHtml = document.getElementById("btnPlay")

const grigliaHtml = document.getElementById("griglia")




btnHtml.addEventListener(`click`, function(){

  grigliaHtml.style.setProperty("display","flex")

  for(let i = 1; i<100; i++ ){
    let box= document.createElement("div")
    box.classList.add("box")
    box.innerHTML=`<span>${[i]}</span>`

    box.addEventListener(`click`, function(){
        let scegliSpan= this.querySelector("span").innerText

        this.classList.toggle("sky")
    })  


    grigliaHtml.append(box)
}
})

