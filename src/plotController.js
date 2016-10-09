function plotController() {
	// Plotly.deleteTraces('tester', 0);
	TESTER = document.getElementById('tester');
	trace1 = {
		x: x,
		y: yo,
		color: 'black',
		name: 'Observed',
	}
	trace2 = {
		x: x,
		y: y,
		color: 'red',
		name: 'Model',
	}
	Plotly.newPlot( TESTER, [trace1,trace2], {
	margin: { t: 0 } } );
}
