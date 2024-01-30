import { Button } from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../dataStore/beebeautyProductstore";


function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <img src={productData.image} alt="productimage" />
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <Button></Button>
        </>
    )
}

export default CartProduct;