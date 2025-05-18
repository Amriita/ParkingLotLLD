class Payment {
    constructor(amount , paymentStrategy) {
        this.amount = amount
        this.paymentStrategy = paymentStrategy;
    }

    processPayment() {
        if(this.amount > 0) {
            this.paymentStrategy.processPayment(this.amount);
        }else {
            console.log("❌ Invalid payment amount.");
        }
    }
}

module.exports = Payment;