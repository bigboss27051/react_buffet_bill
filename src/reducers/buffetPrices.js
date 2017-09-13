export function buffetPrices(state={buffetPrices:[]},action){
  switch (action.type) {
    case 'GET_BUFFET_PRICE':
      return {...state,buffetPrices:[...action.payload]}
    break;
  }
  return state
}
