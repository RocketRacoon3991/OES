import { Component, OnInit } from '@angular/core';
import { TeacherServiceService } from '../Services/teacher-service.service';
import { Attendance } from '../Model/Attendance';


@Component({
  selector: 'app-teacher-view-attendance',
  templateUrl: './teacher-view-attendance.component.html',
  styleUrls: ['./teacher-view-attendance.component.css']
})
export class TeacherViewAttendanceComponent implements OnInit {

  attendance:Attendance[]

  constructor(public ts:TeacherServiceService) { }

  ngOnInit() {

    this.ts.GetAllAttendance().subscribe((x:any)=>{
      this.attendance = x;
    })
  }

}
