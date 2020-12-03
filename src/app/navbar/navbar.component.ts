import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  teachFN: String;

  constructor(public router:Router) { }

  ngOnInit() {
    this.teachFN = localStorage.getItem("teachFirstName");
  }

  logout() {
    if (confirm("Are you sure you want to Logout!")) {
      localStorage.clear();
      localStorage.removeItem("teachFirstName");
      this.router.navigate(["principallogin"]);
    }
  }

}



