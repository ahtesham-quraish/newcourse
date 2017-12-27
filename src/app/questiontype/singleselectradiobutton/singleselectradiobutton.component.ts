import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-singleselectradiobutton',
  templateUrl: './singleselectradiobutton.component.html',
  styleUrls: ['./singleselectradiobutton.component.scss']
})
export class SingleselectradiobuttonComponent implements OnInit {

  constructor() { }
  @Input() content: any;
  question : any 
  ngOnInit() {
    this.question = this.content['detail'];
  }

}
