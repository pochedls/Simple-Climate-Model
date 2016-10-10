// This function gets the user inputs to run the model and saves in the opt array. 

function getModelInputs() {
	// Get inputs
	var varAnthro = $("[name='anthro']").bootstrapSwitch('state');
	var varVolc = $("[name='volc']").bootstrapSwitch('state');
	var varSol = $("[name='sol']").bootstrapSwitch('state');
	var varNat = $("[name='nat']").bootstrapSwitch('state');
	var varFb = $( "#varFb" ).val();
	var varH = $( "#varH" ).val();
	var varFuture = $( "#scenario" ).val();
	// Put inputs into opt array
	var opt = [];
	opt.anthro= varAnthro;
	opt.volc= varVolc;
	opt.sol = varSol;
	opt.nat = varNat;
	opt.fb = Number(varFb);
	opt.H = Number(varH);
	opt.future = varFuture;
	return opt
}