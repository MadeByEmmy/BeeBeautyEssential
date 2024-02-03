import React from 'react'
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext"
import { useContext } from "react";

import "./ProductCard.css"

function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);

    // styling the Card 
    const cardStyle = {
      maxWidth: '300px',
      margin: '5px',
      padding: '5px',
      boxShadow: '0 4px 8px rgba(194, 245, 204, 0.5)',
      borderRadius: '8px',
    };


  return (
    <Card style={cardStyle}>
        <Card.Body>
            <img src={product.image} alt='' style={{ width: '100%', maxWidth: '300px' }}/>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>₦ {product.price}</Card.Text>
            { productQuantity > 0 ?
              <>
                  <Form as={Col} className='form'>
                      <Col className='emma' sm="6">
                        <Button  sm="6" onClick={() => cart.addOneToCart(product.id)} className="button mx-2">+</Button>
                        <Form.Label column="true" sm="6">Item: {productQuantity}</Form.Label>
                        <Button  sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="button mx-2">-</Button>
                      </Col>
                  </Form>
                  <Button variant='danger' onClick={() => cart.deleteFromCart(product.id)} className='my-2'>Remove from cart</Button>
              </>
              :
              <Button onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
            }
        </Card.Body>
    </Card>
  )
}

export default ProductCard