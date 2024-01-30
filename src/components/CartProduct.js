import { Button } from "react-bootstrap";
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
            <img src={productData.image} alt="productimage" style={{ width: '100%'}} />
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>₦</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;