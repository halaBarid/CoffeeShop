// Menu page

const coffeeButtonMenu = document.querySelector(".coffee")
const dessertButtonMenu = document.querySelector(".desserts")
const drinksButtonMenu = document.querySelector(".drinks")
const smoothiesButtonMenu = document.querySelector(".smoothies")

const coffeeMenu = document.querySelector(".coffee-menu")
const dessertMenu = document.querySelector(".dessert-menu")
const drinksMenu = document.querySelector(".drinks-menu")
const smoothiesMenu = document.querySelector(".smoothies-menu")

const buttons = document.querySelectorAll(".button")
console.log(buttons)

dessertMenu.style.display = "none"
drinksMenu.style.display = "none"
smoothiesMenu.style.display = "none"

coffeeButtonMenu.addEventListener("click", () => {
    coffeeMenu.style.display= "block"
    dessertMenu.style.display = "none"
    drinksMenu.style.display = "none"
    smoothiesMenu.style.display = "none"


    coffeeButtonMenu.classList.add("active")
    dessertButtonMenu.classList.remove("active")
    drinksButtonMenu.classList.remove("active")
    smoothiesButtonMenu.classList.remove("active")
})

dessertButtonMenu.addEventListener("click", () => {
    coffeeMenu.style.display= "none"
    dessertMenu.style.display= "block"
    drinksMenu.style.display = "none"
    smoothiesMenu.style.display = "none"


    dessertButtonMenu.classList.add("active")
    coffeeButtonMenu.classList.remove("active")
    drinksButtonMenu.classList.remove("active")
    smoothiesButtonMenu.classList.remove("active")
})

drinksButtonMenu.addEventListener("click", () => {
    coffeeMenu.style.display= "none"
    dessertMenu.style.display= "none"
    drinksMenu.style.display= "block"
    smoothiesMenu.style.display = "none"


    drinksButtonMenu.classList.add("active")
    dessertButtonMenu.classList.remove("active")
    coffeeButtonMenu.classList.remove("active")
    smoothiesButtonMenu.classList.remove("active")

})

smoothiesButtonMenu.addEventListener("click", () => {
    coffeeMenu.style.display= "none"
    dessertMenu.style.display= "none"
    drinksMenu.style.display= "none"
    smoothiesMenu.style.display= "block"


    smoothiesButtonMenu.classList.add("active") 
    dessertButtonMenu.classList.remove("active")
    coffeeButtonMenu.classList.remove("active")
    drinksButtonMenu.classList.remove("active")    
})
