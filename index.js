function classifyWaste(){

    let item =
    document.getElementById("wasteItem")
    .value
    .toLowerCase();

    let wasteData = {

        "banana peel":"Wet Waste",
        "food waste":"Wet Waste",
        "vegetable waste":"Wet Waste",

        "plastic bottle":"Dry Waste",
        "newspaper":"Dry Waste",
        "cardboard":"Dry Waste",

        "mobile phone":"E-Waste",
        "laptop":"E-Waste",
        "charger":"E-Waste",

        "battery":"Hazardous Waste",
        "paint can":"Hazardous Waste"
    };
     wasteData = {

    // Wet Waste
    "banana peel":"Wet Waste",
    "apple peel":"Wet Waste",
    "orange peel":"Wet Waste",
    "vegetable waste":"Wet Waste",
    "food waste":"Wet Waste",
    "tea leaves":"Wet Waste",
    "egg shells":"Wet Waste",
    "fruit waste":"Wet Waste",
    "flower waste":"Wet Waste",
    "coconut shell":"Wet Waste",

    // Dry Waste
    "plastic bottle":"Dry Waste",
    "newspaper":"Dry Waste",
    "cardboard":"Dry Waste",
    "paper":"Dry Waste",
    "magazine":"Dry Waste",
    "plastic cover":"Dry Waste",
    "milk packet":"Dry Waste",
    "glass bottle":"Dry Waste",
    "aluminium can":"Dry Waste",
    "tin can":"Dry Waste",

    // E-Waste
    "mobile phone":"E-Waste",
    "smartphone":"E-Waste",
    "laptop":"E-Waste",
    "computer":"E-Waste",
    "keyboard":"E-Waste",
    "mouse":"E-Waste",
    "charger":"E-Waste",
    "earphones":"E-Waste",
    "printer":"E-Waste",
    "television":"E-Waste",

    // Hazardous Waste
    "battery":"Hazardous Waste",
    "paint can":"Hazardous Waste",
    "medicine":"Hazardous Waste",
    "chemical bottle":"Hazardous Waste",
    "pesticide container":"Hazardous Waste",
    "sanitary pads":"Hazardous Waste",
    "syringe":"Hazardous Waste",
    "thermometer":"Hazardous Waste",

    // Recyclable Waste
    "steel bottle":"Recyclable Waste",
    "glass jar":"Recyclable Waste",
    "plastic container":"Recyclable Waste",
    "metal scrap":"Recyclable Waste",
    "copper wire":"Recyclable Waste"
};

    let result =
    document.getElementById("result");

    if(item in wasteData){

        let category = wasteData[item];
        let disposal = "";

        if(category === "Wet Waste"){
            disposal = "Dispose in Green Bin";
        }

        else if(category === "Dry Waste"){
            disposal = "Dispose in Blue Bin";
        }

        else if(category === "E-Waste"){
            disposal =
            "Submit to Authorized E-Waste Center";
        }

        else if(category === "Hazardous Waste"){
            disposal =
            "Dispose at Hazardous Waste Facility";
        }

        result.innerHTML =
        `
        Waste Category: ${category}
        <br><br>
        ${disposal}
        `;
    }

    else{
        result.innerHTML =
        "Item Not Found!";
    }
}