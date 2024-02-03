import { Button } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../dataStore/beebeautyProductstore";

import "./CartProduct.css";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    
    
    const productData = getProductData(id);

    return (
        <div className="emma">
            <img src={productData.image} alt="productimage" />
            <h3>{productData.title}</h3>
            
            
            <div className="emmaone">
            <p> ₦{productData.price}</p>
                <Button  size="sm" onClick={() => cart.addOneToCart(id)} className="button mx-2">+</Button>
                <p>{quantity}</p>
                <Button  size="sm" onClick={() => cart.removeOneFromCart(id)} className="button mx-2">-</Button>
            </div>
            <Button className="button" size="button sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <p>₦{ (quantity * productData.price) } </p>
            <hr></hr>
        </div>
    )
}

export default CartProduct;