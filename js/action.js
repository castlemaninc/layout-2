$( document ).ready(function() {

	$('footer a').click(function(e) {
	  	console.log('footer a clicked');
	    
	    e.preventDefault();
	    
	    $('body,html').animate({
	      scrollTop: $(this.hash).offset().top
	    }, 700 );
  	});

	console.log('ready');
});