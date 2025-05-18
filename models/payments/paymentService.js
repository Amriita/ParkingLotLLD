//Loose Coupling : PaymentService doesn't know which payment is used

const Payment = require('./payment');
const CashPayment = require('./strategies/cashPayment');
const CreditCardPayment = require('./strategies/cardPayment');
const UPIPayment = require('./strategies/UpiPayment');

class PaymentService {
  static getStrategy(mode) {
    switch (mode.toUpperCase()) {
      case 'CASH':
        return new CashPayment();
      case 'CARD':
        return new CreditCardPayment();
      case 'UPI':
        return new UPIPayment();
      default:
        throw new Error(`❌ Invalid payment mode: ${mode}`);
    }
  }

  static process(amount, mode) {
    const strategy = this.getStrategy(mode);   //Factory Method	 : getStrategy() acts like a mini factory for strategies
    const payment = new Payment(amount, strategy);
    payment.processPayment();
  }
}

module.exports = PaymentService;