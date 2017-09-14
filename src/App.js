import React, { Component } from 'react';
import logger from 'redux-logger'
import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers/'
import thunk from 'redux-thunk'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PromotionSection from './components/promotions/PromotionSection.js'
import CalculateForm from './components/calculators/CalculatorsForm.js'
import Bill from './components/bills/Bill.js'
import Menu from './components/commons/Menu.js'
import Footer from './components/commons/Footer.js'
import Home from './components/pages/Home.js'
import Contact from './components/pages/Contact.js'


const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducers,middleware);

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Menu />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/promotion' component={PromotionSection} />
              <Route exact path='/calculate' component={CalculateForm} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
