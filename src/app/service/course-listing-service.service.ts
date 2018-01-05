
import { Injectable } from '@angular/core';
import { allCourses, questionUrl } from './../urls/courseurl';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Rx"
import { environment } from '../../environments/environment';

@Injectable()
export class CourseListingServiceService {

  constructor(private http : Http) { }

  fetchCourseData(){
    console.log("me", allCourses)
    let data = {"regionId": environment.domain != 'undefined' ? environment.domain : '17', "active" : true}
    return this.http.post(allCourses , data).map(response => response.json());
   }
   fetchQuestionData(id){
    return this.http.get(questionUrl+id).map(response => response.json());
   }
}
  
