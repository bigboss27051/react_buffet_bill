export function calculate(promotions, dataCalculateForm){
  const promotionFromCouponId;
  const promotionFromCustomerId;
  const promotionFromExpenseId;

  var expenseFromCoupon = promotions.filter(function(promotion) {
    let exprenseForm = dataCalculateForm.customers * dataCalculateForm.buffetPrice;
    let discountPercent = promotion.coupon === dataCalculateForm.coupon ? promotion.discountPercent : 0;
    promotionFromCouponId = promotion.coupon === dataCalculateForm.coupon ? promotion.id : 0;
    return expenseResult = exprenseForm - ((exprenseForm / 100) * discountPercent);
  });

  var expenseFromCustomers = promotions.filter(function(promotion) {
    let exprenseForm = dataCalculateForm.customers * dataCalculateForm.buffetPrice;
    var discountPercent = dataCalculateForm.customers >== promotion.customers ? promotion.discountPercent : 0;
    promotionFromCustomerId = dataCalculateForm.customers >== promotion.customers ? promotion.id : 0;
    return expenseResult = exprenseForm - ((exprenseForm / 100) * discountPercent);
  });

  var expenseFromExpense = promotions.filter(function(promotion) {
    let exprenseForm = dataCalculateForm.customers * dataCalculateForm.buffetPrice;
    var discountPercent = exprenseForm >== promotion.expense ? promotion.discountPercent : 0;
    promotionFromExpenseId = exprenseForm >== promotion.expense ? promotion.id : 0;
    return expenseResult = exprenseForm - ((exprenseForm / 100) * discountPercent);
  });

  let minPrice = Math.min(expenseFromCoupon, expenseFromCustomers, expenseFromExpense);
  let promotionId;
  switch (minPrice) {
    case expenseFromCoupon:
        promotionMinPriceId = promotionFromCouponId;
      break;
    case expenseFromCustomers:
        promotionMinPriceId = promotionFromCustomerId;
      break;
    case expenseFromExpense:
        promotionMinPriceId = promotionFromExpenseId;
      break;
    default:
  }

  const bill = {

        }

}
