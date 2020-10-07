export const tip = (tipObj) => {

    return `<div class="tip">
        <p class="tip__species">Species: ${tipObj.species}</p>
        <p class="tip__topic">Topic: ${tipObj.topic}</p>
        <p class="tip__text">${tipObj.desc}</p>
        <p class="dot">&middot;</p>
    </div>
    `
}