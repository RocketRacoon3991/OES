import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewReportComponent } from './teacher-view-report.component';

describe('TeacherViewReportComponent', () => {
  let component: TeacherViewReportComponent;
  let fixture: ComponentFixture<TeacherViewReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherViewReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherViewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
