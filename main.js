const Daily = document.querySelector(".a")
const Weekly = document.querySelector(".b")
const Monthly = document.querySelector(".c")
const week1 = document.querySelector(".week1")
const week2 = document.querySelector(".week2")
const week3 = document.querySelector(".week3")
const week4 = document.querySelector(".week4")
const week5 = document.querySelector(".week5")
const week6 = document.querySelector(".week6")
const daily1 = document.querySelector(".daily1")
const daily2 = document.querySelector(".daily2")
const daily3 = document.querySelector(".daily3")
const daily4 = document.querySelector(".daily4")
const daily5 = document.querySelector(".daily5")
const daily6 = document.querySelector(".daily6")
const monthly1 = document.querySelector(".monthly1")
const monthly2 = document.querySelector(".monthly2")
const monthly3 = document.querySelector(".monthly3")
const monthly4 = document.querySelector(".monthly4")
const monthly5 = document.querySelector(".monthly5")
const monthly6 = document.querySelector(".monthly6")


Daily.addEventListener("click", () => {
    daily1.classList.remove("hidden")
    daily2.classList.remove("hidden")
    daily3.classList.remove("hidden")
    daily4.classList.remove("hidden")
    daily5.classList.remove("hidden")
    daily6.classList.remove("hidden")
    week1.style.display = "none"
    week2.style.display = "none"
    week3.style.display = "none"
    week4.style.display = "none"
    week5.style.display = "none"
    week6.style.display = "none"
    monthly1.classList.add("hidden")
    monthly2.classList.add("hidden")
    monthly3.classList.add("hidden")
    monthly4.classList.add("hidden")
    monthly5.classList.add("hidden")
    monthly6.classList.add("hidden")
    
})
Weekly.addEventListener("click", () => {
    daily1.classList.add("hidden")
    daily2.classList.add("hidden")
    daily3.classList.add("hidden")
    daily4.classList.add("hidden")
    daily5.classList.add("hidden")
    daily6.classList.add("hidden")
    week1.style.display = "block"
    week2.style.display = "block"
    week3.style.display = "block"
    week4.style.display = "block"
    week5.style.display = "block"
    week6.style.display = "block"
    monthly1.classList.add("hidden")
    monthly2.classList.add("hidden")
    monthly3.classList.add("hidden")
    monthly4.classList.add("hidden")
    monthly5.classList.add("hidden")
    monthly6.classList.add("hidden")
})
Monthly.addEventListener("click", () => {
    daily1.classList.add("hidden")
    daily2.classList.add("hidden")
    daily3.classList.add("hidden")
    daily4.classList.add("hidden")
    daily5.classList.add("hidden")
    daily6.classList.add("hidden")
    monthly1.classList.remove("hidden")
    monthly2.classList.remove("hidden")
    monthly3.classList.remove("hidden")
    monthly4.classList.remove("hidden")
    monthly5.classList.remove("hidden")
    monthly6.classList.remove("hidden")
    week1.style.display = "none"
    week2.style.display = "none"
    week3.style.display = "none"
    week4.style.display = "none"
    week5.style.display = "none"
    week6.style.display = "none"

})