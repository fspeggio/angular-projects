import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements: { name: string; type: string; content: string }[] = [
    { name: "Testserver", type: "server", content: "Just a test" },
  ];

  onServerAdded(data: { name: string; content: string }) {
    this.serverElements.push({
      type: "server",
      name: data.name,
      content: data.content,
    });
  }

  onBlueprintAdded(data: { name: string; content: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: data.name,
      content: data.content,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed!!";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
