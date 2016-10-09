function plotController() {
	// Get correct div
	TESTER = document.getElementById('tester');
	// Define plot for observations
	trace1 = {
		x: x,
		y: yo,
		color: 'black',
		name: 'Observed',
	}
	// Define plot for model results
	trace2 = {
		x: x,
		y: y,
		color: 'red',
		name: 'Model',
	}
	// Plot using plotly
	Plotly.newPlot( TESTER, [trace1,trace2], {
	margin: { t: 0 } } );
}
