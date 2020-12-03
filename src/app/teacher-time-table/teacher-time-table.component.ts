import { Component, OnInit } from "@angular/core";
import { TeacherServiceService } from "../Services/teacher-service.service";
import { TimeTable } from "../Model/TimeTable";

@Component({
  selector: "app-teacher-time-table",
  templateUrl: "./teacher-time-table.component.html",
  styleUrls: ["./teacher-time-table.component.css"],
})
export class TeacherTimeTableComponent implements OnInit {
  timetable: TimeTable;
  constructor(public ts: TeacherServiceService) {}

  ngOnInit() {
    this.ts.GetAllTimeTable().subscribe((x: any) => {
      this.timetable = x;
    });
  }

  Send() {
    this.ts.SendMailTimeTable(this.timetable).subscribe((x: string) => {
      if (x == "Message Sent") {
        alert("Mail Sent");
      } else {
        alert("Something Went Wrong :(");
      }
    });
  }
}

