import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {
  ɵHttpInterceptingHandler,
  HttpErrorResponse,
} from "@angular/common/http";
import { PrincipalService } from "../Services/principal.service";


@Component({
  selector: "app-principal-login",
  templateUrl: "./principal-login.component.html",
  styleUrls: ["./principal-login.component.css"],

})
export class PrincipalLoginComponent implements OnInit {
  @Input() principaluser = { EmailId: "", Password: "" };
  route: any;
  
  constructor(
    public router: Router,
    public principalloginobject: PrincipalService,
    
  ) {}

  
  ngOnInit(): void {}
  mk: string;
  PrincipalUserId: string;
  Password: string;
  message: string;
  data: any;
  authenticated: boolean = false;

  LogInForm(loginDetails: NgForm) {
    this.VerifyStudent(this.principaluser.EmailId, this.principaluser.Password);
    console.log(this.principaluser.EmailId);
  }
  VerifyStudent(PrincipalUserId, Password) {
    this.mk = "recieve";
    this.principalloginobject.GetPrincipal(PrincipalUserId, Password).subscribe(
      (data) => {
        localStorage.setItem('PrincipalFirstName',data.FirstName);
        this.data = data;
        if (data != null) {
          console.log(data);
          console.log(this.mk);
          console.log(data.EmailId);
          console.log(data.Password);

          if (
            data.EmailId == this.principaluser.EmailId &&
            data.Password == this.principaluser.Password
          ) {
            console.log(this.mk);
            this.authenticated = true;
            //this.LoginServiceObject.Authentication();
            this.router.navigate(["/principalhome"]);
          } else {
            this.message = "Invalid Credentials";
          }
        } else {
          this.message = "Invalid Credentials";
        }
      },
      (error: HttpErrorResponse) => {
        if (error.status == 400) {
          this.message = "Resource cannot be found";
        } else if (error.status == 0) {
          this.message =
            "Server is Offline,We are working on it,Please try again later";
        } else if (error.status == 404) {
          this.message = "Authentication Failed";
        }
      }
    );
  }
  LoginAsTeacher()
  {
    this.router.navigate(["teacherlogin"]);
  }
  LoginAsStudent()
  {
    this.router.navigate(["studentlogin"]);
  }
}
