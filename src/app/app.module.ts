import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { TeacherComponentComponent } from "./teacher-component/teacher-component.component";
import { TeacherServiceService } from "./Services/teacher-service.service";
import { AddSubjectComponent } from "./add-subject/add-subject.component";
import { AddTeacherComponent } from "./add-teacher/add-teacher.component";
import { OnlineQuizService } from "./services/online-quiz.service";
import { OnlineTestComponent } from "./online-test/online-test.component";
import { ResultComponent } from "./result/result.component";
import { NgxPaginationModule } from "ngx-pagination";
import { OnlineTestSelectionComponent } from "./online-test-selection/online-test-selection.component";
import { StudenLoginComponent } from "./studen-login/studen-login.component";
import { TeacherViewReportComponent } from "./teacher-view-report/teacher-view-report.component";
import { from } from "rxjs";
import { StudentReportsComponent } from "./student-reports/student-reports.component";
import { SearchPipe } from "./search.pipe";
import { TeacherHomeComponent } from "./teacher-home/teacher-home.component";
import { TeacherViewAttendanceComponent } from "./teacher-view-attendance/teacher-view-attendance.component";
import { TimeTableComponent } from "./time-table/time-table.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ListTeacherComponent } from "./list-teacher/list-teacher.component";
import { UpdateteacherComponent } from "./updateteacher/updateteacher.component";
import { StudentNavbarComponent } from "./student-navbar/student-navbar.component";
import { StudentViewAttendanceComponent } from "./student-view-attendance/student-view-attendance.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { ListStudentComponent } from "./list-student/list-student.component";
import { PrincipalHomePageComponent } from "./principal-home-page/principal-home-page.component";
import { PrincipalLoginComponent } from "./principal-login/principal-login.component";
import { UpdateStudentComponent } from './update-student/update-student.component';
import { OnlinCoursesComponent } from './onlin-courses/onlin-courses.component';
import { PrincipalNavbarComponent } from './principal-navbar/principal-navbar.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TeacherTimeTableComponent } from './teacher-time-table/teacher-time-table.component';
import { TeacherOnlineCourseComponent } from './teacher-online-course/teacher-online-course.component';
import { AddTimetableComponent } from './add-timetable/add-timetable.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponentComponent,
    AddSubjectComponent,
    AddTeacherComponent,
    OnlineTestComponent,
    ResultComponent,
    OnlineTestSelectionComponent,
    StudenLoginComponent,
    TeacherViewReportComponent,
    StudentReportsComponent,
    SearchPipe,
    TeacherHomeComponent,
    TeacherViewAttendanceComponent,
    TimeTableComponent,
    NavbarComponent,
    ListTeacherComponent,
    UpdateteacherComponent,
    StudentNavbarComponent,
    StudentViewAttendanceComponent,
    AddStudentComponent,
    ListStudentComponent,
    PrincipalHomePageComponent,
    PrincipalLoginComponent,
    UpdateStudentComponent,
    OnlinCoursesComponent,
    PrincipalNavbarComponent,
    StudentHomeComponent,
    TeacherTimeTableComponent,
    TeacherOnlineCourseComponent,
    AddTimetableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    
    
    
  ],
  providers: [TeacherServiceService, OnlineQuizService],
  bootstrap: [AppComponent],
})
export class AppModule {}
