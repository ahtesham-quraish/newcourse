import { Component, OnInit, Input } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  constructor(private qservice : QuestionSubmitService) { }
  content= {};
  @Input() index: any;
  question : any 
  image:any;
  audio:any;
  vedioUrl:any;
  duration:any;

  ngOnInit() {
      let item = this.content;
      let img = [];
      let time = 0;
      let preTime = 0;
      let audioUrl = item['contentAudio'][0].url;
      let audioDuration = this.durationToSeconds(item['contentAudio'][0].totalDuration);
      for(var i = 0; i < item['contentData'].length; i++){
      preTime = i == 0 ?  0 :  preTime + this.durationToSeconds(item['contentData'][i-1].slideDuration)
       if(i == 0){
        time = 0
      }
      else {
        time = time + this.durationToSeconds(item['contentData'][i-1].slideDuration)
      }  
       img.push({ 
          'image' : item['contentData'][i].url,
           'thumbnail': item['contentData'][i].url,
           'slidetime':  time
        })
      }
      this.image = img
      this.audio = audioUrl;
      this.duration = audioDuration
      console.log("><><><><><>", this.vedioUrl)
      if($('audio').length != 0){
        $('.dispose').click()
      }
      let timeoutId = setTimeout(function() {  
        this.t = $('#audioslideshow').audioSlideshow();
        if($('.audio-play').length != 0){
        $($('.audio-play')[0]).css('display' , 'block')
        $($('.audio-play')[1]).css('display' , 'inline')
      }
       console.log("pochna wa ", this.t)
      }.bind(this), 1000);
    
      
    
  }
  durationToSeconds(duration){
    duration = duration.substr(1);
    let seconds = 0;
    if(duration[0]=='D'){ // PT15M10S
    duration = duration.substr(1);
    seconds += parseInt(duration.substr(0, duration.indexOf('T'))) * 84600;
    duration = duration.substr(duration.indexOf('T'));
    }
    else if(duration[0]=='T'){
    duration = duration.substr(1);
    }
    if(duration.indexOf('H')!=-1){ // PT15M10S
    seconds += parseInt(duration.substr(0, duration.indexOf('H'))) * 3600;
    duration = duration.substr(duration.indexOf('H')+1);
    }
    if(duration.indexOf('M')!=-1){ // PT15M10S
    seconds += parseInt(duration.substr(0, duration.indexOf('M'))) * 60;
    duration = duration.substr(duration.indexOf('M')+1);
    }
    if(duration.indexOf('S')!=-1){ // PT15M10S
    seconds += parseFloat(duration.substr(0, duration.indexOf('S')));
    }
    return seconds;
   }
   onOptionChanged(value:string, index:number){
    
  
  }

}
