import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from "@angular/material";

import { Mixer } from './mixer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  oscillatorTypes: OscillatorType[] = ['sine', 'sawtooth', 'square', 'triangle']; //'custom'

  private _on = false;
  get on() { return this._on; }
  set on(value: boolean) {
    this._on = value;
    this.onOnValueChange(value);
  }

  constructor(private mixer: Mixer) { }

  ngOnInit() {
  }

  private onOnValueChange(value: boolean) {
    value ? this.mixer.start() : this.mixer.stop();
  }

  onGainChange(e: MatSliderChange) {
    this.mixer.setGain(e.value);
  }

  onFrequencyChange(e: MatSliderChange) {
    this.mixer.setFrequency(e.value);
  }

  onOscillatorTypeChange(type: OscillatorType) {
    this.mixer.setOscillatorType(type);
  }
}
