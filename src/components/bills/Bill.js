import React, {Component} from 'react'
import {Well, Row, Col, Panel} from 'react-bootstrap'

class Bill extends Component {
  render() {
    return(
      <Well>
          <Panel>
            <Row>
              <Col xs={12} sm={6}>
                <p>Customers (Qty.)</p>
                <p>Discount (percent)</p>
                <p>Discount (Bath)</p>
                <p>Total</p>
              </Col>
              <Col xs={12} sm={6}>
                <p>0</p>
                <p>15%</p>
                <p>20</p>
                <p>500</p>
              </Col>
            </Row>
          </Panel>
      </Well>
    )
  }
}
export default Bill
