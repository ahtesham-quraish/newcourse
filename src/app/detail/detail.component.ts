import { Component,Input, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
declare var jquery:any;
declare var $ :any;
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

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  title:any;
  contentlist:any;
   ref = '';
  @Input() courseDetail:any;
  ComponentArray = [{"type": "slides", "component": SlidesComponent} , {"type": "pdf", "component": PdfComponent},
  {"type": "img", "component": ImgComponent},{"type": "video", "component": VideoComponent},
  {"type": "audio", "component": AudioComponent}, {"type": "document", "component": DocumentComponent},
  {"type": "text", "component": TextComponent}];
  createdComponent = [];
  @ViewChild('parent', {read: ViewContainerRef})
  parent: ViewContainerRef;
  constructor(private wind: WindowRef, private componentFactoryResolver: ComponentFactoryResolver, private detailservice : CourseListingServiceService) { 
    

  }

  ngOnInit() {
   // console.log(jquery)
    console.log(this.courseDetail , "detail")
    this.title = this.courseDetail.name;
    this.contentlist = this.courseDetail.content;
    for(let i = 0 ; i < this.contentlist.length; i++){
      if(this.contentlist[i].type == 'Question'){
        let urlSplit = this.contentlist[i].url.split('qbank/');
        this.detailservice.fetchQuestionData(urlSplit[1]).subscribe(
          (data) => {
            console.log("data question", urlSplit[1], data, i)
            //this.question = data;
            //this.type = this.content[$event.index].type;
    
          })
      }
    }

 
    for(let i = 0; i < this.courseDetail.content.length; i++ ){
      for(let j = 0; j < this.ComponentArray.length; j++){
        if(this.ComponentArray[j].type == this.courseDetail.content[i].type){
          let com = this.componentFactoryResolver.resolveComponentFactory(this.ComponentArray[j].component);
          this.createdComponent.push({"com": com, "content" : this.courseDetail.content[i]});
          console.log(this.courseDetail.content[i].type)
        }
      }
    }
    
    setTimeout(function(){
      // at this point we want the "another-child" component to be rendered into the app.component:
      
      for(let  i = 0 ; i < this.createdComponent.length ; i++){
         this.ref = this.parent.createComponent(this.createdComponent[i].com);
        console.log(this.createdComponent[i].com)
        this.ref.instance.content = this.createdComponent[i].content;
        this.ref.instance.index = i;
      }
        this.wind.nativeWindow.initFixedScrollBlock();
        
        setTimeout(function(){
          this.wind.nativeWindow.initAnchors();
        }.bind(this), 1000)
      }.bind(this), 1000);
    
  }

}
