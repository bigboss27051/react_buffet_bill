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
            <img width={1200} height={300} alt="900x300" className="img-responsive center-block" src={(promotion.img === '' || promotion.img === null) ? ('/images/no_image.png') : (promotion.img )} />
            <Carousel.Caption>
              <h2 style={{color: 'white'}}>{promotion.title}</h2>
              <h4 style={{color: 'white'}}>{promotion.description}</h4>
            </Carousel.Caption>
        </Carousel.Item>
      )
    })
    return (
      <div className="text-center" style={{padding:10}}>
        <h1 className="text-primary">Hot Promotion !!!</h1>
        <Grid>
          <Row>
            <Carousel>
              {promotionList}
            </Carousel>
          </Row>
        </Grid>
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
