
export function promotions(state={
  promotions:[{
    id:1,
    title:'this is the first promotion',
    description:'this is the first promotion description',
    img:'/images/home1.jpg',
    coupon : '',
    persons : 0,
    discountPercent : 15
  },
  {
    id:2,
    title:'this is the second promotion',
    description:'this is the second promotion description',
    img:'/images/home1.jpg',
    coupon : '',
    persons : 0,
    discountPercent : 15
  }]
},action){
  switch (action.type) {
    case 'GET_PROMOTIONS':
      return {...state,promotions:[...state.promotions]}
    break;
  }
  return state
}
