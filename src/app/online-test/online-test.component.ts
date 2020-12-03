import { Component, OnInit } from '@angular/core';
import { OnlineQuizService } from 'src/app/services/online-quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.css']
})
export class OnlineTestComponent implements OnInit {
 
choice:any;
  constructor(public onlineQuizService:OnlineQuizService, public router:Router) { }

  ngOnInit(): void {
    this.onlineQuizService.seconds=0;
    this.onlineQuizService.qnProgress=0;
    var sid = parseInt(localStorage.getItem('SubjectId'));
    this.onlineQuizService.GetAllQuestionById(sid).subscribe((data: any)=>{
      console.log(data);
        this.onlineQuizService.questions=data;
        // this.startTimer();
    })
  }

  startTimer(){
    this.onlineQuizService.timer=setInterval(()=>{
      this.onlineQuizService.seconds++;
    },1000);
  }

  Answer(qId,choice){
    this.onlineQuizService.questions[this.onlineQuizService.qnProgress].ans=choice;
    console.log(this.onlineQuizService.questions[this.onlineQuizService.qnProgress].ans);
    this.onlineQuizService.qnProgress++;
    if(this.onlineQuizService.qnProgress==10){
      this.router.navigate(['result']);
    }
  }



}
