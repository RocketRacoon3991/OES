import { Component, OnInit } from "@angular/core";
import { IStudent } from "../Model/Student";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PrincipalLoginComponent } from "../principal-login/principal-login.component";
import { PrincipalService } from "../Services/principal.service";
import { Router } from '@angular/router';


@Component({
  selector: "app-update-student",
  templateUrl: "./update-student.component.html",
  styleUrls: ["./update-student.component.css"],
})
export class UpdateStudentComponent implements OnInit {
  updatestudent: any;
  addForm: FormGroup;
  constructor(public fb: FormBuilder, public ps: PrincipalService,public router:Router) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      FirstName: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")],],
      LastName: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")],],
      EmailId: ["",[Validators.required,Validators.pattern("^[a-zA-Z0-9]{1,35}@[a-zA-Z]{1,10}.com$")]],
      MobileNo: ["", [Validators.required, Validators.pattern("[0-9]*")]],
      Gender: ["", Validators.required],
      JoiningDate: ["", Validators.required],
      RoleId: ["", Validators.required],
      SubjectId: ["", Validators.required],
      Password: ["", Validators.required,Validators.minLength(8)],
      ParentsEmailId: ["",[Validators.required,Validators.pattern("^[a-zA-Z0-9]{1,35}@[a-zA-Z]{1,10}.com$")]],
      ParentsMobileNo:["", [Validators.required, Validators.pattern("[0-9]*")]],
      RollNo: ["", Validators.required],
      StudentId: [""],
    });

    console.log("Hi" + JSON.parse(localStorage.getItem("studdata")));
    this.updatestudent = JSON.parse(localStorage.getItem("studdata"));

    this.addForm.controls["FirstName"].setValue(this.updatestudent.FirstName);
    this.addForm.controls["LastName"].setValue(this.updatestudent.LastName);
    this.addForm.controls["EmailId"].setValue(this.updatestudent.EmailId);
    this.addForm.controls["MobileNo"].setValue(this.updatestudent.MobileNo);
    this.addForm.controls["ParentsEmailId"].setValue(
      this.updatestudent.ParentsEmailId
    );
    this.addForm.controls["ParentsMobileNo"].setValue(
      this.updatestudent.ParentsMobileNo
    );
    this.addForm.controls["RollNo"].setValue(this.updatestudent.RollNo);
    this.addForm.controls["Gender"].setValue(this.updatestudent.Gender);
    this.addForm.controls["RoleId"].setValue(this.updatestudent.RoleId);
    this.addForm.controls["StudentId"].setValue(this.updatestudent.StudentId);
  }

  onSubmit() {
    var student = new IStudent();
    student.StudentId = this.addForm.controls.StudentId.value;
    student.FirstName = this.addForm.controls.FirstName.value;
    student.LastName = this.addForm.controls.LastName.value;
    student.EmailId = this.addForm.controls.EmailId.value;
    student.MobileNo = this.addForm.controls.MobileNo.value;
    student.ParentsEmailId = this.addForm.controls.ParentsEmailId.value;
    student.ParentsMobileNo = this.addForm.controls.ParentsMobileNo.value;
    student.RollNo = this.addForm.controls.RollNo.value;
    student.Gender = this.addForm.controls.Gender.value;
    console.log(" Hello from the other side" + student.RoleId);

    this.ps.EditStudent(student).subscribe((x: string) => {
      if (x == "Updated") {
        alert("Record updated!");
        this.router.navigate(["liststudent"]);
      } else {
        alert("something went wrong!");
      }
    });
  }
}
