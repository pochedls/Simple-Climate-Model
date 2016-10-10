// This javascript is the master javascript controller for the page. 

$(document).ready(function() {
	// Change switch to nice toggle switch
  	$("[id='switch']").bootstrapSwitch();
  	// Include numerical value for slider
  	$( function() {
		$( "#slider-vertical" ).slider({
			orientation: "vertical",
			range: "min",
			min: -7.4,
			max: 1,
			step: 0.1,
			value: -3.2,
			slide: function( event, ui ) {
				$( "#varFb" ).val( ui.value );
			}
		});
	  $( "#varFb" ).val( $( "#slider-vertical" ).slider( "value" ) );
	} );
  	$( function() {
		$( "#slider-vertical2" ).slider({
			orientation: "vertical",
			range: "min",
			min: -1000,
			max: -20,
			step: 10,
			value: -100,
			slide: function( event, ui ) {
				$( "#varH" ).val( ui.value );
			}
		});
	  $( "#varH" ).val( $( "#slider-vertical2" ).slider( "value" ) );
	} );	

  // Submit button actions
  $( "form" ).submit(function( event ) {
  	// Run Model
	runModel();
	// Plot Results
	plotController();
	return false;
	});
});