import { EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";

export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  // fromActiveToInactiveEvent = new EventEmitter<number>();
  // fromInactiveToActiveEvent = new EventEmitter<number>();

  fromActiveToInactive() {
    this.activeToInactive++;
    console.log("activeToInactive " + this.activeToInactive);
  }

  fromInactiveToActive() {
    this.inactiveToActive++;
    console.log("inactiveToActive " + this.inactiveToActive);
  }
}
