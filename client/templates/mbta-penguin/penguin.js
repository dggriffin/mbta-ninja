Template.penguin.onRendered(function() {
    GoogleMaps.load({
        libraries: 'geometry,places'
    });
});

Template.penguin.onCreated(function() {

    GoogleMaps.ready('exampleMap', function(map) {
        var stops = Stops.find().fetch();

        _.each(stops, function(stop) {
            new google.maps.Marker({
                position: {
                    lat: parseFloat(stop.stop_lat),
                    lng: parseFloat(stop.stop_lon)
                },
                map: map.instance
            });
        });

        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);

        map.instance.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


        map.instance.addListener('bounds_changed', function() {
            searchBox.setBounds(map.instance.getBounds());
        });

        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }
            
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {

                if (place.geometry.viewport) {
                    // Only geocoes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }

                console.log(place.name)
            });
                map.instance.fitBounds(bounds);

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