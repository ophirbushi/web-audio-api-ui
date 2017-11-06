import { Component, OnInit } from '@angular/core';
import { MatSliderChange, MatSlideToggleChange } from '@angular/material';
import { HttpClient } from "@angular/common/http";


import * as Tone from "tone";

function concatTypedArrays(a, b) { // a, b TypedArray of same type
  var c = new (a.constructor)(a.length + b.length);
  c.set(a, 0);
  c.set(b, a.length);
  return c;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  async  ngOnInit() {
    var audioCtx = new AudioContext();
    var source = audioCtx.createBufferSource();

    const data = await this.httpClient.get('/assets/file.wav', { responseType: 'arraybuffer' }).toPromise()

    const grains = [];
    const grainSize = 500000;

    var a = Tone.GrainPlayer;
    debugger;
    // for (let i = 0; i < 100; i++) {
    //   grains.push(data.slice(i, i + grainSize));
    // }

    // let intArray;
    // const c = grains.reduce((acc, current) => {
    //   intArray = new Int16Array(current);
    //   return concatTypedArrays(acc, intArray);
    // }, new Int16Array(0));

    const decoded = await audioCtx.decodeAudioData(data)
    source.buffer = decoded;

    source.loop = true;

    // source.connect(analyser);
    source.connect(audioCtx.destination);
    // biquadFilter.connect(convolver);
    // convolver.connect(gainNode);
    // gainNode.connect(audioCtx.destination);
    source.start(0);

  }

}
