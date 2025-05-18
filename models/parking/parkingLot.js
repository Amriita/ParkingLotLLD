const Vehicle = require("../vehicles/vechile");
const BikeParkingSpot = require("./BikeParkingSpot");
const CarParkingSpot = require("./CarParkingSpot");
const ParkingFloor = require("./parkingFloor");

class ParkingLot {
  static floors = []

  initializeFloorsAndSpots(numFloors, spotsPerFloor) {
    for (let i = 0; i < numFloors; i++) {
      const floor = new ParkingFloor(i + 1);
      for (let j = 0; j < spotsPerFloor; j++) {
        // Alternate between Car and Bike spots
        if (j % 2 === 0) {
          floor.addSpot(new CarParkingSpot(j + 1));
        } else {
          floor.addSpot(new BikeParkingSpot(j + 1));
        }
      }
      ParkingLot.floors.push(floor);
      console.log({ Floors: ParkingLot.floors })
    }
  }

  getParkingSpots() {
    return this.spots;
  }

  // Find an available spot based on vehicle type
  static findAvailableSpot(vehicleType) {
    for (const floor of this.floors) {
      const spot = floor.findAvailableSpot(vehicleType);
      console.log({spot})
      if (spot) {
        return spot;
      }
    }
    return null;
  }

  // Park a vehicle in the lot
  static parkVehicle(vehicle) {
    console.log({ vehicle })
    const spot = this.findAvailableSpot(vehicle.type);
    console.log("parkVehicle", { spot })
    if (spot) {
      spot.parkVehicle(vehicle);
      console.log(`✅ Vehicle parked successfully in spot: ${spot.spotNumber}`);
      return spot;
    }
    console.log(`🚫 No parking spots available for ${vehicle.type}!`);
    return null;
  }

  // Vacate a specific parking spot
  static vacateSpot(spot, vehicle) {
    if (spot && spot.isOccupied() && spot.vehicle.licensePlate === vehicle.licensePlate) {
      spot.vacate();
      console.log(`🅿️ ${vehicle.type} vacated the spot: ${spot.spotNumber}`);
    } else {
      console.log(`⚠️ Invalid operation! Either the spot is vacant or the vehicle does not match.`);
    }
  }

  // Find a spot by its number
  static getSpotByNumber(spotNumber) {
    for (const floor of ParkingLot.floors) {
      const spot = floor.getParkingSpots().find(s => s.spotNumber === spotNumber);
      if (spot) return spot;
    }
    return null;
  }

  // Getter for floors
  static getFloors() {
    return ParkingLot.floors;
  }

  // Add a new floor
  static addFloor(floor) {
    ParkingLot.floors.push(floor);
  }
}

module.exports = ParkingLot;
