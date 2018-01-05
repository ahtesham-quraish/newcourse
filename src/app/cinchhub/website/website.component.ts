declare var jquery:any;
declare var $ :any;
import * as jQuery from 'jquery';
import {WindowRef} from '../../service/windowref.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  constructor(private wind: WindowRef , private router : Router) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.wind.nativeWindow.initIndexJs();
    // }, 100);
  }
  openCourse(){
    this.router.navigate(['courses']);
  }

}
