// Menu page

const buttons = document.querySelectorAll("button")

const menuItems = [
    document.querySelector(".coffee-menu"),
    document.querySelector(".dessert-menu"),
    document.querySelector(".drinks-menu"),
    document.querySelector(".smoothies-menu")
]


buttons.forEach( (element,index) => {
    element.addEventListener("click", () => {

        // Remove "active" class from all buttons
        buttons.forEach(element => {
            element.classList.remove("active")
        });

        // Add "active" class to the clicked button
        element.classList.add("active") 

        // Hide all menu items
        menuItems.forEach(menuItem => {
            menuItem.style.display = "none"
        });

        // Show the selected menu item based on the index
        menuItems[index].style.display = "block"
    })
});