import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-singleselectdropdown',
  templateUrl: './singleselectdropdown.component.html',
  styleUrls: ['./singleselectdropdown.component.scss']
})
export class SingleselectdropdownComponent implements OnInit {

  constructor() { }
  @Input() content: any;
  question : any 
  ngOnInit() {
    this.question = this.content['detail'];
  }

}
