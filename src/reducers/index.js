import {combineReducers} from 'redux';
import {promotions} from './promotions';
import {buffetPrices} from './buffetPrices';
import {bill} from './bill'

export default combineReducers({
  promotions:promotions,
  buffetPrices:buffetPrices,
  bill:bill
});
