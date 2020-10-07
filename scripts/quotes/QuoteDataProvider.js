const quoteCollection = [
    {
        text: "We wander for distraction, but we travel for fulfillment.",
        author: "Hilaire Belloc",
        subject: "On Xochimilco"
    },
    {
        text: "Burn the forest if you will, but you will only scorch your own lungs.",
        author: "Anthony T. Hinkcs",
        subject: "On environmentalism"
    },
    {
        text: `If I'd learnt one thing from travelling, it was that the way to get things done was to go ahead and do them.
         Don't talk. Book a ticket, get a visa, pack a bag, and it just happen.`,
        author: "Alex Garland",
        subject: "On Borneo"
    }
]


export const useQuotes = () => {
    return quoteCollection.slice();
}