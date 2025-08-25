export function homeScreenController() {
    const homeContentDiv = document.querySelector("#content");
    
    // Create homepage HTML content elements
 
    const restaurantName = document.createElement("h1");
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("home-page-about");
    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("home-page-hours");
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("home-page-location");

    // Add text to homepage HTML content elements

    restaurantName.textContent = "Simply Thai Bistro";
    aboutDiv.innerHTML = `
    <p>
        At Simply Thai - we serve fresh, authentic Thai cuisine in Wheaton, IL. 
        We invite you to look through our menu filled with traditional Thai dishes that you are sure to 
        enjoy. Come on in for a relaxing meal or place an order over the phone. We look forward to serving 
        you.
    </p>
    <h3>
        Simply Thai Bistro
    </h3>
    `;
    hoursDiv.innerHTML = `
    <p>
        <strong>Mon:</strong> Closed
    </p>
    <p>
        <strong>Tues-Sat:</strong> 11:30am - 8:30pm
    </p>
    <p>
        <strong>Sun:</strong> Noon-7:30pm
    </p>
    `;
    locationDiv.innerHTML = `
    <h3>
        Our Location
    </h3>
    <p>
        563 W Liberty Dr, Wheaton, IL 60187
    </p>
    `;

    // Append homepage HTML content elements to the content div

    homeContentDiv.append(restaurantName, aboutDiv, hoursDiv, locationDiv);

    console.log("hi")
}