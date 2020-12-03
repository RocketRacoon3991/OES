import { Component, OnInit } from "@angular/core";
import { OnlineQuizService } from "../services/online-quiz.service";
import { IStudent } from "../Model/Student";
import { TeacherServiceService } from "../Services/teacher-service.service";

@Component({
  selector: "app-student-reports",
  templateUrl: "./student-reports.component.html",
  styleUrls: ["./student-reports.component.css"],
})
export class StudentReportsComponent implements OnInit {
  StudentId: number;
  StudentReport: any;
  constructor(public os: OnlineQuizService, public ts: TeacherServiceService) {}

  ngOnInit() {
    this.StudentId = parseInt(localStorage.getItem("StudentId"));
    this.os.GetReportById(this.StudentId).subscribe((x) => {
      this.StudentReport = x;
      console.log(x + "b" + this.StudentId);
    });
  }
}
