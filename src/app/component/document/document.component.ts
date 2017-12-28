import { Component, OnInit, Input } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor(private qservice : QuestionSubmitService) { }
  content= {};
  @Input() index: any;
  question : any 
  ngOnInit() {
  }
  getUrl(){
   return 'https://view.officeapps.live.com/op/embed.aspx?src='+ this.content['url'];
  }
  onOptionChanged(value:string, index:number){
    
  
  }

}
