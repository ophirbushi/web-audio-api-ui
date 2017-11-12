import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneOscUiComponent } from './tone-osc-ui.component';

describe('ToneOscUiComponent', () => {
  let component: ToneOscUiComponent;
  let fixture: ComponentFixture<ToneOscUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToneOscUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneOscUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
