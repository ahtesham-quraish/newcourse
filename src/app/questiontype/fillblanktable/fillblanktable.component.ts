import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fillblanktable',
  templateUrl: './fillblanktable.component.html',
  styleUrls: ['./fillblanktable.component.scss']
})
export class FillblanktableComponent implements OnInit {

  constructor() { }
  head = [];
  tail = [];
  @Input() content: any;
  question : any 
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
          //this.counter++;
        }
      }
    }
    console.log(this.head, this.tail)
  }

}
