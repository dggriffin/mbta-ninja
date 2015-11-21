Template.penguin.onRendered(function() {
    GoogleMaps.load({
        libraries: 'geometry,places'
    });
});

Template.penguin.onCreated(function() {

    GoogleMaps.ready('exampleMap', function(map) {
        var stops = Stops.find().fetch();

        _.each(stops, function(stop){
            new google.maps.Marker({
                position: {lat: parseFloat(stop.stop_lat), lng: parseFloat(stop.stop_lon)},
                map: map.instance
            });
        })

        map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Clear out the old markers.
            markers.forEach(function(marker) {
                marker.setMap(null);
            });
            markers = [];


            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                }));

                if (place.geometry.viewport) {
                    // Only geocoes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }

                console.log(place.name)
            });
        })
    });
});

Template.penguin.helpers({
    exampleMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(42.3601, -71.0589),
                zoom: 15
            };
        }
    }
});