import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-truefalseradionbutton',
  templateUrl: './truefalseradionbutton.component.html',
  styleUrls: ['./truefalseradionbutton.component.scss']
})
export class TruefalseradionbuttonComponent implements OnInit {

  constructor() { }
  @Input() content: any;
  question : any 
  ngOnInit() {
    this.question = this.content['detail'];
  }

   onOptionChanged( value:string, index){
    
    
    let choices = this.question['choices'];
    console.log("value", value , index , 'true false radio button')

    //var correct_index = choices.findIndex(x => x.isCorrect == true);
    // if(choices[index]['isCorrect'] === true){
    //   // this.isCorrect = 'correct'
    //   // this.submitAnswerEvent.emit({"isCorrect" : 'correct'});
    //   // this.selectAnswer(index ,this.current_slide ,1)

    // }
    // else{
    //   // this.isCorrect = 'incorrect';
    //   // this.submitAnswerEvent.emit({"isCorrect" : 'incorrect'});
    //   // this.selectAnswer(index ,this.current_slide ,0)
    // }
}
  getID(id, i){
    return id+i;
  }

}
