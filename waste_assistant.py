# AI Waste Segregation Assistant

waste_data = {
    "banana peel": "Wet Waste",
    "vegetable waste": "Wet Waste",
    "food waste": "Wet Waste",
    "plastic bottle": "Dry Waste",
    "newspaper": "Dry Waste",
    "cardboard": "Dry Waste",
    "mobile phone": "E-Waste",
    "laptop": "E-Waste",
    "charger": "E-Waste",
    "battery": "Hazardous Waste",
    "paint can": "Hazardous Waste"
}

print("===================================")
print(" AI Waste Segregation Assistant ")
print("===================================")

while True:
    item = input("\nEnter waste item (or type 'exit'): ").lower()

    if item == "exit":
        print("Thank you for using AI Waste Segregation Assistant!")
        break

    if item in waste_data:
        category = waste_data[item]
        print(f"\nWaste Category: {category}")

        if category == "Wet Waste":
            print("Dispose in Green Bin")
        elif category == "Dry Waste":
            print("Dispose in Blue Bin")
        elif category == "E-Waste":
            print("Submit to Authorized E-Waste Collection Center")
        elif category == "Hazardous Waste":
            print("Handle carefully and dispose at Hazardous Waste Facility")
    else:
        print("Item not found in database. Please try another item.")