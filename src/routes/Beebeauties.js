import React from 'react'
import {Row, Col} from "react-bootstrap"
import "../components/Beebeauties.css"
import { beebeautyProductstore } from "../dataStore/beebeautyProductstore"

function Beebeauties() {
  return (
    <>
      <div className='beebeauties'>
        <h1>BeebeautiesPage</h1>
        <Row xs={1} md={4} className='g-4'>
          <Col align="center">
            <h3>Products</h3>
          </Col>
          <Col align="center">
            <h3>Products</h3>
          </Col>
          <Col align="center">
            <h3>Products</h3>
          </Col>
          <Col align="center">
            <h3>Products</h3>
          </Col>
          <Col align="center">
            <h3>Products</h3>
          </Col>
          <Col align="center">
            <h3>Products</h3>
          </Col>
          <Col align="center">
            <h3>Products</h3>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Beebeauties