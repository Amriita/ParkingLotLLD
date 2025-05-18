class Ticket {
  constructor(parkingSpot, vehicle) {
    this.parkingSpot = parkingSpot; // Reference to the ParkingSpot object
    this.vehicle = vehicle;         // Reference to the Vehicle object
    this.startTime = new Date();    // Set current date-time
  }

  // Optional: getter to calculate duration (in minutes or hours)
  getDurationInMinutes() {
    const now = new Date();
    return Math.floor((now - this.startTime) / (1000 * 60)); // Convert ms to mins
  }

  // Optional: print ticket summary
  getSummary() {
    return {
      vehicleNumber: this.vehicle.vehicleNumber,
      spotId: this.parkingSpot.id,
      startTime: this.startTime,
      durationMinutes: this.getDurationInMinutes()
    };
  }
}

module.exports = Ticket;
