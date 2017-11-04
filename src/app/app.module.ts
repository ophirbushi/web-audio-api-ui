import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';

import { MatSliderModule, MatButtonModule, MatCardModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';
import { AppComponent } from './app.component';
import { Mixer } from './mixer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
  providers: [Mixer],
  bootstrap: [AppComponent]
})
export class AppModule { }
