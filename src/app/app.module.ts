
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {CourseListingServiceService} from '../app/service/course-listing-service.service';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule
  ],
  providers: [CourseListingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
