import { Component, OnInit } from "@angular/core";
import { TeacherServiceService } from "src/app/Services/teacher-service.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ITeacher } from "src/app/Model/ITeacher";
import { Router } from "@angular/router";

@Component({
  selector: "app-teacher-component",
  templateUrl: "./teacher-component.component.html",
  styleUrls: ["./teacher-component.component.css"],
})
export class TeacherComponentComponent implements OnInit {
  constructor(
    public ts: TeacherServiceService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {}
  loginForm: FormGroup;
  Email: string;
  Password: string;
  Teach: any;

  onSubmit(User: ITeacher) {
    this.Email = this.loginForm.controls.Email.value;
    this.Password = this.loginForm.controls.Password.value;
    this.ts
      .ValidateTeacher(this.Email, this.Password)
      .subscribe((x: ITeacher) => {
        if (x != null) {
          alert("Welcome" + " " + x.FirstName);
          console.log(x);
          this.Teach = x.FirstName;
          localStorage.setItem('teachFirstName',x.FirstName);
          //localStorage.setItem('UserID',x.toString());
          //console.log(localStorage.getItem('UserID'));
          this.router.navigate(["TeacherHome"]);
        } else {
          alert("Invalid Credentials");
        }
      });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: ['',[Validators.required,Validators.pattern("^[a-zA-Z0-9]{1,35}@[a-zA-Z]{1,10}.com$")]],
      Password: ['',[Validators.required,Validators.minLength(8)]]
    });
  }
}
