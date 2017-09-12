import React, {Component} from 'react'
import {Grid, Row} from 'react-bootstrap'
import PromotionList from './PromotionList.js'

class PromotionSection extends Component {
  render() {
    return (
          <div>
            <PromotionList />
          </div>
    )
  }
}

export default PromotionSection
