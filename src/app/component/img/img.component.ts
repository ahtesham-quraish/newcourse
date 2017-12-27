import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  constructor() { }
  content= {};
  @Input() index: any;
  question : any 
  ngOnInit() {
  }
  onOptionChanged(value:string, index:number){
    
  
  }

}
