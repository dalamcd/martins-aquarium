import { mostHolyFish, nonHolyFish, soldierFish, useFish } from "./FishDataProvider.js"
import { fish } from "./Fish.js"

export const FishList = () => {

    const contentElement = document.querySelector(".fishList");
    const fishes = useFish();

    let FishHTMLRepresentation = ""

    for(const fishObj of mostHolyFish()) {
        FishHTMLRepresentation += fish(fishObj);
    }

    for(const fishObj of soldierFish()) {
        FishHTMLRepresentation += fish(fishObj);
    }

    for(const fishObj of nonHolyFish()) {
        FishHTMLRepresentation += fish(fishObj);
    }

    // for (const fishObj of fishes) {
    //     FishHTMLRepresentation += fish(fishObj);
    // }
    contentElement.innerHTML = `
            <h3>Fish List</h3>
            <div class="fishContainer">
            ${FishHTMLRepresentation}
            </div>
            </section>`
}