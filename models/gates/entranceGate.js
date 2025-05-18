//EntranceGate is responsible for vehicle entry and ticket generation.
// SRP (EntranceGate just manages entrance logic)

// Delegation (TicketService does ticketing)

const { log, saveLogsToFile } = require('../../logger');
const prompt = require('prompt-sync')();
const VehicleFactory = require('../vehicles/VehicleFactory');
const ParkingLot = require('../parking/parkingLot')

class EntranceGate {
  constructor() {
  }

  processEntrance() {
    const licensePlate = prompt('Enter the vehicle license plate: ');
    const vehicleType = prompt('Enter the vehicle type (Car or Bike): ');

    const vehicle = VehicleFactory.createVehicle(vehicleType, licensePlate);

    if (!vehicle) {
      log('❌ Invalid vehicle type! Only Car and Bike are allowed.');
      return;
    }

    const spot = ParkingLot.parkVehicle(vehicle);

    if (spot) {
      log(`✅ Vehicle parked successfully in spot: ${spot.spotNumber}`);
    } else {
      log('🚫 No available spots for the vehicle type.');
    }
  }
}

module.exports = EntranceGate;
saveLogsToFile()
