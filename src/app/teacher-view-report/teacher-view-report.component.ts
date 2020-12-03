import { Component, OnInit } from "@angular/core";
import { TeacherServiceService } from "../Services/teacher-service.service";
import { Ireport } from "../Model/Report";

@Component({
  selector: "app-teacher-view-report",
  templateUrl: "./teacher-view-report.component.html",
  styleUrls: ["./teacher-view-report.component.css"],
})
export class TeacherViewReportComponent implements OnInit {
  Reports: any;
  constructor(public ts: TeacherServiceService) {}

  ngOnInit() {
    this.ts.GetAllReport().subscribe((x) => {
      this.Reports = x;
      console.log("hello" + x);
    });
  }

  Send(report: Ireport) {
    console.log("Mail is Coming" + report.Score);
    this.ts.SendMail(report).subscribe((x:string)=>{
      if(x == "Message Sent"){
        alert("Mail Sent");
      }
      else{
        alert("Something Went Wrong :(");
      }
    })
  }

}
