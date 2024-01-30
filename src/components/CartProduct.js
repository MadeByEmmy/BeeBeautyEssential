import { Button, Col } from "react-bootstrap";
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
            <p>{quantity} items</p>
            <p>₦{ (quantity * productData.price.toFixed(2)) } </p>
            <Col sm="6">
                        <Button  size="sm" onClick={() => cart.addOneToCart(id)} className="mx-2">+</Button>
                        <Button  size="sm" onClick={() => cart.removeOneFromCart(id)} className="mx-2">-</Button>
                        <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            </Col>
            
            <hr></hr>
        </>
    )
}

export default CartProduct;