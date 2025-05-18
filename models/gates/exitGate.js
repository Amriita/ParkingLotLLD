const ParkingLot = require('../parking/parkingLot')
const PaymentService = require('../payments/paymentService')
const Vehicle = require('../vehicles/VehicleFactory')


class ExitGate {
  constructor() {
  }

  processExit(spotNumber, hoursStayed) {
    // Find the spot
    const spot = ParkingLot.getSpotByNumber(spotNumber);

    if (!spot || !spot.isOccupied()) {
      console.log('Invalid or vacant spot!');
      return;
    }

    // Get the vehicle parked
    const vehicle = spot.getVehicle();
    if (!vehicle) {
      console.log('No vehicle found in the spot!');
      return;
    }

    // Calculate fee
    const fee = vehicle.calculateFee(hoursStayed);
    console.log({fee})

    // Process payment via payment service
    PaymentService.process(fee, 'UPI');

    // Vacate the spot
    ParkingLot.vacateSpot(spot, vehicle);

    console.log('Spot vacated successfully!');
  }
}

module.exports = ExitGate;
