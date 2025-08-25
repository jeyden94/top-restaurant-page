import "./styles.css";
import { homeScreenController } from "./homepage.js"
import { menuScreenController } from "./menu.js"
import { contactScreenController } from "./contact.js"

function navController() {
    
    // Initialize the home screen
    homeScreenController()
    
    // Create a variable for the main content div so I can clear it when changing pages
    const contentDiv = document.querySelector("#content");

    // Add listeners for buttons on the nav

    const homeButton = document.querySelector(".home-btn");
    const menuButton = document.querySelector(".menu-btn");
    const contactButton = document.querySelector(".contact-btn");

    homeButton.addEventListener("click", homeClickHandler)
    menuButton.addEventListener("click", menuClickHandler)
    contactButton.addEventListener("click", contactClickHandler)


    function menuClickHandler() {
        contentDiv.innerHTML = "";
        menuScreenController();
    }

    function homeClickHandler() {
        contentDiv.innerHTML = "";
        homeScreenController();
    }

    function contactClickHandler() {
        contentDiv.innerHTML = "";
        contactScreenController();
    }

}

navController()

