
const beebeautyProductstore = [
    {
        id: "1",
        title: "Whipped butter with tumeric",
        image: require('../assets/whipped_ butter_ with_tumeric.jpg'),
        price: "N 2,500"
    },
    {
        id: "2",
        title: "African black soap with lavender and honey",
        image: require('../assets/African_black_soap_lavender_honey.jpg'),
        price: "N 2,500"
    },
    {
        id: "3",
        title: "Sheapleasure whipped body and hair butter",
        image: require('../assets/Sheapleasure_whipped_body_and_hair_butter.jpg'),
        price: "N 3,000"
    },
    {
        id: "4",
        title: "Aromatherapeutic liquid african black soap",
        image: require('../assets/Aromatherapeutic_liquid_African_black_soap.jpg'),
        price: ""
    },
    {
        id: "5",
        title: "Brightening liquid african black soap",
        image: require('../assets/Brightening_liquid_African_Black_soap.jpg'),
        price: "N 4,000"
    },
    {
        id: "6",
        title: "African black soap lemongrass honey",
        image: require('../assets/Afican_black_soap_lemongrass_honey.jpg'),
        price: "N 5,000"
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