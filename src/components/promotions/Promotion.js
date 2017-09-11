import React, {Component} from 'react'
import {Thumbnail} from 'react-bootstrap'

class Promotion extends Component {
  render(){
    const promotion = this.props.promotion;
    console.log('promotion',promotion);
    return (
      <div>
        <Thumbnail src={(promotion.img === null || promotion.img === '' )?('/images/no_image.png') : (promotion.img) } alt="242x200">
          <h3>promotion.title</h3>
          <p>promotion.description</p>
        </Thumbnail>
      </div>
    )
  }
}

export default Promotion
