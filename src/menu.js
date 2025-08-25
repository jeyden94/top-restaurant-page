export function menuScreenController() {
    const menuContentDiv = document.querySelector("#content");

    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    menuSection.innerHTML = `
    <h3 class="item-name">
        Honey Tea
        </h3>
    <p class="item-description">
        A warm, sweet tea made with the highest quality honey 
        and a bit of lemon to start your day off right!
    </p>
    <p class="item-price">
        $2
    </p>
    <img src="" alt="">
    `

    menuContentDiv.append(menuSection)
}