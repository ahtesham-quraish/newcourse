declare var jquery:any;
declare var $ :any;
import * as jQuery from 'jquery';
import {WindowRef} from '../../service/windowref.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  constructor(private wind: WindowRef) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.wind.nativeWindow.initIndexJs();
    // }, 100);
  }

}
