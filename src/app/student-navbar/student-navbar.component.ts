import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  constructor(public router:Router) { }
 StudFN : string;
  ngOnInit() {
    this.StudFN = localStorage.getItem("StudentFirstName");
  }

  logout() {
    if (confirm("Are you sure you want to Logout!")) {
      localStorage.clear();
      localStorage.removeItem("StudentFirstName");
      this.router.navigate(["principallogin"]);
    }
  }

}
