export const location = (locObj) => {

    return `
    <div class="location">
        <img class="location__image" src="${locObj.image}" alt="">
        <p class="location__name">Name: ${locObj.name}</p>
        <p class="location__geo">Location: ${locObj.geo}</p>
    </div>
    `
}