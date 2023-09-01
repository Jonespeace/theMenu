import images from "./images";

const wines = [
    {
        title: 'Justin Right Angle',
        price: '$56',
        tags: 'CA | Bottle',
    },
    {
        title: 'Justin Isosceles',
        price: '$75',
        tags: 'CA | Bottle',
    },
    {
        title: 'Lange Twins Centennial Zinfandel',
        price: '$44',
        tags: 'CA | Bottle',
    },
    {
        title: 'Russian River Pliny The Elder',
        price: '$16',
        tags: 'CA | Pint',
    },
    {
        title: 'Peroni',
        price: '$12',
        tags: 'IT | Pint',
    },
];

const cocktails = [
    {
        title: 'Mai Tai',
        price: '$20',
        tags: 'Sailor Jerry Rum | Fresh Lime Juice |  Orange Curacao | Orgeat Syrup | Fresh Mint | Lime slice garnish',
    },
    {
        title: "Dirty Martini",
        price: '$16',
        tags: 'Gin | Dry Vermouth | Olive Brine | Green olive garnish',
    },
    {
        title: 'Margarita',
        price: '$10',
        tags: 'Tequila | Lime juice | Blue Agave | Lime garnish',
    },
    {
        title: 'Old Fashioned',
        price: '$31',
        tags: 'Bourbon | Simple syrup | Angostura Bitters | Orange peel garnish',
    },
    {
        title: 'Paper Plane',
        price: '$26',
        tags: 'Bourbon | Aperol | Amaro Nonino | Fresh Lemon Juice | Lemon peel garnish',
    },
];

const awards = [
    {
        imgUrl: images.award02,
        title: "Best New Restaurant",
        subtitle:"Savoring Culinary Excellence: A Gastronomic Journey Beyond Borders at Jones Cafe."
    },
    {
        imgUrl: images.award01,
        title: "Michelin Star",
        subtitle:"Elevating Dining to Art: A Michelin-Starred Culinary Symphony at Jones Cafe."
    },
    {
        imgUrl: images.award05,
        title: "James Beard Award",
        subtitle:"Celebrating Culinary Craftsmanship: A James Beard Award-Winning Culinary Haven at Jones Cafe."
    },
    {
        imgUrl: images.award03,
        title: "Zagat Rating",
        subtitle:"Local Flavor Perfected: A Top-Rated Culinary Gem by Zagat's Discerning Diners at Jones Cafe."
    },
];


const drinkData = { wines, cocktails, awards };


export default drinkData;