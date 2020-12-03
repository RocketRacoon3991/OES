import { Component, OnInit } from "@angular/core";
import { PrincipalService } from "../Services/principal.service";
import { ISubject } from "../Model/Subject";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OnlineQuizService } from "../services/online-quiz.service";

@Component({
  selector: "app-online-test-selection",
  templateUrl: "./online-test-selection.component.html",
  styleUrls: ["./online-test-selection.component.css"],
})
export class OnlineTestSelectionComponent implements OnInit {
  addForm: FormGroup;
  ListSubject: ISubject[];
  sid: any;

  constructor(
    public ps: PrincipalService,
    public os: OnlineQuizService,
    public fb: FormBuilder,
    public router: Router
  ) {}

  ngOnInit() {
    this.addForm = this.fb.group({ SubjectName: ["", Validators.required] });
    this.ps.GetSubject().subscribe((data) => {
      this.ListSubject = data;
    });
  }

  onSubmit() {
    var sname = this.addForm.controls.SubjectName.value;
    // this.os.GetSubjectIdByName(sname).subscribe((data) => {
    //   this.sid = data;
     localStorage.setItem("SubjectId",sname);
     this.router.navigate(["online-test"]);
    //   console.log(this.sid);
    // });
  }
}
