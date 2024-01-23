import React from 'react'
import { Card, Button, Form, Row, Col } from "react-bootstrap"

function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;

  return (
    <Card>
        <Card.Body>
            <img src={product.image} alt='' style={{ width: '100%', maxWidth: '300px' }}/>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>₦ {product.price}</Card.Text>
            <Button variant='primary'>Add To Cart</Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard