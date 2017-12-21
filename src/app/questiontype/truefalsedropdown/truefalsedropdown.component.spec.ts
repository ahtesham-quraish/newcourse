import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruefalsedropdownComponent } from './truefalsedropdown.component';

describe('TruefalsedropdownComponent', () => {
  let component: TruefalsedropdownComponent;
  let fixture: ComponentFixture<TruefalsedropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruefalsedropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruefalsedropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
