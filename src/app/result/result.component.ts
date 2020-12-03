import { Component, OnInit } from "@angular/core";
import { OnlineQuizService } from "src/app/services/online-quiz.service";
import { Router } from "@angular/router";
import { ɵNgClassImplProvider__POST_R3__,getLocaleDateTimeFormat,} from "@angular/common";
import { Ireport } from "../Model/Report";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"],
})
export class ResultComponent implements OnInit {
  studentid:any;
  studentname:string;
  constructor(
    public onlineQuizService: OnlineQuizService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.studentname = localStorage.getItem('StudentFirstName');
    this.onlineQuizService.GetAnswers().subscribe((data: any) => {
      this.onlineQuizService.correctAnswerCount = 0;
      this.onlineQuizService.questions.forEach((e, i) => {
        if (e.ans == data[i]) this.onlineQuizService.correctAnswerCount++;
        e.Correct = data[i];
      });
    });
  }

  onSubmit() {
    let report = new Ireport();
    report.Score = this.onlineQuizService.correctAnswerCount;
    this.studentid =parseInt(localStorage.getItem('StudentId'));
    report.StudentId = this.studentid;
    report.SubjectId = parseInt(localStorage.getItem("SubjectId"));
    report.SubmittedDate = new Date();
    console.log(Date);
    this.onlineQuizService.insertStudentReport(report).subscribe((data) => {
      if (data == true) {
        alert("record inserted");
        this.router.navigate(['studentreport'])
      } else {
        alert("record insertion faild");
      }
    });
  }
}
