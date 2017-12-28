import { Component, OnInit , Input} from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-multiselectioncheckbox',
  templateUrl: './multiselectioncheckbox.component.html',
  styleUrls: ['./multiselectioncheckbox.component.scss']
})
export class MultiselectioncheckboxComponent implements OnInit {

  constructor(private qservice : QuestionSubmitService) { }
  names = [] ;
  @Input() content: any;
  selectedAll: any;
  @Input() index:any
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
   
    this.selectedAll = this.names.every(function(item:any) {
        return item.selected == true;
    });
    if(this.names[index].selected){
      this.names[index].selected = false
    }
    else{
      this.names[index].selected = true
    }
    let isCorrect = this.names.filter(name => name.isCorrect == true);
    let selected = this.names.filter(name => name.selected == true);
    console.log("index", isCorrect )
    if((isCorrect.length != selected.length) ){
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": false});
      return ; 
    } 
   let bool = true
     for(let i = 0 ; i < isCorrect.length; i++){
        if(isCorrect[i]['isCorrect' ] == true && isCorrect[i]['selected'] !== true){
          bool  = false;
        }
      }
      console.log("dem", bool)
    if(!bool){
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": false});
    }
    else
    {
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": true});
    }

  }

}
