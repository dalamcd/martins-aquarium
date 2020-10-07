const locationCollection = [
    {
        name: "Xocimilco",
        geo: "Mexico City, Mexico",
        image: "https://i.pinimg.com/736x/4c/cc/3d/4ccc3df4ca897c1a12a0d8b7e5c7df64.jpg"
    },
    {
        name: "Amazon Basin",
        geo: "South America",
        image: "images/amazonbasin.jpg"
    },
    {
        name: "Borneo",
        geo: "Southeast Asia",
        image: "images/borneobeach.jpg"
    }
];

export const useLocations = () => {
    return locationCollection.slice();
}