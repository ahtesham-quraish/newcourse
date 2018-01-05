import { Component,Input, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
declare var jquery:any;
declare var $ :any;
import { Router } from '@angular/router';
import * as jQuery from 'jquery';
import {WindowRef} from '../service/windowref.service';
import {PdfComponent} from "../component/pdf/pdf.component";
import { AudioComponent } from '../component/audio/audio.component';
import { VideoComponent } from '../component/video/video.component';
import { DocumentComponent } from '../component/document/document.component';
import { ImgComponent } from '../component/img/img.component';
import { TextComponent } from '../component/text/text.component';
import { SlidesComponent } from '../component/slides/slides.component';
import {CourseListingServiceService} from '../service/course-listing-service.service'
import { FillintheblankComponent } from '../questiontype/fillintheblank/fillintheblank.component';
import { FillblanktableComponent } from '../questiontype/fillblanktable/fillblanktable.component';
import { MultiselectioncheckboxComponent } from '../questiontype/multiselectioncheckbox/multiselectioncheckbox.component';
import { SingleselectdropdownComponent } from '../questiontype/singleselectdropdown/singleselectdropdown.component';
import { SingleselectradiobuttonComponent } from '../questiontype/singleselectradiobutton/singleselectradiobutton.component';
import { TruefalsedropdownComponent } from '../questiontype/truefalsedropdown/truefalsedropdown.component';
import { TruefalseradionbuttonComponent } from '../questiontype/truefalseradionbutton/truefalseradionbutton.component';
import { SequenceComponent } from '../questiontype/sequence/sequence.component'
import {QuestionSubmitService} from '../service/question-submit-service';
import { SingldropdownComponent } from '../questiontype/singldropdown/singldropdown.component';
import { DropdownComponent } from '../questiontype/dropdown/dropdown.component';
import { AbcComponent } from '../questiontype/abc/abc.component';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  title:any;
  contentlist:any;
   ref = '';
  hideBtton = false; 
  @Input() courseDetail:any;
  @Input() image:any;
  anwser = [];
  showResultcard = -1;
  @Output() messageEvent = new EventEmitter<string>();
  ComponentArray = [{"type": "slides", "questiontype": "" ,"component": SlidesComponent} ,
  {"type": "pdf", "questiontype": "" , "component": PdfComponent},
  {"type": "img", "questiontype": "" ,"component": ImgComponent},
  {"type": "video", "questiontype": "" ,"component": VideoComponent},
  {"type": "audio", "questiontype": "" ,"component": AudioComponent}, 
  {"type": "document", "questiontype": "" ,"component": DocumentComponent},
  {"type": "text", "questiontype": "" ,"component": TextComponent}, 
  {"type": "Question","questiontype": "TRUE_FALSE_SELECT" , "component": TruefalsedropdownComponent},
  {"type": "Question","questiontype": "FILL_BLANK" , "component": FillintheblankComponent},
  {"type": "Question","questiontype": "TRUE_FALSE_RADIO" , "component": TruefalseradionbuttonComponent},
  {"type": "Question","questiontype": "SINGLE_SELECT_RADIO" , "component": SingleselectradiobuttonComponent},
  {"type": "Question","questiontype": "FILL_BLANK_TABLE" , "component": FillblanktableComponent},
  {"type": "Question","questiontype": "MULTI_SELECT" , "component": MultiselectioncheckboxComponent},
  {"type": "Question","questiontype": "SEQUENCE" , "component": SequenceComponent},
  {"type": "Question","questiontype": "SINGLE_SELECT_DROPDOWNs" , "component": AbcComponent},
  {"type": "Question","questiontype": "SINGLE_SELECT_DROPDOWN" , "component": DropdownComponent}];
  createdComponent = [];
  @ViewChild('parent', {read: ViewContainerRef})
  parent: ViewContainerRef;
  constructor(private wind: WindowRef,private cd: ChangeDetectorRef,
     private componentFactoryResolver: ComponentFactoryResolver, 
     private detailservice : CourseListingServiceService,
     private qservice : QuestionSubmitService, private router : Router) { 
    

  }
  ngAfterViewInit() {
    this.image = this.courseDetail.img
    this.cd.detectChanges();
}
  ngOnInit() {
    this.title = this.courseDetail.name;
    this.contentlist = this.courseDetail.content;
    
    console.log(this.courseDetail)
    let questionExist = false;
    let questionLength = [];
    for(let i = 0 ; i < this.contentlist.length; i++){
      if(this.contentlist[i].type == 'Question'){
        questionExist = true;
        questionLength.push(i);
      }
    }
    if(questionExist){
      for(let i = 0 ; i < this.contentlist.length; i++){
        if(this.contentlist[i].type == 'Question'){
          let urlSplit = this.contentlist[i].url.split('qbank/');
          this.detailservice.fetchQuestionData(urlSplit[1]).subscribe(
          function (data) {
              this.courseDetail.content[i]['detail'] = data; 
              questionLength.pop();
              if(questionLength.length == 0){
                this.initCourseContent();
              }
      
            }.bind(this));
        }
      }
    }
    else{
      this.initCourseContent();
    }

    this.qservice.currentMessage.subscribe(function(message)  {
      if(Object.keys(message).length){ 
        console.log("ahtesham",message);

       var item = this.anwser.find(x => x.index == message.index );
       
       
       if(item != undefined){
        var i = this.anwser.findIndex(x => x.index == message.index );
        this.anwser[i] = message;
       }
       else{
        this.anwser.push(message);
       }        
      }
    }.bind(this));
  

  }
  showResult(){
    let isCorrect = this.anwser.filter(x => x.correct == true);
    let question = this.courseDetail.content.filter(x => x.type == 'Question');
    let res = (isCorrect.length / question.length) * 100;
    this.showResultcard = res;
    this.hideBtton = true;

    console.log("is ", isCorrect, question , res);
  }
  initCourseContent(){
    for(let i = 0; i < this.courseDetail.content.length; i++ ){
      for(let j = 0; j < this.ComponentArray.length; j++){
        if(this.ComponentArray[j].type == this.courseDetail.content[i].type && this.courseDetail.content[i].type != 'Question'){
          let com = this.componentFactoryResolver.resolveComponentFactory(this.ComponentArray[j].component);
          this.createdComponent.push({"com": com, "content" : this.courseDetail.content[i]});
        
        }
        
        else if(this.ComponentArray[j].type == this.courseDetail.content[i].type &&
           this.courseDetail.content[i].type == 'Question'  ){
            if(this.ComponentArray[j]['questiontype'] == this.courseDetail.content[i]['detail'].questionMetaData.type ){
            let com = this.componentFactoryResolver.resolveComponentFactory(this.ComponentArray[j].component);
            this.createdComponent.push({"com": com, "content" : this.courseDetail.content[i]});
  
            }
        }
      }
    }
    
    setTimeout(function(){
      // at this point we want the "another-child" component to be rendered into the app.component:
      
      for(let  i = 0 ; i < this.createdComponent.length ; i++){
         this.ref = this.parent.createComponent(this.createdComponent[i].com);
        this.ref.instance.content = this.createdComponent[i].content;
        this.ref.instance.index = i;
      }
        this.wind.nativeWindow.initFixedScrollBlock();
        this.wind.nativeWindow.initFixedSidebar();
        setTimeout(function(){
          this.wind.nativeWindow.initAnchors();
        }.bind(this), 1000)
      }.bind(this), 1000);
  }
  back(){
    this.messageEvent.emit('back');
    this.router.navigate(['courses']);
    console.log("?????????")
  }

}
