import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TimeTable } from '../Model/TimeTable';
import { TeacherServiceService } from '../Services/teacher-service.service';

@Component({
  selector: 'app-add-timetable',
  templateUrl: './add-timetable.component.html',
  styleUrls: ['./add-timetable.component.css']
})
export class AddTimetableComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false;  
  
  

  constructor(public formbuilder: FormBuilder, public _ss: TeacherServiceService,
    public  router: Router
      ) { }

  ngOnInit() : void {
    this.addForm = this.formbuilder.group({
      Sunday: ["",[Validators.required, Validators.pattern("^[a-zA-Z ]{1,20}$")]],
      
      Monday: ["",[Validators.required, Validators.pattern("^[a-zA-Z ]{1,20}$")]],
      Tuesday: ["",[Validators.required, Validators.pattern("^[a-zA-Z ]{1,20}$")]],
      Wednesday: ["",[Validators.required, Validators.pattern("^[a-zA-Z ]{1,20}$")]],
      Thursday: ["",[Validators.required, Validators.pattern("^[a-zA-Z ]{1,20}$")]],
      Friday: ["",[Validators.required, Validators.pattern("^[a-zA-Z ]{1,20}$")]],
      Saturday: ["",[Validators.required, Validators.pattern("^[a-zA-Z ]{1,20}$")]],
      Time: ["", Validators.required],
       });


  }

  onSubmit() {
    
    var timet = new TimeTable();
    timet.Monday = this.addForm.controls.Monday.value;
    timet.Tuesday = this.addForm.controls.Tuesday.value;
    timet.Wednesday = this.addForm.controls.Wednesday.value;
    timet.Thursday = this.addForm.controls.Thursday.value;
    timet.Friday = this.addForm.controls.Friday.value;
    timet.Saturday = this.addForm.controls.Saturday.value;
    timet.Sunday = this.addForm.controls.Sunday.value;
    timet.Time = this.addForm.controls.Time.value;
    

    this._ss.AddTimeTable(timet).subscribe((data: any) => {
      if (data != null) {
        alert("Time Table Inserted" );
        this.router.navigate(["TeacherHome"]);
      } else {
        alert("Error");
      }
    });
  }
}
