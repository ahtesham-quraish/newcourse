import { Component, OnInit } from '@angular/core';

import {CourseListingServiceService} from '../service/course-listing-service.service';
import {DetailComponent} from '../detail/detail.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private courselistingser : CourseListingServiceService) { }
  courselist:any;
  showDetail = false;
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
