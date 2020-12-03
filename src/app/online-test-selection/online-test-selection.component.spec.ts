import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestSelectionComponent } from './online-test-selection.component';

describe('OnlineTestSelectionComponent', () => {
  let component: OnlineTestSelectionComponent;
  let fixture: ComponentFixture<OnlineTestSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineTestSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTestSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
