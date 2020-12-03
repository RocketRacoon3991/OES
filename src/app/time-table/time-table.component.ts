import { Component, OnInit } from "@angular/core";
import { TeacherServiceService } from "../Services/teacher-service.service";
import { TimeTable } from "../Model/TimeTable";

@Component({
  selector: "app-time-table",
  templateUrl: "./time-table.component.html",
  styleUrls: ["./time-table.component.css"],
})
export class TimeTableComponent implements OnInit {
  timetable: TimeTable[];

  constructor(public ts: TeacherServiceService) {}

  ngOnInit() {
    this.ts.GetAllTimeTable().subscribe((x: any) => {
      this.timetable = x;
    });
  }
}
