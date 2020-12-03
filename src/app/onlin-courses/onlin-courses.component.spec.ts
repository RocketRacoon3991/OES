import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinCoursesComponent } from './onlin-courses.component';

describe('OnlinCoursesComponent', () => {
  let component: OnlinCoursesComponent;
  let fixture: ComponentFixture<OnlinCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
