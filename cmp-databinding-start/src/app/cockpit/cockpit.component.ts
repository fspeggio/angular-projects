import { ElementRef, EventEmitter, ViewChild } from "@angular/core";
import { Component, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated = new EventEmitter<{ name: string; content: string }>();

  @Output()
  blueprintCreated = new EventEmitter<{ name: string; content: string }>();

  @ViewChild("serverContentInput")
  serverContentInput: ElementRef;

  // newServerName = "";
  // newServerContent = "";

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverNameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }
}
