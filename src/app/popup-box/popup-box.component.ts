import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-popup-box",
  templateUrl: "./popup-box.component.html",
  styleUrls: ["./popup-box.component.css"]
})
export class PopupBoxComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PopupBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  closePopup(): void {
    this.dialogRef.close();
  }

}
