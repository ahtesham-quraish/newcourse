import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor() { }
  content:any;
  @Input() index: any;
  question : any 
  ngOnInit() {
  }
  onOptionChanged(value:string, index:number){
    
  
  }

}
