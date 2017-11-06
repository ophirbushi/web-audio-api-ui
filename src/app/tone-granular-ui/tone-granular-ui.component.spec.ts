import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToneGranularUiComponent } from './tone-granular-ui.component';

describe('ToneGranularUiComponent', () => {
  let component: ToneGranularUiComponent;
  let fixture: ComponentFixture<ToneGranularUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToneGranularUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToneGranularUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
