import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewAttendanceComponent } from './student-view-attendance.component';

describe('StudentViewAttendanceComponent', () => {
  let component: StudentViewAttendanceComponent;
  let fixture: ComponentFixture<StudentViewAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentViewAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
