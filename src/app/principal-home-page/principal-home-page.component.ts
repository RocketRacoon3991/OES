import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from"@angular/router"
@Component({
  selector: 'app-principal-home-page',
  templateUrl: './principal-home-page.component.html',
  styleUrls: ['./principal-home-page.component.css']
})
export class PrincipalHomePageComponent implements OnInit {

  constructor( public router:Router) { }

  toStudentOperationsclick(){this.router.navigate(['/StudentOperations']); }

  toTeacherOperationsClick(){this.router.navigate(['/TeacherOperations']);}
  
  toMoniterOperationsClick(){this.router.navigate(['/MoniterOPerations']);}

  ngOnInit(): void {
  }

}
