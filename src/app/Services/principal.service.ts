import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ITeacher } from "../Model/ITeacher";
import { Observable } from "rxjs";
import { IStudent } from "../Model/Student";
import { Principal } from "../Model/Principal";

@Injectable({
  providedIn: "root",
})
export class PrincipalService {
  EmailId: string;
  authenticated = false;

  baseurl = "https://localhost:44362/api/Principal/";

  constructor(public httpClient: HttpClient) {}

  //   CreateTeacher(teacher: ITeacher) {
  //     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //     return this.httpClient.post(this.baseurl + "AddTeacher/" + teacher ,teacher,httpOptions);
  // }

  GetSubject(): Observable<any> {
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpClient.get(this.baseurl + "GetAllSubject");
  }

  AddStudent(student: IStudent) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-type": "application/json" }),
    };
    return this.httpClient.post<IStudent>(
      this.baseurl + "AddStudent/" + student,
      student,
      httpOptions
    );
  }

  DeleteStudent(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.httpClient.delete(
      this.baseurl + "DeleteStudent/" + id,
      httpOptions
    );
  }

  EditStudent(student: IStudent) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.httpClient.put(
      this.baseurl + "EditStudent/" + student,
      student,
      httpOptions
    );
  }

  GetStudentwithRoles() {
    return this.httpClient.get(this.baseurl + "GetStudentwithRoles");
  }

  GetAllRole(): Observable<any> {
    return this.httpClient.get(this.baseurl + "GetAllRole");
  }

  DeleteTeacher(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.httpClient.delete(
      this.baseurl + "DeleteTeacher/" + id,
      httpOptions
    );
  }

  EditTeacher(teacher: ITeacher) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.httpClient.put(
      this.baseurl + "EditTeacher/" + teacher,
      teacher,
      httpOptions
    );
  }

  GetTeacherWithSubjectName() {
    return this.httpClient.get(this.baseurl + "GetTeacherWithSubjectName");
  }
  // GetSubjectIdBySubjectName(subName: String) {
  //   // const httpOptions = {headers: new HttpHeaders({ "Content-type": "application/json" }),};
  //   return this.httpClient.get(this.baseurl + "GetSubjectIdBySubjectName/" + subName);
  // }

  // GetRoleIdByRoleName(roleName:String) {
  //   // const httpOptions = {headers: new HttpHeaders({ "Content-type": "application/json" }),};
  //   return this.httpClient.get(this.baseurl + "GetRoleIdByRoleName/" + roleName);
  // }

  AddTeacher(teacher: ITeacher) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-type": "application/json" }),
    };
    return this.httpClient.post<string>(
      this.baseurl + "AddTeacher/" + teacher,
      teacher,
      httpOptions
    );
  }

  GetPrincipal(EmailId, Password): Observable<Principal> {
    return this.httpClient.get<Principal>(
      this.baseurl + "GetPrincipal/" + EmailId + "/" + Password
    );
  }
  Authentication() {
    return (this.authenticated = true);
  }
}
