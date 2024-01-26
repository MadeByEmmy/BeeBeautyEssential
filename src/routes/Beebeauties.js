import React from 'react'
import {Row, Col,} from "react-bootstrap"
import "../components/Beebeauties.css"

//importing from the dataStore
import { beebeautyProductstore } from "../dataStore/beebeautyProductstore"

//importing the product card component
import ProductCard from "../components/ProductCard"

function Beebeauties() {
  return (
    <>
      <div className='beebeauties'>
            <h1>BeebeautiesPage</h1> 
            <Row xs={1} md={2} xl={4}  className='g-4'> {/*xs = mobile phone screen view, md = tablets view, xl = laptop view*/}
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

