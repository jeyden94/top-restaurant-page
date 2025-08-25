import "./styles.css";
import { homeScreenController } from "./homepage.js"
import { menuScreenController } from "./menu.js"

function navController() {
    
    // Initialize the home screen
    homeScreenController()
    
    // Create a variable for the main content div so I can clear it when changing pages
    const contentDiv = document.querySelector("#content");

    // Add listeners for buttons on the nav

    const homeButton = document.querySelector(".home-btn");
    const menuButton = document.querySelector(".menu-btn");
    const contactButton = document.querySelector(".contact-btn");

    menuButton.addEventListener("click", menuClickHandler)

    function menuClickHandler() {
        contentDiv.innerHTML = "";
        menuScreenController();
    }



}

navController()

