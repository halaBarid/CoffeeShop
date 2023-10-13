document.addEventListener("DOMContentLoaded", function () {
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
        console.log(".ssdmlm    ")
    })
    
    // function to close the search popup
    
    closeSearchPopup.addEventListener("click", () => {
        searchPopup.style.display = "none"
        console.log("close")
    })

        // Get references to the buttons and the image elements
    
        const cappuccinoButton = document.querySelector(".cappuccino-button");
        const latteButton = document.querySelector(".latte-button")
        const arabicaButton = document.querySelector(".arabica-button")
        const cappuccinoImg = document.querySelector(".cappuccino-img")
        const latteImg = document.querySelector(".latte-img")
        const arabicaImg = document.querySelector(".arabica-img")
        
        // Hide 2 coffee images initially
        
        latteImg.style.display = "none"
        arabicaImg.style.display = "none"
        
        // Add click event listeners to the buttons
        
        cappuccinoButton.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior
            cappuccinoImg.style.display = "block"
            latteImg.style.display = "none"
            arabicaImg.style.display = "none"
        })
        
        latteButton.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior
            cappuccinoImg.style.display = "none"
            latteImg.style.display = "block"
            arabicaImg.style.display = "none"
        })
        
        arabicaButton.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior
            cappuccinoImg.style.display = "none"
            latteImg.style.display = "none"
            arabicaImg.style.display = "block"
        })
});
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

// Get references to the buttons and the image elements

const cappuccinoButton = document.querySelector(".cappuccino-button");
const latteButton = document.querySelector(".latte-button")
const arabicaButton = document.querySelector(".arabica-button")
const cappuccinoImg = document.querySelector(".cappuccino-img")
const latteImg = document.querySelector(".latte-img")
const arabicaImg = document.querySelector(".arabica-img")

// Hide 2 coffee images initially

latteImg.style.display = "none"
arabicaImg.style.display = "none"

// Add click event listeners to the buttons

cappuccinoButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    cappuccinoImg.style.display = "block"
    latteImg.style.display = "none"
    arabicaImg.style.display = "none"
})

latteButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    cappuccinoImg.style.display = "none"
    latteImg.style.display = "block"
    arabicaImg.style.display = "none"
})

arabicaButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    cappuccinoImg.style.display = "none"
    latteImg.style.display = "none"
    arabicaImg.style.display = "block"
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
    console.log("close")
})

