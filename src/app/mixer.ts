import { Injectable } from '@angular/core';

@Injectable()
export class Mixer {
  context: AudioContext;
  gain: GainNode;
  oscillator: OscillatorNode;

  constructor() {
    this.context = new AudioContext();

    this.gain = this.context.createGain()
    this.gain.gain.value = .5;

    this.oscillator = this.context.createOscillator();
    this.oscillator.type = 'sine';
    this.oscillator.frequency.value = 440;
    this.oscillator.start();
  }

  setGain(value: number) {
    this.gain.gain.value = value;
  }

  setFrequency(value: number) {
    this.oscillator.frequency.value = value;
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
