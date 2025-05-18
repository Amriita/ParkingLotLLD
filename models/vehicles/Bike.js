const Vechile = require('./vechile');

//✅ The Bike class inherits from the Vehicle class.
class Bike extends Vechile {
    constructor(number) {
        super(number, 'BIKE');
    }

    calculateFee(hoursStayed) {
        const ratePerHour = 10; // ₹10/hour for bikes
        return hoursStayed * ratePerHour;
    }
}

module.exports = Bike;