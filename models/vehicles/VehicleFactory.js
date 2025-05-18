const CarVehicle = require('./car');
const BikeVehicle = require('./Bike');

class VehicleFactory {
  static createVehicle(vehicleType, licensePlate) {
    if (vehicleType.toLowerCase() === 'car') {
      return new CarVehicle(licensePlate);
    } else if (vehicleType.toLowerCase() === 'bike') {
      return new BikeVehicle(licensePlate);
    }
    return null;
  }
}

module.exports = VehicleFactory;
