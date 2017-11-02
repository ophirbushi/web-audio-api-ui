import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from "@angular/material";

import { Mixer } from './mixer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _on = false;
  get on() { return this._on; }
  set on(value: boolean) {
    this._on = value;
    this.onOnValueChange(value);
  }

  gain: number = 0.5;

  constructor(private mixer: Mixer) { }

  ngOnInit() {
  }

  private onOnValueChange(value: boolean) {
    value ? this.mixer.oscillator.connect(this.mixer.gain) : this.mixer.oscillator.disconnect();
  }

  onGainChange(e: MatSliderChange) {
    this.mixer.setGain(e.value);
  }
}
