import axios from 'axios'

 export function getBuffetPrices(){
   return function(dispatch){
    axios.get('/api/buffetprices')
    .then((response) => {
      dispatch({
        type:'GET_BUFFET_PRICE',
        payload:response.data
      })
    })
    .catch(function(err){
      dispatch({
        type:'GET_BUFFET_PRICE_REJECTED',
        payload:err
      })
    })
   }
 }
