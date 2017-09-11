import React, {Component} from 'react'
import Promotion from './Promotion.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getPromotions} from '../../actions/promotions'

class PromotionList extends Component {
  componentDidMount(){
      this.props.getPromotions();
  }
  render() {
    let data = this.props.promotions
    console.log('data',data);
    return (
      <div>
        {
          this.props.promotions.map( promotion =>
            <Promotion key={promotion._id} promotion={promotion} />
          )
        }
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    promotions:state.promotions.promotions
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getPromotions:getPromotions
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PromotionList);
