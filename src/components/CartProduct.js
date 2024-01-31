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
        <div className="cartproduct" style={{width: '100%'}}>
            <img src={productData.image} alt="productimage" style={{ width: '50%'}} />
            <div className="product-tittle"><h3>{productData.title}</h3></div>
            <div className="subtotal"><p>{quantity} quantities * ₦{productData.price} </p></div>
            
            <div className="total"><p>₦{ (quantity * productData.price.toFixed(2)) } </p></div>
            <div className="controls">
                <Col sm="6">
                            <Button  size="sm" onClick={() => cart.addOneToCart(id)} className="mx-2">+</    Button>
                            <Button  size="sm" onClick={() => cart.removeOneFromCart(id)} className="mx-2">-</Button>
                            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
                </Col>
            </div>
            
            <hr></hr>
        </div>
    )
}

export default CartProduct;