import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewAttendanceComponent } from './teacher-view-attendance.component';

describe('TeacherViewAttendanceComponent', () => {
  let component: TeacherViewAttendanceComponent;
  let fixture: ComponentFixture<TeacherViewAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherViewAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherViewAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
