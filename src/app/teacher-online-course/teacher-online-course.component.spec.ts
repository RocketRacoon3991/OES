import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherOnlineCourseComponent } from './teacher-online-course.component';

describe('TeacherOnlineCourseComponent', () => {
  let component: TeacherOnlineCourseComponent;
  let fixture: ComponentFixture<TeacherOnlineCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherOnlineCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherOnlineCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
