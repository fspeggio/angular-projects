import { EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";

export class CounterService {
  constructor() {}

  fromActiveToInactive = 0;
  fromInactiveToActive = 0;

  fromActiveToInactiveEvent = new EventEmitter<number>();
  fromInactiveToActiveEvent = new EventEmitter<number>();
}
