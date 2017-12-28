import { Component, OnInit } from '@angular/core';

import {CourseListingServiceService} from '../service/course-listing-service.service';
import {DetailComponent} from '../detail/detail.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private courselistingser : CourseListingServiceService) {
    this.arrayImg[0] = "100x100";
    this.arrayImg[1] = "150x150";
    this.arrayImg[2] = "200x200";
    this.arrayImg[3] = "250x250";
    this.arrayImg[4] = "300x300";
    this.arrayImg[5] = "350x350";
    this.arrayImg[6] = "400x400";
   }
  courselist:any;
  showDetail = false;
  arrayImg = new Array();

  courseDetail:any;
  ngOnInit() {
    this.courselistingser.fetchCourseData().subscribe(
      (data) => {
        this.courselist = data;
      }
    )
  }

  DetailCourse(event, index){
    this.showDetail = true;
    this.courseDetail = this.courselist[index];
  }
  receiveMessage(event){
    console.log("back")
    this.showDetail = false;
  }


}
