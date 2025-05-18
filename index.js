const EntranceGate = require('./models/gates/EntranceGate');
const ExitGate = require('./models/gates/ExitGate');
const ParkingLot = require('./models/parking/parkingLot');
const Car = require('./models/vehicles/car');
const Bike = require('./models/vehicles/Bike');
const PaymentService = require('./models/payments/paymentService');
const TicketService = require('./models/parking/Ticket'); // if you created it

const prompt = require('prompt-sync')();

async function main() {
  // 1. Initialize parking lot with floors and spots
  const parkingLot = new ParkingLot();
  parkingLot.initializeFloorsAndSpots(2, 4); // 2 floors, 4 spots each

  // 2. Initialize services
  const ticketService = new TicketService();
  const paymentService = new PaymentService();

  // 3. Initialize gates
  const entranceGate = new EntranceGate(parkingLot, ticketService);
  const exitGate = new ExitGate(parkingLot, paymentService);

  // Main loop: simulate entrance and exit
  while (true) {
    console.log('\nChoose an action:');
    console.log('1. Vehicle Entry');
    console.log('2. Vehicle Exit');
    console.log('3. Exit Application');
    const choice = prompt('Enter choice (1-3): ');

    if (choice === '1') {
      // Vehicle Entry
      entranceGate.processEntrance();
    } else if (choice === '2') {
      // Vehicle Exit
      const spotNumber = parseInt(prompt('Enter parking spot number: '), 10);
      const hoursStayed = parseInt(prompt('Enter hours stayed: '), 10);
      exitGate.processExit(spotNumber, hoursStayed);
    } else if (choice === '3') {
      console.log('Exiting app...');
      break;
    } else {
      console.log('Invalid choice! Try again.');
    }
  }
}

main();
