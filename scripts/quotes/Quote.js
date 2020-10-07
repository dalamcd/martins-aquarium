export const quote = (quoteObj) => {

    return `
    <div class="quote">
        <p class="quote__text">${quoteObj.text}</p>
        <p class="quote__author">-- ${quoteObj.author}</p>
        <p class="quote__location">${quoteObj.subject}</p>
    </div>`
}