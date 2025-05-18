class ParkingFloor {
    constructor(floorNumber) {
      this.floorNumber = floorNumber;
      this.spots = [];
    }
  
    addSpot(spot) {
      this.spots.push(spot);
    }
  
    findAvailableSpot(vehicleType) {
      console.log("parkungFloor", vehicleType)
      console.log({spots: this.spots})
      const result = this.spots.find(
        (spot) =>  spot.vehicleType.toUpperCase() === vehicleType.toUpperCase() &&
        spot.isFree()
      );
      console.log({result})
      return result;
    }

    getParkingSpots() {
        return this.spots;
    }
  }
  
  module.exports = ParkingFloor;
  