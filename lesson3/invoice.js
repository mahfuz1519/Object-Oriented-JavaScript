

function createInvoice(services = {}) {
  let internetCharge = services.internet;
  if (internetCharge === undefined) {
    internetCharge = 5500;
  }

  let phoneCharge = services.phone;
  if (phoneCharge === undefined) {
    phoneCharge = 3000;
  }

  return {
    phone: phoneCharge,
    internet: internetCharge,

    total: function() {
      return this.phone+this.internet;      
    }
  }

}
/*
create payment

*/
function createPayment(services) {
  let phonePayment = 0 || services.phone;
  let internetPayment = 0 || services.internet;
  let amount = 0 || services.amount;

  return {
    total: function () {
      return this.amount || (this.phonePayment + this.internetPayment);      
    }
    
  }


}

function paymentTotal(payments) {
  return payments.reduce((sum, payment) => sum + payment.total(), 0);
}

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

console.log(paymentTotal(payments));      // => 24000

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700
