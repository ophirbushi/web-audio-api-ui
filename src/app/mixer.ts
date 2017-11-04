import { Injectable } from '@angular/core';

@Injectable()
export class Mixer {
  context: AudioContext;
  gain: GainNode;
  oscillator: OscillatorNode;
  biquadFilter: BiquadFilterNode;

  constructor() {
    this.context = new AudioContext();

    this.gain = this.context.createGain()
    this.gain.gain.value = 1;

    this.oscillator = this.context.createOscillator();
    this.oscillator.type = 'sine';
    this.oscillator.frequency.value = 440;
    this.oscillator.start();

    this.biquadFilter = this.context.createBiquadFilter();
    this.biquadFilter.type = 'allpass';
  }

  start() {
    this.connectNodes([this.gain, this.oscillator]);
  }

  stop() {
    this.disconnectNodes([this.gain, this.oscillator]);
  }

  private connectNodes(audioNodes: AudioNode[]) {
    audioNodes.reduce<AudioNode>((prev, cur, index) => {
      if (prev) cur.connect(prev);
      else cur.connect(this.context.destination);
      return cur;
    }, null);
  }

  private disconnectNodes(audioNodes: AudioNode[]) {
    audioNodes.forEach(n => n.disconnect());
  }
}
