//Base class
class Vehicle {
    constructor(number, type) {
        this.number = number
        this.type = type
    }

    getVechileNumber() {
        return this.number;
    }

    getVechileType() {
        return this.type;
    }

    calculateFee(hoursStayed) {
        throw new Error("calculateFee() must be implemented by subclass");
    }
}
module.exports = Vehicle;