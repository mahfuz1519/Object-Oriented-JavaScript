function createInvoice(services = {}) {
  let phoneCharge = services.phone || 3000;
  let internetCharge = services.internet || 5500;

  return {
    phone: phoneCharge,
    internet: internetCharge,

    total: function () {
      return this.phone + this.internet;
    }
  }
}

function createPayment(services = {}) {
  return {
    phonePayment : 0 || services.phone,
    internetPayment : 0 || services.internet,
    amount : 0 || services.amount,
    
    total: function() {
      return (this.phonePayment+this.internetPayment) || this.amount;
    }
    
  }

}

function paymentTotal(paymentsArray) {
  return paymentsArray.reduce((sum, payment) => sum + payment.total(), 0);
}
/*
[
  {
  phonePayment: 2000,
  internetPayment: 24242,
  amount: 834028402,

  total(),

  } 
]

*/
let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

let invoices = [];

function invoiceTotal(invoicesArr) {
  let total = 0;

  for (let idx = 0; idx < invoicesArr.length; idx += 1) {
    total += invoicesArr[idx].total();
  }
  return total;
}


invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000