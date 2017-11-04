import { Component, OnInit } from '@angular/core';
import { MatSliderChange, MatSlideToggleChange } from "@angular/material";

import { Mixer } from './mixer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  oscillatorTypes: OscillatorType[] = ['sine', 'sawtooth', 'square', 'triangle']; //'custom'
  biquadFilterTypes: BiquadFilterType[] = ['allpass', 'bandpass', 'highpass', 'highshelf', 'lowpass', 'lowshelf', 'notch', 'peaking'];

  private _on = false;
  get on() { return this._on; }
  set on(value: boolean) {
    this._on = value;
    this.onOnValueChange(value);
  }

  constructor(private mixer: Mixer) { }

  ngOnInit() {
    this.mixer.biquadFilter.frequency;
  }

  private onOnValueChange(value: boolean) {
    value ? this.mixer.start() : this.mixer.stop();
  }

  onGainChange(e: MatSliderChange) {
    this.mixer.gain.gain.value = e.value;
  }

  onFrequencyChange(e: MatSliderChange) {
    this.mixer.oscillator.frequency.value = e.value;
  }

  onOscillatorTypeChange(type: OscillatorType) {
    this.mixer.oscillator.type = type;
  }

  onBiquadFilterToggle(e: MatSlideToggleChange) {
    if (e.checked) {
      this.mixer.oscillator.disconnect();
      this.mixer.biquadFilter.connect(this.mixer.gain);
      this.mixer.oscillator.connect(this.mixer.biquadFilter);
    } else {
      this.mixer.oscillator.disconnect();
      this.mixer.biquadFilter.disconnect();
      this.mixer.oscillator.connect(this.mixer.gain);
    }
  }

  onBiquadFilterFrequencyChange(e: MatSliderChange) {
    this.mixer.biquadFilter.frequency.value = e.value;
  }

  onBiquadFilterTypeChange(type: BiquadFilterType) {
    this.mixer.biquadFilter.type = type;
  }
}
