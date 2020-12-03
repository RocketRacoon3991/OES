import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-principal-navbar",
  templateUrl: "./principal-navbar.component.html",
  styleUrls: ["./principal-navbar.component.css"],
})
export class PrincipalNavbarComponent implements OnInit {
  PrincipalFN: string;
  constructor(public router: Router) {}

  ngOnInit() {
    this.PrincipalFN = localStorage.getItem("PrincipalFirstName");
  }

  logout() {
    if (confirm("Are you sure you want to Logout!")) {
      localStorage.clear();
      localStorage.removeItem("PrincipalFirstName");
      this.router.navigate(["principallogin"]);
    }
  }
}
