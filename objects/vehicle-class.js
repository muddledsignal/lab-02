'use strict';

// Implement both Car and Motorcycle using a Javascript Class (in the vehicle-class.js file

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive() {
    return 'Moving Forward';
  }

  stop() {
    return 'Stopping';
  }
}

class Car extends Vehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(name) {
    super();
    this.name = name;
    this.wheels = 2;
  }

  wheelie() {
    return 'Whee!';
  }
}

class FlyingVehicle {
  constructor(name, wingPlacement) {
    this.name = name;
    this.wingPlacement = wingPlacement;
  }

  fly() {
    return 'Taking off';
  }

  land() {
    return 'Landing';
  }
}



module.exports = {Car, Motorcycle};
