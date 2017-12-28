import { Component, OnInit, Input } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'
@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss']
})
export class SequenceComponent implements OnInit {

  constructor(private qservice : QuestionSubmitService) { }
  @Input() content: any;
  question : any;
  choices = [];
  @Input() index:any; 
  ngOnInit() {
    this.question = this.content['detail'];
    this.choices = this.question['choices'];
    this.choices.sort(function(a, b) {
     return a.displaySequence - b.displaySequence;
   });
   for(var i = 0 ; i < this.choices.length ; i++){
    this.choices[i]['position'] = i + 1; 
    }
  }

  addDropItem($event, i){
    
    let dropedItem = this.choices[i];
    var draggedIndex = this.choices.findIndex(x => x.answer == $event.answer );
    
    $event['position'] = i + 1;
    dropedItem['position'] = draggedIndex + 1;
    this.choices[draggedIndex] = dropedItem;
    this.choices[i] = $event;
    console.log("addDropItem" , this.choices)
    var isCorrect = true;
    var user_answer = '';
    var user_display = '';
    for(var j = 0 ; j < this.choices.length ; j++){
      if(this.choices[j]['position'] != this.choices[j]['sequence']  ){
        isCorrect = false
        console.log("");
        user_answer = user_answer + 0;
      }
      else{
        user_answer = user_answer + 1;
      }
      user_display = user_display + this.choices[j]['displaySequence'];
    }

    if(isCorrect){
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": true});
    
    }else{
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": false});
    
    }

  }

}
