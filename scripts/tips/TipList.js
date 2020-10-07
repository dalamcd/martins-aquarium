import { tip } from "./Tip.js";
import { useTips } from "./TipDataProvider.js"

export const TipList = () => {

    const tipList = useTips();
    const contentElement = document.querySelector(".contentContainer__right");

    let TipHTMLRepresentation = "";

    for( const tipObj of tipList ) {
        TipHTMLRepresentation += tip(tipObj);
    }

    contentElement.innerHTML = `<h3 class="careheader">Care Tips</h3>
    ${TipHTMLRepresentation}`
}