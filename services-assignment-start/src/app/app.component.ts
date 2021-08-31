import { Component, OnInit } from "@angular/core";
import { CounterService } from "./counter.service";
import { UsersService } from "./users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UsersService],
})
export class AppComponent implements OnInit {
  constructor(private counterService: CounterService) {}

  ngOnInit() {
    // this.counterService.fromActiveToInactiveEvent.subscribe((count) =>
    //   console.log("From Active to Inactive: " + count)
    // );
    // this.counterService.fromInactiveToActiveEvent.subscribe((count) =>
    //   console.log("From Inactive to Active: " + count)
    // );
  }
}
