
import { Injectable } from '@angular/core';
import { allCourses } from './../urls/courseurl';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Rx"

@Injectable()
export class CourseListingServiceService {

  constructor(private http : Http) { }

  fetchCourseData(){
    console.log("me", allCourses)
    let data = ['Idrees_AWS']
    return this.http.post(allCourses , data).map(response => response.json());
   }
}
  
