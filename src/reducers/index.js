import {combineReducers} from 'redux';
import {promotions} from './promotions';
import {buffetPrices} from './buffetPrices';

export default combineReducers({
  promotions:promotions,
  buffetPrices:buffetPrices
});
