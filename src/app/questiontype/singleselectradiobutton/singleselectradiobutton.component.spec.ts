import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleselectradiobuttonComponent } from './singleselectradiobutton.component';

describe('SingleselectradiobuttonComponent', () => {
  let component: SingleselectradiobuttonComponent;
  let fixture: ComponentFixture<SingleselectradiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleselectradiobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleselectradiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
