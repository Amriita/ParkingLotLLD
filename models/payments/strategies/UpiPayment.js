//Open/Closed Principle	 : Easily add new strategies (like WalletPayment)
//Single Responsibility	 : Each file/class does exactly one thing

const PaymentStrategy = require('./paymentStrategy');

class UpiPayment extends PaymentStrategy {
  processPayment(amount) {
    console.log(`📲 Paying ₹${amount} via UPI`);
    // UPI gateway logic
  }
}

module.exports = UpiPayment;
