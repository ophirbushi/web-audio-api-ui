import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';

import * as Tone from "tone";


@Component({
  selector: 'wap-tone-granular-ui',
  templateUrl: './tone-granular-ui.component.html',
  styleUrls: ['./tone-granular-ui.component.scss']
})
export class ToneGranularUiComponent implements OnInit {
  ready = false;
  player;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.player = new Tone.GrainPlayer('/assets/chimes.mp3', this.onAudioLoaded.bind(this)).toMaster();
  }

  private onAudioLoaded() {
    this.ready = true;
    this.changeDetector.detectChanges();
  }
}
