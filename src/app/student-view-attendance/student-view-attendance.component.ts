import { Component, OnInit } from '@angular/core';
import { Attendance } from '../Model/Attendance';
import { OnlineQuizService } from '../services/online-quiz.service';

@Component({
  selector: 'app-student-view-attendance',
  templateUrl: './student-view-attendance.component.html',
  styleUrls: ['./student-view-attendance.component.css']
})
export class StudentViewAttendanceComponent implements OnInit {
  id:number;
  AttendanceList:any;
  constructor(public os:OnlineQuizService) { }

  ngOnInit() {
    this.id = parseInt(localStorage.getItem('StudentId'));
    this.os.GetAttendacneById(this.id).subscribe((x)=>{
      this.AttendanceList = x;
    })
  }

}
