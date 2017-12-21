import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  constructor() { }
  content= {};
  @Input() index: any;
  ngOnInit() {
  }
  getUrl(){
   return 'https://view.officeapps.live.com/op/embed.aspx?src='+ this.content['url'];
  }

}
