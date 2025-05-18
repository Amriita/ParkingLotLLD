class ParkingSpot {
    constructor(spotNumber, vehicleType) {
        this.spotNumber = spotNumber;
        this.vehicleType = vehicleType;
        this.vehicle = null;
        this.occupied = false;
    }

    parkVehicle(vehicle) {
        this.vehicle = vehicle;
        this.occupied = true;
    }

    vacate() {
        this.vehicle = null;
        this.occupied = false;
    }

    isOccupied() {
        return this.occupied;
    }

    getVehicle() {
        return this.vehicle;
    }

    getSpotNumber() {
        return this.spotNumber;
    }

    // Meant to be overridden
    canParkVehicle(vehicle) {
        throw new Error('Method canParkVehicle() must be implemented in subclass');
    }
}

module.exports = ParkingSpot;
