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
  // Submit button actions
  $( "form" ).submit(function( event ) {
  	// Run Model
	runModel();
	// Plot Results
	plotController();
	return false;
	});
});