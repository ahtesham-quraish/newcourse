import { Component, OnInit, Input } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-truefalsedropdown',
  templateUrl: './truefalsedropdown.component.html',
  styleUrls: ['./truefalsedropdown.component.scss']
})
export class TruefalsedropdownComponent implements OnInit {

  constructor() { }
  @Input() content: any;
  question : any 
  ngOnInit() {
    this.question = this.content['detail'];
  }

   onOptionChanged(value:string, index:number){
    
    jQuery('#TruefalsedropdownComponent').text(value)
    let choices = this.question['choices'];
    if(choices[index]['isCorrect'] === true){
      // this.isCorrect = 'correct'
      // this.submitAnswerEvent.emit({"isCorrect" : 'correct'});
      // this.selectAnswer(index ,this.current_slide ,1)
    }
    else{
      // this.isCorrect = 'incorrect';
      // this.submitAnswerEvent.emit({"isCorrect" : 'incorrect'});
      // this.selectAnswer(index ,this.current_slide , 0)
    }
  }
  // selectAnswer(user_answer:any , current_slide:any , correct_answer){
  //   console.log(user_answer , current_slide , correct_answer)
  //   if(current_slide.child == -1){
  //      let key  = 'question_'+current_slide.parent
  //      this.trackingService.addScormStringValue(key ,  {"correct_answer" : correct_answer, "user_answer" : user_answer, "viewed" : true , "id": this.question['id']});
  //   }   
  // }

}
