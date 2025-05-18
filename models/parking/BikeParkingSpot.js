const ParkingSpot = require('./parkingSpot');

class BikeParkingSpot extends ParkingSpot {
  constructor(spotNumber) {
    super(spotNumber, 'Bike'); // Set vehicleType as "Bike"
    this.vehicle = null;
    this.occupied = false;
  }

  // Only allow bike vehicles
  static canParkVehicle(vehicle) {
    return vehicle.type.toLowerCase() === 'bike';
  }
  vacate() {
    this.vehicle = null;
    this.occupied = false;
  }
  isFree() {
    return !this.occupied;
  }
}

module.exports = BikeParkingSpot;
