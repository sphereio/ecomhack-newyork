function initialize() {

      	var windowLatLng = new google.maps.LatLng(40.7275169, -74.0057193); // wework newYork

      	var mapCanvas = document.getElementById('map-location');

        var mapOptions = {
	        center: windowLatLng,
	        zoom: 13,
	        scrollwheel: false,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(mapCanvas, mapOptions);

        var contentString = '<div class="info-window">'+
        	'<h3>WeWork NYC</h3>'+
        	'<span>Where you can find us</span>'+
        	'<p>175 VARICK STREET, NEW YORK, NY 10014</p>'+
        	'</div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 240
		});

        var marker = new google.maps.Marker({
		    position: windowLatLng,
		    map: map,
		    title: 'Hello World!',
		    show: true
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});

		google.maps.event.trigger(marker, 'click')

		marker.setVisible(false)

      }

      google.maps.event.addDomListener(window, 'load', initialize);
