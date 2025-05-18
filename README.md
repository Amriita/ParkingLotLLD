### Parking Lot System (LLD)

🧩 Low-Level Design Diagram (LLD)
The architecture of the Parking Lot System is visualized using an LLD Class Diagram created with Excalidraw:

📌 🔗 LLD Diagram on Excalidraw : [ https://excalidraw.com/#json=_8tnYCskZJPjjsgLBhFDO,uihC7HPEc-wjCosErRk7Bw ]
 

📷 Embedded Diagram

Note: Ensure that the parking-lot-lld.png image is placed in the assets directory of your repository.

🔍 Highlights:
Class Relationships: Illustrates the relationships between Vehicle, ParkingSpot, ParkingFloor, ParkingLot, and EntranceGate.

Inheritance Hierarchy: Shows how Car and Bike inherit from Vehicle, and how CarParkingSpot and BikeParkingSpot inherit from ParkingSpot.

Composition: Demonstrates "has-a" relationships, such as ParkingLot containing multiple ParkingFloors, and each ParkingFloor containing multiple ParkingSpots.

This diagram provides a clear visual representation of the system's structure, aiding in understanding and further development.


### 🚧 System Design Concepts Used
This project implements a fully modular Parking Lot System in Node.js, following key System Design and OOP principles. Below is a detailed explanation of the design patterns and concepts used:

1. ✅ Single Responsibility Principle (SRP)
Each class has one clear purpose:
* EntranceGate.js: Handles vehicle entry.
* Vehicle.js, Car.js, Bike.js: Represent vehicles with their fee logic.
* ParkingSpot.js, CarParkingSpot.js, BikeParkingSpot.js: Handle parking spot state and operations.

2. ✅ Factory Design Pattern
Used in: VehicleFactory.js
Encapsulates creation logic:
```
VehicleFactory.createVehicle('CAR', 'MH12AB1234');
```
Why? So new vehicle types (e.g., Truck) can be added without modifying gate logic.

3. ✅ Inheritance & Polymorphism
Vehicle is the abstract base class.
* Car, Bike extend Vehicle and implement calculateFee(hoursStayed
* ParkingSpot base class is extended by CarParkingSpot, BikeParkingSpot
* Allows uniform handling of vehicles/spots with custom logic

4. ✅ Composition Over Inheritance
* ParkingLot has multiple ParkingFloors.
* ParkingFloor has multiple ParkingSpots.
* ParkingSpot holds a Vehicle when occupied.
* Models real-world relationships using "has-a" over "is-a".

5. ✅ Encapsulation
ParkingSpot handles its own internal state:
```
spot.parkVehicle(vehicle);
spot.vacate();
spot.isFree();
```
State like occupied or vehicle is not manipulated directly from outside.

6. ✅ Delegation
Responsibilities are delegated:

* EntranceGate delegates parking logic to ParkingLot.
* ParkingLot delegates spot searching to ParkingFloor.

This keeps code modular and responsibilities cleanly separated.

7. ✅ Abstract Class Simulation (JavaScript)
Vehicle.js prevents direct instantiation:
```
if (new.target === Vehicle) {
  throw new Error("Cannot instantiate abstract class Vehicle");
}
```
Ensures only child classes (Car, Bike) are used directly.

8. ✅ Open-Closed Principle (OCP)
Easily extendable without changing existing code:
* Add a new vehicle type: just extend Vehicle
* Add a new floor: use ParkingLot.addFloor()

9. ✅ Static vs Instance Design
ParkingLot uses static methods and properties to mimic a singleton:

```js
ParkingLot.floors = [];
ParkingLot.parkVehicle(vehicle);
```

Assumes a single parking lot globally. Can be converted to instance-based for multi-lot support.

10. ✅ Layered Architecture (Conceptual)
```| Layer          | Responsibility                                       |
| -------------- | ---------------------------------------------------- |
|* Input          | `index.js` CLI using `prompt-sync`                   |
|* Controller     | `EntranceGate.js`                                    |
|* Business Logic | `ParkingLot.js`, `ParkingFloor.js`, `ParkingSpot.js` |
|* Data Models    | `Vehicle.js`, `Ticket.js`                            |```
