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
  constructor(private wind: WindowRef, private componentFactoryResolver: ComponentFactoryResolver) { 
    

  }

  ngOnInit() {
   // console.log(jquery)
    console.log(this.courseDetail , "detail")
    this.title = this.courseDetail.name;
    this.contentlist = this.courseDetail.content;
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
      }.bind(this), 1000);
    this.wind.nativeWindow.initAnchors();
  }

}
