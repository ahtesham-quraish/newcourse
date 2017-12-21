(function( $ ) {
  
	$.fn.audioSlideshow = function( options ) {
      
		var settings = {
			jPlayerPath: "/lib/swf",
			suppliedFileType: "mp3",
			playSelector: ".audio-play",
			pauseSelector: ".audio-pause",
			currentTimeSelector: ".play-time",
			durationSelector: ".total-time",
			playheadSelector: ".playhead",
			timelineSelector: ".timeline",
			volume: ".volume"
		};
	  
		if(options){
		  jQuery.extend(settings,options);
		}
		
		// Begin to iterate over the jQuery collection that the method was called on
		return this.each(function () {
		  console.log("settings", settings)
			// Cache `this`
			var $that = $(this),
				$slides = $that.find('.audio-slides').children(),
				
				$currentTime = $that.find(settings.currentTimeSelector),
				$volume = $that.find(settings.volume),
				$duration = $that.find(settings.durationSelector),
				$playhead = $that.find(settings.playheadSelector),
				$timeline = $that.find(settings.timelineSelector),
				$playButton = $that.find(settings.playSelector),
				$pauseButton = $that.find(settings.pauseSelector),

				slidesCount = $slides.length,
				slideTimes = new Array(),
				audioDurationinSeconds = parseInt($that.attr('data-audio-duration')),
				isPlaying = false,
				currentSlide = -1;

			$pauseButton.hide();
				
			// Setup slides			
			$slides.each(function(index,el){
				var $el = $(el);
				$el.hide();

				var second = parseInt($el.attr('data-slide-time')),
					thumbnail = $el.attr('data-thumbnail');
				
				if(index > 0){
					slideTimes.push(second);
				
					var img = '<span><img src="' + thumbnail + '"></span>',
						$marker = $('<a href="javascript:;" class="marker" data-time="' + second + '">' + img + '</a>'),
						l = (second / audioDurationinSeconds) * $that.width();
		  
					$marker.css('left',l).click(function(e){
						$jPlayerObj.jPlayer("play", parseInt($(this).attr('data-time')) + .5);
					});

					$timeline.append($marker);
				}
			});

			var $jPlayerObj = $('<div></div>');
			$that.append($jPlayerObj);
			console.log($that, "that")
			$jPlayerObj.jPlayer({
				
				ready: function () {
					
					$.jPlayer.timeFormat.padMin = false;
					$(this).jPlayer("setMedia", {
						mp3: $that.attr('data-audio')
					});
				},
				swfPath: settings.jPlayerPath,
				supplied: settings.suppliedFileType,
				preload: 'auto',
				cssSelectorAncestor: ""
			});
				
			$jPlayerObj.bind($.jPlayer.event.timeupdate, function(event) { // Add a listener to report the time play began
				var curTime = event.jPlayer.status.currentTime;
				audioDurationinSeconds = event.jPlayer.status.duration;
				var p = (curTime / audioDurationinSeconds) * 100 + "%";

				$currentTime.text($.jPlayer.convertTime(curTime));
				$duration.text($.jPlayer.convertTime(audioDurationinSeconds));

				$playhead.width(p);

				if(slidesCount){
					var nxtSlide = 0;
					for(var i = 0; i < slidesCount; i++){
						if(slideTimes[i] < curTime){
							nxtSlide = i + 1;
						}
					}

					setAudioSlide(nxtSlide);
				}
			});
				
			$jPlayerObj.bind($.jPlayer.event.play, function(event) { // Add a listener to report the time play began
				isPlaying = true;
				$playButton.hide();
				$pauseButton.show();
			});
			
			$jPlayerObj.bind($.jPlayer.event.pause, function(event) { // Add a listener to report the time pause began
				isPlaying = false;
				$pauseButton.hide();
				$playButton.show();
			});
			$('.fa-volume-down').on('click', function (e) {
				var audio = document.getElementsByTagName('audio')[0]
				audio.muted = !audio.muted;
				if(audio.muted){
					$("input[type=range]").val(0);
				}
				else{
					$("input[type=range]").val(100);
					audio.volume = 1
				}

				return false;
			});
			SetVolume = function(time){
				console.log(time, "time")
				var audio = document.getElementsByTagName('audio')[0]
				audio.volume = time / 100;

			}
			var updateVolume = function (x, vol) {
				var audio = document.getElementsByTagName('audio')[0]
				var volume = $('.volume');
				var percentage;
				//if only volume have specificed
				//then direct update volume
				if (vol) {
					percentage = vol * 100;
				} else {
					var position = x - volume.offset().left;
					percentage = 100 * position / volume.width();
				}
			
				if (percentage > 100) {
					percentage = 100;
				}
				if (percentage < 0) {
					percentage = 0;
				}
			
				//update volume bar and video volume
				$('.volumeBar').css('width', percentage + '%');
				console.log(percentage)
				audio.volume = percentage / 100;
			
				//change sound icon based on volume
				if (audio.volume == 0) {
					$('.sound').removeClass('sound2').addClass('muted');
				} else if (audio.volume > 0.5) {
					$('.sound').removeClass('muted').addClass('sound2');
				} else {
					$('.sound').removeClass('muted').removeClass('sound2');
				}
			
			};
			$slides.click(function(event){
				$jPlayerObj.jPlayer("play");
			});
			$('.dispose').click(function(event){
				isPlaying = false;
				$jPlayerObj.jPlayer("pause");
				$jPlayerObj.jPlayer("destroy");
				$jPlayerObj.remove()
			});
			$playButton.click(function(event){
				//console.log("$jPlayerObj",$jPlayerObj)
				$jPlayerObj.jPlayer("play");
			});
				
			$pauseButton.click(function(event){
				console.log("PPPPPPPPPPPPPPPPPPPPPPPPP")
				$jPlayerObj.jPlayer("pause");
			});
			
			
			$timeline.click(function(event){
				var l = event.pageX -  $(this).offset().left;
				var t = (l / $that.width()) * audioDurationinSeconds;

				$jPlayerObj.jPlayer("play", t);
			});
			
			setAudioSlide(0);
			function dispose(){
				console.log('dispase');
			}
			function setAudioSlide(n){
				if(n != currentSlide){
					if($slides.get(currentSlide)){
						$($slides.get(currentSlide)).fadeOut();
					}

					$($slides.get(n)).fadeIn();
					currentSlide = n;
				}
			}
				
		});
	};
}(jQuery));