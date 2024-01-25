
const beebeautyProductstore = [
    {
        id: "1",
        title: "Whipped butter with tumeric",
        image: require('../assets/whipped_ butter_ with_tumeric_soap.jpg'),
        price: 3000
    },
    {
        id: "2",
        title: "African black soap with lavender and honey",
        image: require('../assets/African_black_soap_lavender_honey.jpg'),
        price: 3000
    },
    {
        id: "3",
        image: require('../assets/Sheapleasure_whipped_body_and_hair_butter.jpg'),
        title: "Sheapleasure whipped body and hair butter",
        price: 3000
    },
    {
        id: "4",
        image: require('../assets/Aromatherapeutic_liquid_African_black_soap.jpg'),
        title: "Aromatherapeutic liquid african black soap",
        price: 3000
    },
    {
        id: "5",
        image: require('../assets/Brightening_liquid_African_Black_soap.jpg'),
        title: "Brightening liquid african black soap",
        price: 3000
    },
    {
        id: "6",
        image: require('../assets/Afican_black_soap_lemongrass_honey.jpg'),
        title: "African black soap lemongrass honey",
        price: 3000
    }
]

function getProductData(id) {
    let productData = beebeautyProductstore.find(product => product.id === id)
    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export {beebeautyProductstore, getProductData }; // the allows me to give the arrays to any component in this project