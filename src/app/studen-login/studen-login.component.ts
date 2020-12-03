import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OnlineQuizService } from "../services/online-quiz.service";
import { IStudent } from "../Model/Student";
import { Router } from "@angular/router";

@Component({
  selector: "app-studen-login",
  templateUrl: "./studen-login.component.html",
  styleUrls: ["./studen-login.component.css"],
})
export class StudenLoginComponent implements OnInit {
  loginForm: FormGroup;
  Email: string;
  Password: string;
  date: Date;

  constructor(
    public formBuilder: FormBuilder,
    public os: OnlineQuizService,
    public router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9]{1,35}@[a-zA-Z]{1,10}.com$"),
        ],
      ],
      Password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.Email = this.loginForm.controls.Email.value;
    this.Password = this.loginForm.controls.Password.value;
    this.os
      .ValidateStudent(this.Email, this.Password)
      .subscribe((x: IStudent) => {
        if (x != null) {
          alert("Welcome" + " " + x.FirstName);
          localStorage.setItem("StudentFirstName", x.FirstName.toString());
          localStorage.setItem("StudentId", x.StudentId.toString());
          console.log(x);
          this.router.navigate(["studenthome"]);
        }
      });
  }
}
