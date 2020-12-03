import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PrincipalService } from "src/app/Services/principal.service";
import { ISubject } from "../Model/Subject";
import { IUserRole } from "../Model/Userrole";
import { ITeacher } from "../Model/ITeacher";
import { Router } from '@angular/router';

@Component({
  selector: "app-add-teacher",
  templateUrl: "./add-teacher.component.html",
  styleUrls: ["./add-teacher.component.css"],
})
export class AddTeacherComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;

  constructor(public formbuilder: FormBuilder, public _ps: PrincipalService, public router:Router) {}

  //public ListItems: Array<String> = [];
  ListSubject: ISubject[];
  ListRole: IUserRole[];
  subjectId: any;
  roleId: number;

  ngOnInit() {
    this.addForm = this.formbuilder.group({
      FirstName: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
      LastName: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
      EmailId: ["",[Validators.required,Validators.pattern("^[a-zA-Z0-9]{1,35}@[a-zA-Z]{1,10}.com$")]],
      MobileNo: ["", [Validators.required, Validators.maxLength(10)]],
      Gender: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
      JoiningDate: ["", Validators.required],
      RoleId: ["",Validators.required],
      SubjectId: ["",Validators.required],
      Password: ["",[Validators.required,Validators.minLength(8)]],
      Qualification: ["",[Validators.required, Validators.pattern("^[a-zA-Z ]{1,20}$")]],
      Salary: ["", [Validators.required, Validators.pattern("^[0-9]*")]],
});

    this._ps.GetSubject().subscribe((data) => {
      this.ListSubject = data;
    });

    this._ps.GetAllRole().subscribe((data) => {
      this.ListRole = data;
    });
  }

  // DropDown() {
  //   return this._ps.GetSubject().subscribe(data =>{
  //     console.log(data);
  //     data.forEach(element => {
  //       this.ListItems.push(element['SubjectName']);
  //     });
  //   })
  // }

  onSubmit() {
    this.roleId = this.addForm.controls.RoleId.value;

    var teacher = new ITeacher();
    teacher.FirstName = this.addForm.controls.FirstName.value;
    teacher.LastName = this.addForm.controls.LastName.value;
    teacher.EmailId = this.addForm.controls.EmailId.value;
    teacher.MobileNo = this.addForm.controls.MobileNo.value;
    teacher.SubjectId = this.addForm.controls.SubjectId.value;
    teacher.Qualification = this.addForm.controls.Qualification.value;
    teacher.Salary = this.addForm.controls.Salary.value;
    teacher.Gender = this.addForm.controls.Gender.value;
    teacher.JoiningDate = this.addForm.controls.JoiningDate.value;
    teacher.RoleId = this.addForm.controls.RoleId.value;
    console.log(" Hello from the other side" + teacher.RoleId);
    teacher.Password = this.addForm.controls.Password.value;

    this._ps.AddTeacher(teacher).subscribe((data: string) => {
      if (data != null) {
        alert("Inserted" + " " + data);
        this.router.navigate(["listteacher"]);
      } else {
        alert("Error");
      }
    });
  }

  // GetSubjectIdBySubjectName(): number {
  //   debugger;
  //   this._ps
  //     .GetSubjectIdBySubjectName(this.addForm.controls.SubjectId.value)
  //     .subscribe((data: any) => {
  //       this.subjectId = data;
  //       console.log("Subname" + data);
  //     });
  //   return this.subjectId;
  // }

  // GetSubjectIdBySubjectName(): number {
  //   var SubjectName = this.addForm.controls.SubjectId.value;
  //   this._ps.GetSubjectIdBySubjectName(SubjectName).subscribe((x) => {
  //     this.subjectId = x;
  //   });
  //   return this.subjectId;
  // }

  // GetRoleIdByRoleName(): Number {
  //   this._ps
  //     .GetSubjectIdBySubjectName(this.addForm.controls.RoleId.value)
  //     .subscribe((data: any) => {
  //       this.roleId = data;
  //     });
  //   return this.roleId;
  //}
}
