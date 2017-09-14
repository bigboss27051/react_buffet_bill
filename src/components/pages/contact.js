import React, {Component} from 'react'
import {Row, Col, Well} from 'react-bootstrap'

class Contact extends Component {
  render() {
    return(
      <div>
        <div className="container">
            <div className="jumbotron jumbotron-sm" >
                <Row>
                    <Col sm={12} lg={12}>
                        <h1 className="h2" >
                            Contact Us
                        </h1>
                    </Col>
                </Row>
            </div>
        </div>
        <div className="container">
            <Row>
                <Col sm={6}>
                    <Well>
                      <h3>E-mail</h3>
                      <p>buffet.shabugrill@mail.com</p>
                      <h3>Tel.</h3>
                      <p>+66 88 999 1234</p>
                      <h3>Address.</h3>
                      <p>88/2 Moo 1 Tambol Samed Amphur Muang Choburi.</p>
                      <h3>Postcode</h3>
                      <p>20000</p>
                    </Well>
                </Col>
                <Col sm={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96690.80542089987!2d29.864461132544537!3d40.77109282810726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f66644bfb9d%3A0x82690ee7586b7eb9!2zxLB6bWl0LCBLb2NhZWxp!5e0!3m2!1str!2str!4v1480782606579" width={565} height={430} frameborder="0" allowfullscreen></iframe>
                </Col>
            </Row>
        </div>
      </div>
    )
  }
}

export default Contact
