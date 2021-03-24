const axios = require("axios");
// POST https://language.googleapis.com/v1beta2/documents:classifyText




if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}



const productTilteArr = [
    "WYOHLLVO Latest Version Stronger Outdoor Stove Portable Cast Iron Patio Cooking Burner High Pressure Gas Cooker with Metal Detachable Legs Stand Propane Burners for",
    "Graco Modes Nest Stroller | Baby Stroller with Height Adjustable Reversible Seat, Bassinet Mode, Extra Large Storage, Self Standing Fold and Lightweight Aluminum Frame, Spencer",
    "Toy Rocket Launcher for kids – Shoots Up to 100 Feet – 8 Colorful Foam Rockets and Sturdy Launcher Stand With Foot Launch Pad - Fun Outdoor Toy for Kids - Gift Toys for Boys and Girls Age 3+ Years Old",
    "Play-Doh Modeling Compound 10 Pack Case of Colors, Non-Toxic, Assorted Colors, 2 Oz Cans, Ages 2 & Up, (Amazon Exclusive), Multicolor",
    "Fossil Women's Rachel Satchel Purse Handbag Fossil Women's Rachel Satchel Purse Handbag Fossil Women's Rachel Satchel Purse Handbag Fossil Women's Rachel Satchel Purse Handbag",
    "Portable Charcoal Grill for Outdoor Barbecues, Camping, Backyard, Garden, Picnic, Beach Party, Small Mini Tabletop BBQ Smoker Grill, 16.5 H x 11.8 W x 14.1 L",
    "NIA Portable Smoke Infuser Hand-held Cold Smoking Gun Small Kitchen Smoker for Food including Any Meat, Cheese & Cocktails",
    "gb Pockit+ Lightweight Baby Stroller, Umbrella Stroller, Collapsible, Travel-Friendly, Folds into Backpack, Fits in Overhead Compartments, Reclining Seat, UPF50+ Sun Canopy, Satin Black",
    "Smoke Tubes for Pellets, VACNITE 12'' Pellet Smoker Tube, Up to 6 Hours of Smoke,2 Caps and Bonus Brush, Cold Hot Smoking,Portable Hexagonal Smoker Tube Fits Any Electric Gas Charcoal Grill or Smokers"
]
async function quickstart(textArr) {
    for (let i = 0; i < textArr.length; i++) {
        const text = textArr[i];
        
    
// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

// Prepares a document, representing the provided text
const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Classifies text in the document
const [classification] = await client.classifyText({document});
//console.log('Categories:');
classification.categories.forEach(category => {
  console.log(`${i+1} \n Title: ${text} \n Category: ${category.name} \n Confidence: ${category.confidence} \n `);
  
});
}
}
console.log('Categories:');
quickstart(productTilteArr)
// quickstart(productTilte2)
// quickstart(productTilte3)
// quickstart(productTilte4)
// quickstart(productTilte5)
