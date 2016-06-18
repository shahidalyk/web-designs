
$(function() {
    $('h1').on('click',function (){
    	if ( $('div.panel-2').hasClass('hide')) {
        $('div.panel-1').fadeOut(400).addClass('hide',function() {
		$('div.panel-2').removeClass('hide').fadeIn(400);
        return false;
    	});
    	}
    

    	else if ( $('div.panel-1').hasClass('hide')) {
        $('div.panel-2').addClass('hide').fadeOut(400,function() {
		$('div.panel-1').fadeIn(400).removeClass('hide');
		});
    	 return false;
    	
    	}
    	
    	
});
    
    

	$('body').on('click',function (){
		$('div.panel-1').addClass('hide').fadeOut(400,function() {
			$('div.panel-2').fadeIn(400).removeClass('hide');
			return false;
		});
		});
	
});
	

$(function() {
 $('#accordion-slider').kwicks({
 max : 360,
 spacing : 2
 });
});


$(function() {
	$('dd').filter(':nth-child(n+4)').addClass('hide');
	$('dd#portfolio1').removeClass('hide');
	$('dd#about1').addClass('hide');
	$('dl').on('click','dt',function(){
		
		$(this).next()
			.slideToggle(200);
	});
	});

$(function() {
	
	$.fn.superbgimage.options = {
		fadeIn: 1, 
		slideshow: 1, 
		slide_interval: 10000, 
		randomimage: 1, 
		speed: 'slow'
	};

	$('#thumbs').superbgimage().hide();
});




