
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {enableProdMode} from '@angular/core';
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
import { TruefalseradionbuttonComponent } from './questiontype/truefalseradionbutton/truefalseradionbutton.component';
import { SequenceComponent } from './questiontype/sequence/sequence.component';
import {QuestionSubmitService} from '../app/service/question-submit-service';
import { SingldropdownComponent } from './questiontype/singldropdown/singldropdown.component';
import { DragDropDirectiveModule} from "angular4-drag-drop";
import { DropdownComponent } from './questiontype/dropdown/dropdown.component';
import { AbcComponent } from './questiontype/abc/abc.component';
import { WebsiteComponent } from './cinchhub/website/website.component';

enableProdMode();

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
    TruefalseradionbuttonComponent,
    SequenceComponent,
    SingldropdownComponent,
    DropdownComponent,
    AbcComponent,
    WebsiteComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule,
    VgOverlayPlayModule,
    DragDropDirectiveModule
  ],
  entryComponents: [AppComponent, AudioComponent, AbcComponent, DropdownComponent, SequenceComponent, MultiselectioncheckboxComponent,FillblanktableComponent,SingleselectdropdownComponent, SingleselectradiobuttonComponent, TruefalseradionbuttonComponent,VideoComponent, PdfComponent,FillintheblankComponent, SlidesComponent, TextComponent, ImgComponent, DocumentComponent, TruefalsedropdownComponent],
  providers: [CourseListingServiceService, QuestionSubmitService, WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
