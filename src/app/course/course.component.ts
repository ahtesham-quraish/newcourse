import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import {CourseListingServiceService} from '../service/course-listing-service.service';
import {DetailComponent} from '../detail/detail.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private courselistingser : CourseListingServiceService, private cd: ChangeDetectorRef,) {
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
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
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

  getRandomImage(i) {

    var num = Math.floor( Math.random() * this.arrayImg.length );
    var img = this.arrayImg[ num ];
    this.courselist[i]['img'] = img;
    return img
}


}
