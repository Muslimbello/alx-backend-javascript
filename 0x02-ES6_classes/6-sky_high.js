// Let's import a  class from 5-building.js
import Building from './5-building';

// Responsible for creating SkyHigh that extends Building
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter and setter for sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  // getter and setter for floors
  get floors() {
    return this._floors;
  }

  set floors(floors) {
    this._floors = floors;
  }

  // Method which returns eviacuation warning message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
