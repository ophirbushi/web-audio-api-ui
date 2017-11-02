import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _on = false;
  get on() { return this._on; }
  set on(value: boolean) {
    this._on = value;
    this.onOnValueChange(value);
  }

  private onOnValueChange(value: boolean) {
  }
}
