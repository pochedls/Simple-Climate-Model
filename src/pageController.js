$(document).ready(function() {
  $("[id='switch']").bootstrapSwitch();
  // var varAnthro = getModelInputs();
  // document.write(varAnthro)
  // console.log($("form").serializeArray())
  // varAnthro = $("[id='switch']").bootstrapSwitch('state');
  
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
  // console.log(varAnthro)
  $( "form" ).submit(function( event ) {
	  runModel();
	  plotController();
	  return false;
	  // document.write('xyz')
	});
});