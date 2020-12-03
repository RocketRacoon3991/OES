import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ITeacher } from "../Model/ITeacher";
import { PrincipalService } from "../Services/principal.service";
import { IStudent } from "../Model/Student";
import { Router } from '@angular/router';

@Component({
  selector: "app-updateteacher",
  templateUrl: "./updateteacher.component.html",
  styleUrls: ["./updateteacher.component.css"],
})
export class UpdateteacherComponent implements OnInit {
  teach: ITeacher;
  ListSubject: IStudent[];
  addForm: FormGroup;
  constructor(public fb: FormBuilder, public ps: PrincipalService,public router:Router) {}

  ngOnInit() {
    console.log("Hi" + JSON.parse(localStorage.getItem("teachdata")));
    this.teach = JSON.parse(localStorage.getItem("teachdata"));

    this.addForm = this.fb.group({
      FirstName: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")],],
      LastName: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")],],
      EmailId: ["",[Validators.required,Validators.pattern("^[a-zA-Z0-9]{1,35}@[a-zA-Z]{1,10}.com$"),],],
      MobileNo: ["", [Validators.required, Validators.maxLength(10)]],
      Gender: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")],],
      JoiningDate: ["", Validators.required],
      RoleId: ["", Validators.required],
      SubjectId: ["", Validators.required],
      Password: ["",[Validators.required,Validators.minLength(10)]],
      Qualification: ["",[Validators.required, Validators.pattern("^[a-zA-Z ]{1,20}$")],],
      Salary: ["", [Validators.required, Validators.pattern("^[0-9]*")]],
      TeacherId: [" "]
    });

    this.ps.GetSubject().subscribe((x: any) => {
      this.ListSubject = x;
    });
    this.addForm.controls["TeacherId"].setValue(this.teach.TeacherId);
    this.addForm.controls["FirstName"].setValue(this.teach.FirstName);
    this.addForm.controls["LastName"].setValue(this.teach.LastName);
    this.addForm.controls["EmailId"].setValue(this.teach.EmailId);
    this.addForm.controls["MobileNo"].setValue(this.teach.MobileNo);
    this.addForm.controls["Gender"].setValue(this.teach.Gender);
    //this.addForm.controls["JoiningDate"].setValue(this.teach.JoiningDate);
    //this.addForm.controls["RoleId"].setValue(this.teach.RoleId);
    //this.addForm.controls["SubjectId"].setValue(this.teach.SubjectId);
    this.addForm.controls["Password"].setValue(this.teach.Password);
    this.addForm.controls["Qualification"].setValue(this.teach.Qualification);
    this.addForm.controls["Salary"].setValue(this.teach.Salary);
  }

  onSubmit() {
    var teacher = new ITeacher();
    teacher.FirstName = this.addForm.controls.FirstName.value;
    teacher.LastName = this.addForm.controls.LastName.value;
    teacher.EmailId = this.addForm.controls.EmailId.value;
    teacher.MobileNo = this.addForm.controls.MobileNo.value;
    teacher.Gender = this.addForm.controls.Gender.value;
    teacher.Password = this.addForm.controls.Password.value;
    teacher.Qualification = this.addForm.controls.Qualification.value;
    teacher.Salary = this.addForm.controls.Salary.value;
    teacher.TeacherId = this.addForm.controls.TeacherId.value;

    this.ps.EditTeacher(teacher).subscribe((x: string) => {
      if (x == "Updated") {
        
        alert("Record Updated");
        this.router.navigate(["listteacher"]);
      } else {
        alert("something went wrong");
      }
    });
  }
}
