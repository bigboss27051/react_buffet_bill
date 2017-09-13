import React ,{Component} from 'react'
import {InputGroup, DropdownButton, Col, Row, Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'


class CalculateForm extends Component {
  render(){
    return (
      <Well>
        <Row>
          <Col xs={12} sm={6}>
            <Panel>
              <FormGroup controlId='customers' validationState={this.props.validation} >
                <ControlLabel>Customers Qty.</ControlLabel>
                <FormControl
                  type='text'
                  placeholder='Enter Customers'
                  ref='customers' />
              </FormGroup>
              <FormGroup controlId='coupon' validationState={this.props.validation}>
                <ControlLabel>Coupon code</ControlLabel>
                <FormControl
                  type='text'
                  placeholder='Enter Coupon code'
                  ref='coupon' />
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Buffet Price</ControlLabel>
                <FormControl ref='buffetPrice' componentClass="select" placeholder="select">
                </FormControl>
              </FormGroup>
              <Button>Calculate !!!!</Button>
            </Panel>
          </Col>
        </Row>
      </Well>
    )
  }
}

export default CalculateForm
