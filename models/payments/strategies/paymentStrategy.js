//strategyPattern : PaymentStrategy interface + implementations
class PaymentStrategy {
    processPayment(amount) {
        console.log("processPayment() must be implemented by the strategy.");
    }
}

module.exports = PaymentStrategy