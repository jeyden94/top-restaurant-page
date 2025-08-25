export function contactScreenController() {
    const contactContentDiv = document.querySelector("#content");

    const contactSection = document.createElement("div");
    contactSection.classList.add("menu-section");

    contactSection.innerHTML = `
    <h3>
        Contact Page
    </h3>
    <div class="reservation-wrapper">
        <div class="reservation-icon"></div>
        <div>
            <h4>
                Reservation
            </h4>
            <p>
                Tel: 630-765-7715
            </p>
        </div>
    </div>
    <div class="location-wrapper">
        <div class="location-icon"></div>
        <div>
            <h4>
                Location
            </h4>
            <p>
                563 W Liberty Dr,
                Wheaton, IL 60187
            </p>
        </div>
    </div>
    `
    contactContentDiv.append(contactSection)
}