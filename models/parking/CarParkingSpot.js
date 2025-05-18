const ParkingSpot = require('./parkingSpot');

class CarParkingSpot extends ParkingSpot {
  constructor(spotNumber) {
    super(spotNumber, 'CAR'); 
    this.vehicle = null;
    this.occupied = false;
  }

  // Only allow bike vehicles
  canParkVehicle(vehicle) {
    return vehicle.type.toLowerCase() === 'car';
  }

  vacate() {
    this.vehicle = null;
    this.occupied = false;
  }
  
  isFree() {
    return !this.occupied;
  }
}

module.exports = CarParkingSpot;