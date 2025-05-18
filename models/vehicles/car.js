const Vechile = require('./vechile');

//✅ The Car class inherits from the Vehicle class.
class car extends Vechile {
    constructor(number) {
        super(number, 'CAR');
    }

    calculateFee(hoursStayed) {
        const ratePerHour = 20; // ₹20/hour for cars
        return hoursStayed * ratePerHour;
    }
}

module.exports = car;