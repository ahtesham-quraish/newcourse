
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {CourseListingServiceService} from '../app/service/course-listing-service.service';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { DetailComponent } from './detail/detail.component';
import {WindowRef} from '../../src/app/service/windowref.service';
import { PdfComponent } from './component/pdf/pdf.component'
import {SafeUrlPipe} from '../app/service/safePipUrl.service';
import { AudioComponent } from './component/audio/audio.component';
import { VideoComponent } from './component/video/video.component';
import { DocumentComponent } from './component/document/document.component';
import { ImgComponent } from './component/img/img.component';
import { TextComponent } from './component/text/text.component';
import { SlidesComponent } from './component/slides/slides.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {SafeHtmlPipe} from '../app/service/safeHtml.component';
import { FillintheblankComponent } from './questiontype/fillintheblank/fillintheblank.component';
import { FillblanktableComponent } from './questiontype/fillblanktable/fillblanktable.component';
import { MultiselectioncheckboxComponent } from './questiontype/multiselectioncheckbox/multiselectioncheckbox.component';
import { SingleselectdropdownComponent } from './questiontype/singleselectdropdown/singleselectdropdown.component';
import { SingleselectradiobuttonComponent } from './questiontype/singleselectradiobutton/singleselectradiobutton.component';
import { TruefalsedropdownComponent } from './questiontype/truefalsedropdown/truefalsedropdown.component';
import { TruefalseradionbuttonComponent } from './questiontype/truefalseradionbutton/truefalseradionbutton.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    DetailComponent,
    PdfComponent,
    SafeUrlPipe,
    SafeHtmlPipe,
    AudioComponent,
    VideoComponent,
    DocumentComponent,
    ImgComponent,
    TextComponent,
    SlidesComponent,
    FillintheblankComponent,
    FillblanktableComponent,
    MultiselectioncheckboxComponent,
    SingleselectdropdownComponent,
    SingleselectradiobuttonComponent,
    TruefalsedropdownComponent,
    TruefalseradionbuttonComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule,
    VgOverlayPlayModule
  ],
  entryComponents: [AppComponent, AudioComponent, VideoComponent, PdfComponent, SlidesComponent, TextComponent, ImgComponent, DocumentComponent],
  providers: [CourseListingServiceService, WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
