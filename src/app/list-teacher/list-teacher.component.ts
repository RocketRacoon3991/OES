import { Component, OnInit, Input } from "@angular/core";
import { PrincipalService } from "../Services/principal.service";
import { ITeacher } from "../Model/ITeacher";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-teacher",
  templateUrl: "./list-teacher.component.html",
  styleUrls: ["./list-teacher.component.css"],
})
export class ListTeacherComponent implements OnInit {
  teacherlist: ITeacher[];
  constructor(public ps: PrincipalService, public router: Router) {}

  ngOnInit() {
    this.GetAllTeachers();
  }

  GetAllTeachers() {
    this.ps.GetTeacherWithSubjectName().subscribe((x: any) => {
      this.teacherlist = x;

      //console.log(localStorage.setItem("teachdata", JSON.stringify(x)));
      //console.log(JSON.parse(localStorage.getItem("teachdata")));
    });
  }

  Edit(teacher: ITeacher) {
    localStorage.setItem("teachdata", JSON.stringify(teacher));

    this.router.navigate(["updateteacher"]);
  }

  Delete(TeacherId: number) {
    this.ps.DeleteTeacher(TeacherId).subscribe((x: number) => {
      if (x == 1) {
        alert("Record Deleted!");
        this.GetAllTeachers();
      } else {
        alert("something went wrong :(");
        localStorage.removeItem("teachdata")
      }
    });
  }
}
