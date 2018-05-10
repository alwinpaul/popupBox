import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { PopupBoxComponent } from './popup-box/popup-box.component';
import { PopupBoxService } from './popup-box.service';


@NgModule({
  declarations: [
    AppComponent,
    PopupBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    PopupBoxService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupBoxComponent
  ]
})
export class AppModule { }
