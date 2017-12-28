import { Component, OnInit, Input } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(private qservice:QuestionSubmitService) { }
  content:any;
  @Input() index: any;
  question : any 
  ngOnInit() {
  }
  onOptionChanged(value:string, index:number){
    
  
  }

}
