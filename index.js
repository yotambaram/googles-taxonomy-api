const taxonomyMatcher = require('google-taxonomy-matcher');



// eBay = "PC & Console VR Headsets", "Virtual Reality"
// Amazon = "video Games", "Virtual Reality"
// Walmart = "video Games", "Virtual Reality"

const productTilteArr = [
    "Oculus Quest 2 Advanced All-In-One Virtual Reality Headset 256GB NEW Other",
    "PC & Consoles VR Headsets Oculus Quest 2 Advanced All-In-One Virtual Reality Headset 256GB NEW Other",
    "video games Oculus Quest 2 Advanced All-In-One Virtual Reality Headset 256GB NEW Other",
    "PC & Consoles VR video games Oculus Quest 2 Advanced All-In-One Virtual Reality Headset 256GB NEW Other",
    "PC & Consoles VR Headsets Virtual Reality video Games Virtual Reality video Games Virtual Reality"
    //"Earbud Headphones Apple AirPods Pro"

    // "Graco Modes Nest Stroller | Baby Stroller with Height Adjustable Reversible Seat, Bassinet Mode, Extra Large Storage, Self Standing Fold and Lightweight Aluminum Frame, Spencer",
    // "WYOHLLVO Latest Version Stronger Outdoor Stove Portable Cast Iron Patio Cooking Burner High Pressure Gas Cooker with Metal Detachable Legs Stand Propane Burners for",
    // "Toy Rocket Launcher for kids – Shoots Up to 100 Feet – 8 Colorful Foam Rockets and Sturdy Launcher Stand With Foot Launch Pad - Fun Outdoor Toy for Kids - Gift Toys for Boys and Girls Age 3+ Years Old",
    // "Play-Doh Modeling Compound 10 Pack Case of Colors, Non-Toxic, Assorted Colors, 2 Oz Cans, Ages 2 & Up, (Amazon Exclusive), Multicolor",
    // "Fossil Women's Rachel Satchel Purse Handbag Fossil Women's Rachel Satchel Purse Handbag Fossil Women's Rachel Satchel Purse Handbag Fossil Women's Rachel Satchel Purse Handbag",
    // "Portable Charcoal Grill for Outdoor Barbecues, Camping, Backyard, Garden, Picnic, Beach Party, Small Mini Tabletop BBQ Smoker Grill, 16.5 H x 11.8 W x 14.1 L",
    // "NIA Portable Smoke Infuser Hand-held Cold Smoking Gun Small Kitchen Smoker for Food including Any Meat, Cheese & Cocktails",
    // "gb Pockit+ Lightweight Baby Stroller, Umbrella Stroller, Collapsible, Travel-Friendly, Folds into Backpack, Fits in Overhead Compartments, Reclining Seat, UPF50+ Sun Canopy, Satin Black",
    // "Smoke Tubes for Pellets, VACNITE 12'' Pellet Smoker Tube, Up to 6 Hours of Smoke,2 Caps and Bonus Brush, Cold Hot Smoking,Portable Hexagonal Smoker Tube Fits Any Electric Gas Charcoal Grill or Smokers",
]

// new taxonomyMatcher(<taxonomy locale>, <match threshold>)
// <taxonomy locale> = the locale extension of the taxonomy file from Google 
// <match threshold> = how close the search term must be to the matched result
const matcher = new taxonomyMatcher('en-US', 100)

async function quickstart(text) {

    let t = 8

   
    // matcher.match(<search term>, <minisearch opts>)
    // <search term> = Your unstructured search query, E.G. "product title + product category"
    // <minisearch opts> see -> https://www.npmjs.com/package/minisearch
    
    console.log("Input title", text)
    console.log("Google textaxonomyamony", matcher.match(text).full_path)



}


for (let i = 0; i < productTilteArr.length; i++) {
    console.log(i + 1)
    quickstart(productTilteArr[i])
}