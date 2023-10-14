// toogle menu for social media
                
const toogleSocialMediaMenu = document.querySelector('.fa-hashtag');
const socialMediaIcons = document.querySelector('.social-icons-dropdown')
const icon = document.querySelector('.fa-brands')
                
toogleSocialMediaMenu.onclick = function (e) {
    socialMediaIcons.classList.toggle('menu-active')
} 
    
// Click anywhere outside menu and remove the social media menu 
    
document.addEventListener("click", (e) => {
    
    if (e.target !== toogleSocialMediaMenu && e.target !== socialMediaIcons &&  e.target !== icon) {
    
        if (socialMediaIcons.classList.contains("menu-active")) {
    
            socialMediaIcons.classList.remove('menu-active')
        }
    }
    
})
    
// toogle menu for pages
    
const barMenu = document.querySelector(".fa-bars")
const barNavLinks = document.querySelector(".bar-nav-links")
const pages = document.querySelector(".page")
    
    
barMenu.onclick = function (e) {
    barNavLinks.classList.toggle('open')
} 
    
document.addEventListener("click",(e) => {
    
    if (e.target !== barMenu && e.target !== barNavLinks && e.target !== pages) {
            
        if (barNavLinks.classList.contains("open")) {
                
                barNavLinks.classList.remove("open")
        }
    }
})
    
// Popup for search icon
    
const searchIcon = document.querySelector(".search-icon")
const searchPopup = document.querySelector(".search-popup")
const closeSearchPopup = document.querySelector(".close-search-popup")
    
// function to open the search popup
    
searchIcon.addEventListener("click", () => {
    searchPopup.style.display = "block"
})
    
// function to close the search popup
    
closeSearchPopup.addEventListener("click", () => {
    searchPopup.style.display = "none"
})

// Get references to the buttons and the image elements


const coffeeButtons = document.querySelectorAll(".coffee-button")
const coffeeImages = [
    document.querySelector(".cappuccino-img"),
    document.querySelector(".latte-img"),
    document.querySelector(".arabica-img")
]


let currentCoffeeIndex = 0; // Initialize with the first button

coffeeButtons.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        // Hide the image associated with the previously clicked button
        coffeeImages[currentCoffeeIndex].style.display = "none";
        // Update the current index to the new one
        currentCoffeeIndex = index;
        // Show the clicked coffee image
        coffeeImages[index].style.display = "block";
    });
});

// Hide all coffee images initially except for the first one
coffeeImages.forEach((coffeeImage, index) => {
    if (index !== currentCoffeeIndex) {
        coffeeImage.style.display = "none";
    }
});

