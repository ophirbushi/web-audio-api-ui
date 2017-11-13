import { Component, OnInit } from '@angular/core';
import { MatSliderChange, MatSlideToggleChange } from '@angular/material';
import { HttpClient } from "@angular/common/http";


import { promisify } from "./promisify";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  async ngOnInit() {
    // const player = await promisify(Tone.GrainPlayer, '/assets/file.wav');
    // player.grainSize = 0.04;
    // player.overlap = 0.04;
    // player.toMaster();
    // player.start();
  }

  // onBiquadFilterDetuneChange(e: MatSliderChange) {
  //   this.mixer.biquadFilter.detune.value = e.value;
  //   console.log(this.mixer.biquadFilter.detune.value);
  // }
}
