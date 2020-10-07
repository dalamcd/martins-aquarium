import { useFish } from "./FishDataProvider.js"
import { fish } from "./Fish.js"

export const FishList = () => {

    const contentElement = document.querySelector(".fishList");
    const fishes = useFish();

    let FishHTMLRepresentation = ""

    for (const fishObj of fishes) {
        FishHTMLRepresentation += fish(fishObj);
    }
    contentElement.innerHTML = `
        <section class="fishList">
            <h3>Fish List</h3>
            <div class="fishContainer">
            ${FishHTMLRepresentation}
            </div>
            </section>`
}