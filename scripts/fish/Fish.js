export const fish = (fishObj) => {

    return `<div class ="fish">
    <img class="fish__image" src="${fishObj.image}" alt="">
    <p class="fish__name">Name: ${fishObj.name}</p>
    <p class="fish__species">Species: ${fishObj.species}</p>
    <p class="fish__length">Length: ${fishObj.length} inches</p>
    <p class="fish__location">Location: ${fishObj.location}</p>
    <p class="fish__diet">Diet: ${fishObj.diet}</p>
    </div>`;
}