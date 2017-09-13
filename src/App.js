import React, { Component } from 'react';
import logger from 'redux-logger'
import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers/'
import thunk from 'redux-thunk'
import PromotionSection from './components/promotions/PromotionSection.js'
import CalculateForm from './components/calculators/CalculatorsForm.js'
import Bill from './components/bills/Bill.js'

const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducers,middleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <PromotionSection />
          <CalculateForm />
          <Bill />
        </div>

      </Provider>
    );
  }
}

export default App;
