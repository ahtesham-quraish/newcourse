import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleselectdropdownComponent } from './singleselectdropdown.component';

describe('SingleselectdropdownComponent', () => {
  let component: SingleselectdropdownComponent;
  let fixture: ComponentFixture<SingleselectdropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleselectdropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleselectdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
