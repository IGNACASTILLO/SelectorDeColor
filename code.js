const inputColor = document.getElementById("inputColor")
const btnVisualizar = document.getElementById("btnVisualizar")
const parrafo = document.getElementById("parrafo")
const card = document.getElementById("card")
const btnReset = document.getElementById("btnResetear")

btnVisualizar.addEventListener("click",()=>{

    parrafo.textContent = inputColor.value
    card.style.backgroundColor= inputColor.value
})

btnReset.addEventListener("click", ()=>{
    card.style.backgroundColor= "#fff"
    parrafo.textContent = "COLOR HEXAGESIMAL"
})

