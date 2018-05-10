import { Component } from "@angular/core";
import { PopupBoxService } from "./popup-box.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  constructor(public popupService: PopupBoxService) {}

  openAlert() {
    this.popupService.alert("alert text");
  }

  openConfirm() {
    this.popupService.confirm(
      "confirm text",
      () => {
        console.log("on success callback");
      },
      () => {
        console.log("on error callback");
      }
    );
  }
}
