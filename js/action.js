$( document ).ready(function() {

	// Smooth scrolling to the top of the webpage when 'Back to Top link is clicked'
	$('footer a').click(function(e) {
	  	console.log('footer a clicked');
	    
	    e.preventDefault();
	    
	    $('body,html').animate({
	      scrollTop: $(this.hash).offset().top
	    }, 700 );
  	});

	console.log('ready');
});