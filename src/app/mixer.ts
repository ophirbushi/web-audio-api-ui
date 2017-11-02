import { Injectable } from '@angular/core';

@Injectable()
export class Mixer {
  context: AudioContext;
  gain: GainNode;
  oscillator: OscillatorNode;

  constructor() {
    this.init();
  }

  init() {
    this.context = new AudioContext();
    this.gain = this.context.createGain()
    this.oscillator = this.context.createOscillator();

    this.gain.gain.value = .5;
    this.oscillator.type = 'sine';
    this.oscillator.frequency.value = 440;
    this.gain.connect(this.context.destination);
    this.oscillator.start();
  }

  setGain(value: number) {
    this.gain.gain.setValueAtTime(value, 1);
  }
}
