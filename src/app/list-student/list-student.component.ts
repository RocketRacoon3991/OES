import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PrincipalService } from "../Services/principal.service";
import { IStudent } from "../Model/Student";

@Component({
  selector: "app-list-student",
  templateUrl: "./list-student.component.html",
  styleUrls: ["./list-student.component.css"],
})
export class ListStudentComponent implements OnInit {
  studentList: IStudent[];

  constructor(public ss: PrincipalService, public router: Router) {}


  

  ngOnInit(): void {
    this.ss.GetStudentwithRoles().subscribe((x: any) => {
      this.studentList = x;
      console.log(x);
    });
  }

  Edit(student: IStudent) {
    localStorage.setItem("studdata", JSON.stringify(student));
    console.log(JSON.parse(localStorage.getItem("studdata")));
    this.router.navigate(["updatestudent"]);
  }

  Delete(StudentId: number) {
    this.ss.DeleteStudent(StudentId).subscribe((x: number) => {
      if (x == 1) {
        alert("Record Deleted!");
        this.router.navigate(["liststudent"]);
        

        //this.GetAllStudents();
      } else {
        alert("something went wrong :(");
        localStorage.removeItem("studdata");
      }
    });
  }
}
