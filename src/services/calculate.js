export function calculateBill(promotions, dataCalculateForm){
let discount = 0;
let discountPercent = 0;
let total = 0;
let expenseForm = 0;
let promotionTitle = '';
let promotionDescription = '';

let discountPrice = promotions.filter(function(promotion) {
      expenseForm = dataCalculateForm.customers * dataCalculateForm.buffetPrice;

      if (dataCalculateForm.customers >= promotion.customers
        && (promotion.coupon.trim() === '' || dataCalculateForm.coupon.trim().toLowerCase() === promotion.coupon.trim().toLowerCase())
        && expenseForm > promotion.expense) {
          discountPercent = promotion.discountPercent;
          discount = ((expenseForm / 100) * discountPercent);
          let temp_expense_calculate = expenseForm - discount;
          console.log('promotionTitle',promotion.title);
          if (temp_expense_calculate < total || total === 0) {
            total = temp_expense_calculate;
            promotionTitle = promotion.title;

            promotionDescription = promotion.description;
          }

      }else {
          total = expenseForm;
      }
  });

  const bill = {
    customers:dataCalculateForm.customers,
    expense:expenseForm,
    discount:discount,
    total:total,
    promotionTitle:promotionTitle,
    promotionDescription:promotionDescription,
    discountPercent:discountPercent
  }

  return bill;

}
