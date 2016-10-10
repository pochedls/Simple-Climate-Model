// This script runs the model 

function runModel() {
	// Initialize *global* variables 
	x = [] // x-axis of plotly plot (year)
	y = [] // y-axis of plotly plot (model temperture)
	f = [] // forcing 
	yo = [] // this will be used for the observations (temperature)

	// Initialize local variables
	var s = []
	var v = []
	var a = []
	
	// Get model inputs (separate routine)
	opt = getModelInputs();

	// Save feedback parameter and mixed layer depth for calculations
	var fb = opt.fb;
	var H = opt.H*-1;

	// Loop over years 1 : n - 1
	for (i = 0; i < historical.length; i++) {
		// Put Data into vectors
		x[i] = historical[i].Year
		s[i] = historical[i].Solar
		v[i] = historical[i].Volcano
		yo[i] = historical[i].Observed;

		// If options include forcing incorporate forcing data into matrix. 
		// Otherwise record 0 (no forcing)
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

		// Sum total forcing
		f[i] = s[i] + v[i] + a[i];

		// Calculate model temperature response
		if (i == 0) {
			y[i] = 0; // Start with 0 anomaly
		} else if (i == historical.length) {
			break; // No prediction for end year
		}
		else {
			y[i] = (y[i-1]*fb+f[i])/(H*1025*3985)*31363200 + y[i-1]; 
		}
	}	

	// Future scenario
	if (opt.future != 'none') {
		var offset = historical.length;
		// Loop over years 1 : n - 1
		for (i = 0; i < future.length; i++) {
			// Put Data into vectors
			x[i-1+offset] = future[i].Year
			if (opt.future == "rcp3") {
				f[i-1+offset] = future[i].RCP3;
			} else if (opt.future == "rcp45") {
				f[i-1+offset] = future[i].RCP45;
			} else if (opt.future == "rcp6") {
				f[i-1+offset] = future[i].RCP6;
			} else if (opt.future == "rcp85") {
				f[i-1+offset] = future[i].RCP85;
			};
			// Calculate model temperature response
			if (i == future.length) {
				// y[i] = y[i]; // No prediction for end year
			} else {
				y[i+offset] = (y[i-1+offset]*fb+f[i-1+offset])/(H*1025*3985)*31363200 + y[i-1+offset]; 
			}
		}
	}
}

