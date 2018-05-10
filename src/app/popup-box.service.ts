import { Injectable } from '@angular/core';
import { PopupBoxComponent } from './popup-box/popup-box.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';

@Injectable()
export class PopupBoxService {
  constructor(public dialog: MatDialog) {}

  alert(text) {
    let dialogRef = this.dialog.open(PopupBoxComponent, {
      data: {
        'text': text
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  }
