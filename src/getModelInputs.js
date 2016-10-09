function getModelInputs() {
	var varAnthro = $("[name='anthro']").bootstrapSwitch('state');
	var varVolc = $("[name='volc']").bootstrapSwitch('state');
	var varSol = $("[name='sol']").bootstrapSwitch('state');
	var varNat = $("[name='nat']").bootstrapSwitch('state');
	var varFb = $( "#varFb" ).val();
	// array = [varAnthro, varVolc, varSol, varNat]
	var opt = [];
	opt.anthro= varAnthro;
	opt.volc= varVolc;
	opt.sol = varSol;
	opt.nat = varNat;
	opt.fb = Number(varFb);
	return opt
}