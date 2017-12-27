import { Component, OnInit } from '@angular/core';
import {  Input, Pipe, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  constructor() { }
  content:any;
  question : any 
  @Input() index: any;
  ngOnInit() {
    console.log("pdf", this.content)
  }
  onOptionChanged(value:string, index:number){
    
  
  }

}
