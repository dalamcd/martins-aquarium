const fishCollection = [
    {
        name: "Bubba",
        species: "Ambystoma mexicanum",
        length: 9.1,
        location: "Xochimilco (New Mexico)",
        diet: "Mollusks, worms, insect larvae, crustaceans and some fish",
        image: "images/axolotl.jpg"
    },
    {
        name: "Percival",
        species: "Symphysodon discus",
        length: 8,
        location: "Amazon Basin",
        diet: "Algae, plant material, small invertabrates",
        image: "images/red-discus.jpg"
    },
    {
        name: "Carlton",
        species: "Fundulopanchax gardneri",
        length: 2.5,
        location: "Africa",
        diet: "Shrip, worms, tubifex",
        image: "images/killfish.jpg"
    },
    {
        name: "Shelby",
        species: "Pterophyllum scalare",
        length: 6,
        location: "Brazil",
        diet: "Brine shrimp, bloodworms",
        image: "images/koiangel.jpg"
    },
    {
        name: "Gustavo Mario Antoine III",
        species: "Puntius tetrazona",
        length: 3,
        location: "Borneo",
        diet: "Brine shrimp, bloodworms",
        image: "images/alibinobarb.jpg"
    },
    {
        name: "Leopold",
        species: "Leporinus fasciatus",
        length: 1,
        location: "South America",
        diet: "Beef heart, vegetable matter",
        image: "images/bandedleo.jpg"
    },
    {
        name: "Piotr",
        species: "Xiphophorus helleri",
        length: 4,
        location: "Otjikoto Lake, Namibia",
        diet: "Tubiflex, algae",
        image: "images/redmickey.jpg"
    }
];

export const useFish = () => {
    return fishCollection.slice();
}