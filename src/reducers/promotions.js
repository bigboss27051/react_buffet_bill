
export function promotions(state={promotions:[]},action){
  switch (action.type) {
    case 'GET_PROMOTIONS':
      return {...state,promotions:[...action.payload]}
    break;
  }
  return state
}
