import React, {Component} from 'react'
import {Image, Carousel, Grid, Row} from 'react-bootstrap'

class Home extends Component {
  render() {
    return(
      <div className="container text-center">
        <h1 className="text-info" >Wellcome to Buffet Shabu-Grill</h1>
        <Grid>
          <Row>
          <Carousel>
            <Carousel.Item>
              <img width={1200} height={'auto'} src="/images/friends-1283173_1280.jpg" />
              <Carousel.Caption>
                <h2 style={{color: 'white'}}>Buffet Shabu-Grill</h2>
                <h4 style={{color: 'white'}}>Most delicious food in The world awaits you.</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1200} height={'auto'} src="/images/food-2589234_1280.jpg" />
              <Carousel.Caption>
              <h2 style={{color: 'white'}}>Buffet Shabu-Grill</h2>
              <h4 style={{color: 'white'}}>Most delicious food in The world awaits you.</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1200} height={'auto'} src="/images/abundance-1868573_1280.jpg" />
              <Carousel.Caption>
              <h2 style={{color: 'white'}}>Buffet Shabu-Grill</h2>
              <h4 style={{color: 'white'}}>Most delicious food in The world awaits you.</h4>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Row>
        </Grid>
      </div>

    )
  }
}

export default Home
