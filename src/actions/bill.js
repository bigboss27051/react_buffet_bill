
export function getBill(){
  return {
        type:'GET_BILL'
    }
}

export function postBill(bill){
  return {
    type:'POST_BILL',
    payload:bill
  }
}
