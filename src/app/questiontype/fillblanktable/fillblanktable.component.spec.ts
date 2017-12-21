import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillblanktableComponent } from './fillblanktable.component';

describe('FillblanktableComponent', () => {
  let component: FillblanktableComponent;
  let fixture: ComponentFixture<FillblanktableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillblanktableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillblanktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
