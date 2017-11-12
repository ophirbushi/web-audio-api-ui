import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import * as Tone from "tone";

@Component({
  selector: 'wap-tone-osc-ui',
  templateUrl: './tone-osc-ui.component.html',
  styleUrls: ['./tone-osc-ui.component.scss']
})
export class ToneOscUiComponent implements OnInit {

  filter;
  osc;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.osc = new Tone.PWMOscillator("Ab3").toMaster();
    debugger
  }
}
