import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-multiselectioncheckbox',
  templateUrl: './multiselectioncheckbox.component.html',
  styleUrls: ['./multiselectioncheckbox.component.scss']
})
export class MultiselectioncheckboxComponent implements OnInit {

  constructor() { }
  names = [] ;
  @Input() content: any;
  selectedAll: any;
  question : any 
  ngOnInit() {
    this.question = this.content['detail'];
    for(let i = 0 ; i < this.question['choices'].length; i++){
      this.question['choices'][i]['selected'] =  false;
      this.names.push(this.question['choices'][i]);

      
    }
    console.log(this.names)
  }
  selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected(index) {
    console.log("index", index)
    this.selectedAll = this.names.every(function(item:any) {
        return item.selected == true;
    });
    let user_choices = ''; 
    for(let i = 0 ; i < this.names.length ; i++ ){
      
      if(this.names[i].selected ==  true){
        user_choices = user_choices + 1;
      }
      else{
        user_choices = user_choices + 0;
      } 
    }
    let isCorrect = this.names.filter(name => name.isCorrect == true);
    let selected = this.names.filter(name => name.selected == true);
    if((isCorrect.length != selected.length) ){
      //this.submitAnswerEvent.emit({"isCorrect" : 'incorrect'});
      //this.selectAnswer(user_choices , this.current_slide , 0);
      return ; 
    }

  console.log(user_choices , "let user_choices = ''; ");   
   let bool = true
     for(let i = 0 ; i < isCorrect.length; i++){
        if(isCorrect[i]['isCorrect' ] == true && isCorrect[i]['selected'] ! == true){
          bool  = false;
        }
      }
    if(!bool){
      //this.submitAnswerEvent.emit({"isCorrect" : 'correct'});
      //this.selectAnswer(user_choices , this.current_slide , 1);
    }
    else
    {
      //this.submitAnswerEvent.emit({"isCorrect" : 'incorrect'});
      //this.selectAnswer(user_choices , this.current_slide , 0);
    }

  }

}
