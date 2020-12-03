import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { OnlineQuizService } from "../services/online-quiz.service";
import { IStudent } from "../Model/Student";
import { IUserRole } from "../Model/Userrole";
import { PrincipalService } from "../Services/principal.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.css"],
})
export class AddStudentComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;
  ListRole: IUserRole[];
  roleId: number;
  
  

  constructor(public formbuilder: FormBuilder, public _ss: PrincipalService,
public  router: Router
  ) {}

  ngOnInit(): void {
    this.addForm = this.formbuilder.group({
      FirstName: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
      LastName: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
      EmailId: ["",[Validators.required,Validators.pattern("^[a-zA-Z0-9]{1,35}@[a-zA-Z]{1,10}.com$")]],
      MobileNo: ["", [Validators.required, Validators.maxLength(10)]],
      Gender: ["",[Validators.required, Validators.pattern("^[a-zA-Z]{1,20}$")]],
      JoiningDate: ["", Validators.required],
      RoleId: ["", Validators.required],
      RollNo: ["", [Validators.required, Validators.pattern("^[0-9]*")]],
      Password: ["",[Validators.required,Validators.minLength(8)]],
      ParentsEmailId: ["", [Validators.required, Validators.email]],
      ParentsMobNo: ["", [Validators.required, Validators.maxLength(10)]],
    });

    this._ss.GetAllRole().subscribe((data) => {
      this.ListRole = data;
    });
  }

  onSubmit() {
    this.roleId = this.addForm.controls.RoleId.value;

    var student = new IStudent();
    student.FirstName = this.addForm.controls.FirstName.value;
    student.LastName = this.addForm.controls.LastName.value;
    student.EmailId = this.addForm.controls.EmailId.value;
    student.MobileNo = this.addForm.controls.MobileNo.value;
    student.ParentsEmailId = this.addForm.controls.ParentsEmailId.value;
    student.ParentsMobileNo = this.addForm.controls.ParentsMobNo.value;
    student.RollNo = this.addForm.controls.RollNo.value;
    student.Gender = this.addForm.controls.Gender.value;
    student.JoiningDate = this.addForm.controls.JoiningDate.value;
    student.RoleId = this.addForm.controls.RoleId.value;
    console.log(" Hello from the other side" + student.RoleId);
    student.Password = this.addForm.controls.Password.value;

    this._ss.AddStudent(student).subscribe((data: any) => {
      if (data != null) {
        alert("Inserted" + " " + data.FirstName);
        this.router.navigate(["liststudent"]);
      } else {
        alert("Error");
      }
    });
  }
}
