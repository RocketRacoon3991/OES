import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OnlineTestComponent } from "./online-test/online-test.component";
import { ResultComponent } from "./result/result.component";
import { TeacherComponentComponent } from "./teacher-component/teacher-component.component";
import { AddTeacherComponent } from "./add-teacher/add-teacher.component";
import { OnlineTestSelectionComponent } from "./online-test-selection/online-test-selection.component";
import { StudenLoginComponent } from "./studen-login/studen-login.component";
import { TeacherViewReportComponent } from "./teacher-view-report/teacher-view-report.component";
import { StudentReportsComponent } from "./student-reports/student-reports.component";
import { TeacherHomeComponent } from "./teacher-home/teacher-home.component";
import { TeacherViewAttendanceComponent } from "./teacher-view-attendance/teacher-view-attendance.component";
import { TimeTableComponent } from "./time-table/time-table.component";
import { ListTeacherComponent } from "./list-teacher/list-teacher.component";
import { UpdateteacherComponent } from "./updateteacher/updateteacher.component";
import { StudentViewAttendanceComponent } from "./student-view-attendance/student-view-attendance.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { ListStudentComponent } from "./list-student/list-student.component";
import { PrincipalHomePageComponent } from './principal-home-page/principal-home-page.component';
import { PrincipalLoginComponent } from './principal-login/principal-login.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { OnlinCoursesComponent } from './onlin-courses/onlin-courses.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TeacherTimeTableComponent } from './teacher-time-table/teacher-time-table.component';
import { TeacherOnlineCourseComponent } from './teacher-online-course/teacher-online-course.component';
import { AddTimetableComponent } from './add-timetable/add-timetable.component';

const routes: Routes = [
  { path: "online-test", component: OnlineTestComponent },
  { path: "addteacher", component: AddTeacherComponent },
  { path: "result", component: ResultComponent },
  { path: "teacherlogin", component: TeacherComponentComponent },
  { path: "onlinetestselection", component: OnlineTestSelectionComponent },
  { path: "studentlogin", component: StudenLoginComponent },
  { path: "teacherviewreport", component: TeacherViewReportComponent },
  { path: "studentreport", component: StudentReportsComponent },
  { path: "TeacherHome", component: TeacherHomeComponent },
  { path: "viewattendance", component: TeacherViewAttendanceComponent },
  { path: "timetable", component: TimeTableComponent },
  { path: "listteacher", component: ListTeacherComponent },
  { path: "updateteacher", component: UpdateteacherComponent },
  { path: "studentreportbyid", component: StudentReportsComponent },
  { path: "studentviewattendance", component: StudentViewAttendanceComponent },
  { path: "addstudent", component: AddStudentComponent },
  { path: "liststudent", component: ListStudentComponent },
  { path: "principalhome",component:PrincipalHomePageComponent},
  { path: "principallogin",component:PrincipalLoginComponent},
  { path: "updatestudent",component: UpdateStudentComponent},
  { path: "onlinecourse",component:OnlinCoursesComponent},
  { path: "studenthome", component:StudentHomeComponent},
  { path: "teachertimetable",component:TeacherTimeTableComponent},
  { path: "teacheronlinecourse",component:TeacherOnlineCourseComponent},
  { path: "addteachertimetable",component:AddTimetableComponent},
  
  {path:"",redirectTo:"principallogin", pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
