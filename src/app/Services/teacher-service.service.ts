import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { getMaxListeners } from "process";
import { Ireport } from "../Model/Report";
import { TimeTable } from "../Model/TimeTable";

@Injectable({
  providedIn: "root",
})
export class TeacherServiceService {
  baseurl = "https://localhost:44362/api/Teacher/";

  constructor(public httpClient: HttpClient) {}

  ValidateTeacher(email: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.httpClient.post(
      this.baseurl + "ValidateTeachers/" + email + "/" + password,
      httpOptions
    );
  }

  GetAllReport() {
    return this.httpClient.get(this.baseurl + "GetAllReport");
  }

  GetAllAttendance() {
    return this.httpClient.get(this.baseurl + "GetAttendances");
  }

  GetAllTimeTable() {
    return this.httpClient.get(this.baseurl + "GetAllTimeTable");
  }

  AddTimeTable(time: TimeTable)
  {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-type": "application/json" }),
    };
    return this.httpClient.post<TimeTable>(
      this.baseurl + "AddTimetable/" + time,
      time,
      httpOptions
    );


  }

  



  SendMail(report: Ireport) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/josn" }),
    };
    return this.httpClient.post(
      this.baseurl + "SendMail/" + report,
      report,
      httpOptions
    );
  }

  SendMailTimeTable(timetable: TimeTable) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/josn" }),
    };
    return this.httpClient.post(
      this.baseurl + "SendTimeTable/" + timetable,
      timetable,
      httpOptions
    );
  }
}
