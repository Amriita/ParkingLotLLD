const PaymentStrategy = require('./paymentStrategy');

class CashPayment extends PaymentStrategy {
  processPayment(amount) {
    console.log(`💵 Processing cash payment of ₹${amount}`);
    // Cash logic (maybe print receipt, etc.)
  }
}

module.exports = CashPayment;