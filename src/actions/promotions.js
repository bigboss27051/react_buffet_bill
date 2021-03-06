import axios from 'axios'

 export function getPromotions(){
   return function(dispatch){
    axios.get('/api/promotions')
    .then((response) => {
      dispatch({
        type:'GET_PROMOTIONS',
        payload:response.data
      })
    })
    .catch(function(err){
      dispatch({
        type:'GET_PROMOTIONS_REJECTED',
        payload:err
      })
    })
  }
}
