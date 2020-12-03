import { Component, OnInit } from "@angular/core";
import { OnlineQuizService } from "../services/online-quiz.service";

@Component({
  selector: "app-onlin-courses",
  templateUrl: "./onlin-courses.component.html",
  styleUrls: ["./onlin-courses.component.css"],
})
export class OnlinCoursesComponent implements OnInit {
  id: number;
  constructor(public os: OnlineQuizService) {}

  ngOnInit() {
    this.id = parseInt(localStorage.getItem("StudentId"));
    this.os.Attendance(this.id).subscribe((x:string)=>{
      if(x == "Attendance Marked"){
        alert("Attendance Marked for the day");
      }
    });
  }
}
