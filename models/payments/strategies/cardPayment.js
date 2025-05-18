const PaymentStrategy = require('./paymentStrategy');

class cardPayment extends PaymentStrategy {
  processPayment(amount) {
    console.log(`💳 Charging credit card ₹${amount}`);
    // Add credit card verification logic
  }
}

module.exports = cardPayment;
