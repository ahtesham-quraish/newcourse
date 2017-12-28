import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingldropdownComponent } from './singldropdown.component';

describe('SingldropdownComponent', () => {
  let component: SingldropdownComponent;
  let fixture: ComponentFixture<SingldropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingldropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingldropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
