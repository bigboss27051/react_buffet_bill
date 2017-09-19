import React ,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {findDOMNode} from 'react-dom'
import {InputGroup, DropdownButton, Col, Row, Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap'
import {calculateBill} from '../../services/calculate'
import {getPromotions} from '../../actions/promotions'
import {getBuffetPrices} from '../../actions/buffetPrices'
import {postBill} from '../../actions/bill'
import Bill from '../bills/Bill.js'

class CalculateForm extends Component {
  constructor(){
    super();
    this.state = {
      isShow:false
    }
  }
  componentDidMount(){
    this.props.getPromotions();
    this.props.getBuffetPrices();
  }

  handleSubmit(e){
    let promotions = this.props.promotions;
    const dataCalculateForm = {
      customers:findDOMNode(this.refs.customers).value,
      coupon:findDOMNode(this.refs.coupon).value,
      buffetPrice:findDOMNode(this.refs.buffetPrice).value
    }
    const bill = calculateBill(promotions,dataCalculateForm);
    this.props.postBill(bill);
    this.setState({isShow:true});
  }

  render(){
    const buffetPriceList = this.props.buffetPrices.map(buffetPrice => {
      return (
        <option key={buffetPrice._id} value={buffetPrice.price} >{buffetPrice.price}</option>
      )
    })

    return (
      <div className="container">
      <Well>
        <Row>
            <Panel className="panel-primary" header="Calculator">
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
                  {buffetPriceList}
                </FormControl>
              </FormGroup>
              <Button onClick={this.handleSubmit.bind(this)}>Calculate</Button>
            </Panel>
        </Row>
        <Row>
          {(this.state.isShow === true )?(<Bill />):('')}
        </Row>
      </Well>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    promotions:state.promotions.promotions,
    buffetPrices:state.buffetPrices.buffetPrices
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getPromotions:getPromotions,
    getBuffetPrices:getBuffetPrices,
    postBill:postBill
  },dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(CalculateForm)
