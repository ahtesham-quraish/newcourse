import { Component, OnInit, Input } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-fillblanktable',
  templateUrl: './fillblanktable.component.html',
  styleUrls: ['./fillblanktable.component.scss']
})
export class FillblanktableComponent implements OnInit {

  constructor(private qservice : QuestionSubmitService) { }
  head = [];
  tail = [];
  @Input() index:any;
  @Input() content: any;
  question : any;
  counter = 0; 
  ngOnInit() {
    this.question = this.content['detail'];
    if(this.question['choices'][0].fillBlankTable.rows[0].headerRow){
      this.head = this.question['choices'][0].fillBlankTable.rows.splice(0,1)
      this.tail = this.question['choices'][0].fillBlankTable.rows;
    }
    else{
      this.tail = this.question['choices'][0].fillBlankTable.rows;
    }

    for(let i = 0 ; i < this.tail.length ; i++){
      for(let j = 0 ; j < this.tail[i].columns.length ; j++){
        this.tail[i].columns[j]['userinput'] = '';
        this.tail[i].columns[j]['bool'] = false;
        if(this.tail[i].columns[j]['type'] == 'ANSWER'){
          this.counter++;
        }
      }
    }
    console.log(this.head, this.tail)
  }

  onChangeOption(row , col, value){
    
    // let exist = this.user_answer.findIndex(ans => ans.row == row && ans.col == col);
    // if(exist == -1){
    //   this.user_answer.push({'row' : row, 'col' : col, 'answer': '' , 'bool' : false})
    //   exist = this.user_answer.findIndex(ans => ans.row == row && ans.col == col);
    // }
    // console.log(exist , row, col)
    console.log(row, col, value)
    this.tail[row].columns[col]['userinput'] = value
    if(this.tail[row].columns[col]['value'] === this.tail[row].columns[col]['userinput']){
      this.tail[row].columns[col]['bool'] = true
      //his.user_answer[exist] = {'row' : row, 'col' : col, 'answer': this.tail[row].columns[col]['userinput'] , 'bool' : true};
    }
    else{
      this.tail[row].columns[col]['bool'] = false;
      //this.user_answer[exist] ={'row' : row, 'col' : col, 'answer': this.tail[row].columns[col]['userinput'], 'bool' : true};
    }
    var counter = 0;
    for(let i = 0 ; i < this.tail.length ; i++){
      for(let j = 0 ; j < this.tail[i].columns.length ; j++){
        if(this.tail[i].columns[j]['type'] == 'ANSWER' && this.tail[i].columns[j]['bool'] == true){
          counter++;
        }
        
      }
    }
    if(this.counter == counter){
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": true});
    }
    else{
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": false});
    }
    console.log(this.tail)
  }

}
