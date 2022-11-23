console.log("SCRIPT")
let show = false

const more = document.getElementById("more")
const slider = document.getElementById("slider")

const moretext = document.getElementById("more-text")
const moreline = document.getElementById("more-line")

const arrow = document.getElementById("arrow")


more.addEventListener("click", () => {
    show = true
    slider.style.opacity = "1";

    slider.style.pointerEvents = "auto"

})

more.addEventListener("mouseover", () => {
    moretext.style.color = "white"
    moreline.style.backgroundColor = "white"
})

more.addEventListener("mouseout", () => {
    moretext.style.color = "#323232"
    moreline.style.backgroundColor = "#323232"
})

arrow.addEventListener("click", () => {
    slider.style.opacity = "0"
    slider.style.pointerEvents = "none"
})

