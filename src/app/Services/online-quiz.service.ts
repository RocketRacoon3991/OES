import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Ireport } from "../Model/Report";

@Injectable({
  providedIn: "root",
})
export class OnlineQuizService {
  questions: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;
  baseurl = "https://localhost:44362/api/student/";

  constructor(public httpClient: HttpClient) {}

  GetQuestions() {
    return this.httpClient.get(this.baseurl + "GetAllQuestions");
  }

  Attendance(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.httpClient.post(
      this.baseurl + "MarkAttendance/" + id,
      id,
      httpOptions
    );
  }

  GetAttendacneById(id: number) {
    return this.httpClient.get(this.baseurl + "GetAttendacneById/" + id);
  }

  GetAnswers() {
    var body = this.questions.map((x) => x.QuestionId);
    return this.httpClient.post(this.baseurl + "GetAnswers", body);
  }

  GetSubjectIdByName(sname: string) {
    return this.httpClient.get(this.baseurl + "GetSubjectIdByName/" + sname);
  }
  GetAllQuestionById(sid: Number) {
    return this.httpClient.get(this.baseurl + "GetQuestionsById/" + sid);
  }

  insertStudentReport(report: Ireport) {
    return this.httpClient.post(
      this.baseurl + "InsertStudentReport/" + report,
      report
    );
  }

  // insertLastLogin(date:Date){
  //   return this.httpClient.post(this.baseurl + "insertLastLogin/" + date);
  // }

  ValidateStudent(email: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.httpClient.post(
      this.baseurl + "ValidateStudent/" + email + "/" + password,
      httpOptions
    );
  }

  GetReportById(sid: number) {
    return this.httpClient.get(this.baseurl + "GetReportById/" + sid);
  }
}
