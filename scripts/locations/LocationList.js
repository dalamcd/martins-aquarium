import { useLocations } from "./LocationDataProvider.js"
import { location } from "./Location.js"

export const LocationList = () => {

    const contentElement = document.querySelector(".travel__locations");
    const locationList = useLocations();
    
    let LocationHTMLRepresentation = "";

    for( const locObj of locationList ) {
        LocationHTMLRepresentation += location(locObj);
    }

    contentElement.innerHTML = `
    <h3>Places to Go</h3>
    ${LocationHTMLRepresentation}
    `
}