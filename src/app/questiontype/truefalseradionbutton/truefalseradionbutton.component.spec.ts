import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruefalseradionbuttonComponent } from './truefalseradionbutton.component';

describe('TruefalseradionbuttonComponent', () => {
  let component: TruefalseradionbuttonComponent;
  let fixture: ComponentFixture<TruefalseradionbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruefalseradionbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruefalseradionbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
