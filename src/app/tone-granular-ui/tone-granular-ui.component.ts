import { Component, Input, OnInit, Inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import * as Tone from "tone";

@Component({
  selector: 'wap-tone-granular-ui',
  templateUrl: './tone-granular-ui.component.html',
  styleUrls: ['./tone-granular-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToneGranularUiComponent implements OnInit {
  ready = false;
  filter;
  player;

  @Input() url: string;
  @Input() title: string;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.filter = new Tone.Filter().toMaster();
    this.player = new Tone.GrainPlayer(this.url, this.onAudioLoaded.bind(this)).connect(this.filter);
    this.player.overlap = 0;
    this.player.grainSize = 0.75;
  }

  private onAudioLoaded() {
    this.ready = true;
    this.changeDetector.markForCheck();
    this.changeDetector.detectChanges();
  }
}
