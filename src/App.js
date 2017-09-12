import React, { Component } from 'react';
import logger from 'redux-logger'
import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers/'
//import thunk from 'redux-thunk'
import PromotionSection from './components/promotions/PromotionSection.js'

const middleware = applyMiddleware(logger);
const store = createStore(reducers,middleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PromotionSection />
      </Provider>
    );
  }
}

export default App;
