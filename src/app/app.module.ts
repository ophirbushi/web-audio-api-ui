import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { MatSliderModule, MatButtonModule, MatCardModule, MatRadioModule, MatSlideToggleModule } from '@angular/material';
import { AppComponent } from './app.component';
import { Mixer } from './mixer';
import { ToneGranularUiComponent } from './tone-granular-ui/tone-granular-ui.component';
import { ToneOscUiComponent } from './tone-osc-ui/tone-osc-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    ToneGranularUiComponent,
    ToneOscUiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
