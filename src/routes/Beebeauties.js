import React from 'react'
import {Row, Col} from "react-bootstrap"
import "../components/Beebeauties.css"
import { beebeautyProductstore } from "../dataStore/beebeautyProductstore"

//importing the product card component
import ProductCard from "../components/ProductCard"

function Beebeauties() {
  return (
    <>
      <div className='beebeauties'>
        <h1>BeebeautiesPage</h1>
        <Row xs={1} md={4} className='g-4'>
          {beebeautyProductstore.map((product, index) => (
            <Col align="center" key={index}>
              <ProductCard product={product}/>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default Beebeauties