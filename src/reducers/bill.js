export function bill(state={bill:[]},action){
  switch (action.type) {
    case 'GET_BILL':
        return {...state,bill:{...state.bill}}
    break;
    case 'POST_BILL':
        return {...state,bill:{...action.payload}}
    break;
  }
  return state
}
