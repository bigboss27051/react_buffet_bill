import React, {Component} from 'react'
import {Grid, Row, Carousel} from 'react-bootstrap'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getPromotions} from '../../actions/promotions'

class PromotionList extends Component {
  componentDidMount(){
      this.props.getPromotions();
  }

  render() {
    const promotionList = this.props.promotions.map(promotion => {
      return (
        <Carousel.Item key={promotion._id}>
            <img width={900} height={300} alt="900x300" src={(promotion.img === '' || promotion.img === null) ? ('/images/no_image.png') : (promotion.img )} />
            <Carousel.Caption>
              <h3>{promotion.title}</h3>
              <p>{promotion.description}</p>
            </Carousel.Caption>
        </Carousel.Item>
      )
    })
    return (
      <Grid>
        <Row>
          <Carousel>
            {promotionList}
          </Carousel>
        </Row>
    </Grid>
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
