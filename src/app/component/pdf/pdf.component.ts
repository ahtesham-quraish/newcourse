import { Component, OnInit } from '@angular/core';
import {  Input, Pipe, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  constructor(private qservice: QuestionSubmitService) { }
  content:any;
  question : any 
  @Input() index: any;
  ngOnInit() {
    console.log("pdf", this.content)
  }
  onOptionChanged(value:string, index:number){
    
  
  }

}
