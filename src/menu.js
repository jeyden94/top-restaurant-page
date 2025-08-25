import chickenSatayImage from "./images/chicken-satay.jpg"
import eggRollsImage from "./images/egg-rolls.jpg"
import crabRangoonImage from "./images/crab-rangoon.jpg"
import padThaiImage from "./images/pad-thai.jpg"
import yellowCurryImage from "./images/yellow-curry.jpg"
import kungPauChickenImage from "./images/kung-pau-chicken.jpg"


export function menuScreenController() {
    const menuContentDiv = document.querySelector("#content");

    // Appetizer Section
    const menuSectionAppetizers = document.createElement("div");
    menuSectionAppetizers.classList.add("menu-section");

    const menuItemChickenSatay = document.createElement("div");
    menuItemChickenSatay.classList.add("menu-item", "appetizer");
    const menuItemChickenSatayImg = document.createElement("img");
    menuItemChickenSatayImg.src = chickenSatayImage;
    menuItemChickenSatayImg.alt = "Chicken Satay dish";

    const menuItemEggRolls = document.createElement("div");
    menuItemEggRolls.classList.add("menu-item", "appetizer");
    const menuItemEggRollsImg = document.createElement("img");
    menuItemEggRollsImg.src = eggRollsImage;
    menuItemEggRollsImg.alt = "Egg Rolls dish";

    const menuItemCrabRangoon = document.createElement("div");
    menuItemCrabRangoon.classList.add("menu-item", "appetizer");
    const menuItemCrabRangoonImg = document.createElement("img");
    menuItemCrabRangoonImg.src = crabRangoonImage;
    menuItemCrabRangoonImg.alt = "Crab Rangoon dish";   

    menuSectionAppetizers.innerHTML = `
    <h2>
        Appetizers
    </h2>
    `

    menuItemChickenSatay.innerHTML = `
    <h3 class="item-name">
        Chicken Satay
    </h3>
    <p class="item-description">
        Grilled marinated chicken slices in coconut and spices, on bamboo skewers, 
        accompanied with peanut sauce and cucumber salad.
    </p>
    <p class="item-price">
        $11.95
    </p>
    `
    menuItemChickenSatay.append(menuItemChickenSatayImg)

    menuItemEggRolls.innerHTML = `
    <h3 class="item-name">
        Egg Rolls
    </h3>
    <p class="item-description">
        Fried egg rolls stuffed with minced pork, crab, onion, egg and lots of other goodies. 
        Served with our special sweet and sour sauce.
    </p>
    <p class="item-price">
        $9.95
    </p>
    `

    menuItemEggRolls.append(menuItemEggRollsImg)

    menuItemCrabRangoon.innerHTML = `
    <h3 class="item-name">
        Crab Rangoon
    </h3>
    <p class="item-description">
        Deep-fried rangoon wrapper, stuffed with celery, crab meat and 
        cream cheese. Served with our thin sweet & sour sauce.
    </p>
    <p class="item-price">
        $8.95
    </p>
    `

    menuItemCrabRangoon.append(menuItemCrabRangoonImg)  

    menuSectionAppetizers.append(menuItemChickenSatay, menuItemEggRolls, menuItemCrabRangoon)
    menuContentDiv.append(menuSectionAppetizers)

    // Mains Section

    const menuSectionMains = document.createElement("div");
    menuSectionMains.classList.add("menu-section");

    const menuItemPadThai = document.createElement("div");
    menuItemPadThai.classList.add("menu-item", "main");
    const menuItemPadThaiImg = document.createElement("img");
    menuItemPadThaiImg.src = padThaiImage;
    menuItemPadThaiImg.alt = "Pad Thai dish";

    const menuItemYellowCurry = document.createElement("div");
    menuItemYellowCurry.classList.add("menu-item", "main");
    const menuItemYellowCurryImg = document.createElement("img");
    menuItemYellowCurryImg.src = yellowCurryImage;
    menuItemYellowCurryImg.alt = "Yellow Curry dish";

    const menuItemKungPauChicken = document.createElement("div");
    menuItemKungPauChicken.classList.add("menu-item", "main");
    const menuItemKungPauChickenImg = document.createElement("img");
    menuItemKungPauChickenImg.src = kungPauChickenImage;
    menuItemKungPauChickenImg.alt = '"Kung Pao" Chicken dish';   

    menuSectionMains.innerHTML = `
    <h2>
        Main Dishes
    </h2>
    `

    menuItemPadThai.innerHTML = `
    <h3 class="item-name">
        Chicken Satay
    </h3>
    <p class="item-description">
        Special Thai thin noodles, pan fried with egg, peanuts and garnished with fresh bean sprouts.
    </p>
    <p class="item-price">
        $12.95
    </p>
    `
    menuItemPadThai.append(menuItemPadThaiImg)

    menuItemYellowCurry.innerHTML = `
    <h3 class="item-name">
        Yellow Curry
    </h3>
    <p class="item-description">
        Spicy with coconut milk, carrots, onion, bell peppers, mixed vegetables and 
        bamboo shoots, flavored with chili and yellow curry paste.
    </p>
    <p class="item-price">
        $14.95
    </p>
    `

    menuItemYellowCurry.append(menuItemYellowCurryImg)

    menuItemKungPauChicken.innerHTML = `
    <h3 class="item-name">
        "Kung Pau" Chicken
    </h3>
    <p class="item-description">
        Thai-style chicken slices, stir-fried with carrots, mushrooms, water 
        chestnuts and cashew nuts, with a touch of cooking wine.
    </p>
    <p class="item-price">
        $15.95
    </p>
    `

    menuItemKungPauChicken.append(menuItemKungPauChickenImg)  

    menuSectionMains.append(menuItemPadThai, menuItemYellowCurry, menuItemKungPauChicken)
    menuContentDiv.append(menuSectionMains)

}