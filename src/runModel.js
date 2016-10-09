
// var historical = JSON.parse(historical);
// alert(mydata[0].name);
// var s = historical.slice(1,10)
function runModel() {
	x = []
	y = []
	f = []
	yo = []
	var s = []
	var v = []
	var a = []
	opt = getModelInputs();
	var fb = opt.fb;
	for (i = 0; i < historical.length; i++) {
		x[i] = historical[i].Year
		s[i] = historical[i].Solar
		v[i] = historical[i].Volcano
		if (opt.anthro) {
			a[i] = historical[i].Anthropogenic;	
		} else {
			a[i] = 0;
		}
		if (opt.volc) {
			v[i] = historical[i].Volcano;	
		} else {
			v[i] = 0;
		}
		if (opt.sol) {
			s[i] = historical[i].Solar;	
		} else {
			s[i] = 0;
		}		
		// Forcing Total
		f[i] = s[i] + v[i] + a[i];
		// Response
		if (i == 0) {
			y[i] = 0;	
		} else if (i == historical.length) {
			break;
		}
		else {
			y[i] = (y[i-1]*fb+f[i])/(100*1025*3985)*31363200 + y[i-1];
		}
		yo[i] = historical[i].Observed;
		// m = y;
		// f = y;
		
	}	
}

// document.write(x[0])
