import { quote } from "./Quote.js"
import { useQuotes } from "./QuoteDataProvider.js"

export const QuoteList = () => {

    const contentElement = document.querySelector(".travel__quotes")
    const quoteList = useQuotes();

    let QuoteHTMLRepresentation = "";

    for( const quoteObj of quoteList ) {
        QuoteHTMLRepresentation += quote(quoteObj);
    }

    contentElement.innerHTML = `<h3>Travel Quotes</h3>
    ${QuoteHTMLRepresentation}`;

}