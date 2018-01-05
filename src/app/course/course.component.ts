declare var jquery:any;
declare var $ :any;
import { Router } from '@angular/router';
import * as jQuery from 'jquery';

import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

import {CourseListingServiceService} from '../service/course-listing-service.service';
import {DetailComponent} from '../detail/detail.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private courselistingser : CourseListingServiceService, private cd: ChangeDetectorRef,
  private router : Router) {
    this.arrayImg[0] = "assets/images/icon-img1.svg";
    this.arrayImg[1] = "assets/images/icon-img2.svg";
    this.arrayImg[2] = "assets/images/icon-img3.svg";
    this.arrayImg[3] = "assets/images/icon-img4.svg";
    this.arrayImg[4] = "assets/images/icon-img5.svg";
    this.arrayImg[5] = "assets/images/icon-img6.svg";
   }
  courselist:any;
  showDetail = false;
  arrayImg = new Array();
  courseDetail:any;

  mouseEnter(e){
    $(e.target).parent().parent().addClass('show');
 }
 mouseLeave(e){
   if($(e.target).hasClass('show')){
    $(e.target).removeClass('show');
   }
  }
  ngAfterViewInit() {
   
   
  }
  ngOnInit() {
    this.router.navigate(['courses']);
    this.courselistingser.fetchCourseData().subscribe(
      function(data) {
        this.courselist = data;
        console.log(this.courselist)
        for(let i = 0; i< this.courselist.length ; i++){
          this.courselist[i]['img'] = this.getRandomImage(i)
        }
        //this.cd.markForCheck();

      }.bind(this)
      
    )
    //
  }

  DetailCourse(event, index){
    this.showDetail = true;
    this.courseDetail = this.courselist[index];
    this.router.navigate(['courses/courseId/'+this.courseDetail.id]);

  }
  receiveMessage(event){
    console.log("back")
    this.showDetail = false;
  }
  // refresh() {
  //   this.cd.detectChanges();
  // }

  getRandomImage(i) {

    var num = Math.floor( Math.random() * this.arrayImg.length );
    var img = this.arrayImg[ num ];
    this.courselist[i]['img'] = img;
    return img
}

back(){
  this.messageEvent.emit('back');
  this.router.navigate(['']);
  console.log("?????????")
}


}
