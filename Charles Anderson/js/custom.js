
// jQuery Orbit Slider

jQuery.noConflict()(function($){
		jQuery('#orbit-slider').orbit({
			 animation: 'horizontal-push',                 // fade, horizontal-slide, vertical-slide, horizontal-push
			 animationSpeed: 600,               // how fast animtions are
			 timer: true, 			 			// true or false to have the timer
			 advanceSpeed: 4000, 				// if timer is enabled, time between transitions 
			 pauseOnHover: false, 				// if you hover pauses the slider
			 startClockOnMouseOut: false,		// if clock should start on MouseOut
			 startClockOnMouseOutAfter: 1000,	// how long after MouseOut should the timer start again
			 directionalNav: true,				// manual advancing directional navs
			 captions: false,					// do you want captions?
			 captionAnimation: 'fade',			// fade, slideOpen, none
			 captionAnimationSpeed: 1000,		// if so how quickly should they animate in
			 bullets: false,						// true or false to activate the bullet navigation
			 afterSlideChange: function(){}		// empty function 
		});
	
});
