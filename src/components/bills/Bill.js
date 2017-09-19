import React, {Component} from 'react'
import {Well, Row, Col, Panel} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getBill} from '../../actions/bill'

class Bill extends Component {

  componentDidMount(){
    this.props.getBill();
  }

  render() {
    const bill = this.props.bill;
    return(
          <Panel className="panel-primary" header="Customer Bill">
            <Row>
              <Col xs={12} sm={6}>
                <p>Customers</p>
                <p>{(bill.promotionTitle === '') ? ('') : (bill.promotionTitle)} </p>
                <p>Discount</p>
                <p>Discount (Bath)</p>
                <p>Total</p>
              </Col>
              <Col xs={12} sm={6}>
                <p>{bill.customers} (Qty.)</p>
              {(bill.promotionTitle === '') ? ('') : (<p>&nbsp;</p>)}
                <p>{bill.discountPercent} %</p>
                <p>{bill.discount.toFixed(0)} Bath</p>
                <p>{bill.total.toFixed(0)} Bath</p>
              </Col>
            </Row>
          </Panel>
    )
  }
}

function mapStateToProps(state){
  return {
    bill:state.bill.bill
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getBill:getBill
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Bill)
