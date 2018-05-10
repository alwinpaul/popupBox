import { Injectable } from "@angular/core";
import { PopupBoxComponent } from "./popup-box/popup-box.component";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Injectable()
export class PopupBoxService {
  constructor(public dialog: MatDialog) {}

  alert(text) {
    const dialogRef = this.dialog.open(PopupBoxComponent, {
      data: {
        text: text,
        type: 'alert'
      }
    });

  }

  confirm(text, successCallback, errorCallback) {
    const dialogRef = this.dialog.open(PopupBoxComponent, {
      data: {
        text: text,
        successCallback: successCallback,
        errorCallback: errorCallback,
        type: 'confirm'
      }
    });
  }
}
