import { Button, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../dataStore/beebeautyProductstore";

import "./CartProduct.css"

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    
    
    const productData = getProductData(id);

    return (
        <div className="emma">
            <img src={productData.image} alt="productimage" />
            <h3>{productData.title}</h3>
            <p>{quantity} quantities * ₦{productData.price} </p>
            <p>₦{ (quantity * productData.price.toFixed(2)) } </p>
            <Col>
                <Button  size="sm" onClick={() => cart.addOneToCart(id)} className="mx-2">+</    Button>
                <Button  size="sm" onClick={() => cart.removeOneFromCart(id)} className="mx-2">-</Button>
            </Col>
            <Col><Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button></Col>
            <hr></hr>
        </div>
    )
}

export default CartProduct;