export function books(state={
  promotions:[{
    _id:1,
    title:'this is the first promotion',
    description:'this is the first promotion description',
    img:''
  },
  {
    _id:2,
    title:'this is the second promotion',
    description:'this is the second promotion description',
    img:''
  }]
},action){
  switch (action.type) {
    case 'GET_PROMOTIONS':
    return {...state,promotions:[...state.promotions]}
      break;
  }
}
return state
}
