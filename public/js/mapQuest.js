function initMap() {
	// add your code here
	L.mapquest.key = 'ljb8yUGYgZETjBzHQMbsWOsL3vtwVWqp';

	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	// Add marker to map
	L.marker([32.88, -117.236]).addTo(map);
}