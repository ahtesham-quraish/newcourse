import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectioncheckboxComponent } from './multiselectioncheckbox.component';

describe('MultiselectioncheckboxComponent', () => {
  let component: MultiselectioncheckboxComponent;
  let fixture: ComponentFixture<MultiselectioncheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiselectioncheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectioncheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
