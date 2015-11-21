Template.penguin.onRendered(function() {
    GoogleMaps.load({
        libraries: 'geometry,places'
    });
});

Template.penguin.onCreated(function() {

    GoogleMaps.ready('exampleMap', function(map) {
        var marker = new google.maps.Marker({
            position : {lat: parseFloat(Stops.findOne().stop_lat), lng: parseFloat(Stops.findOne().stop_lon)},
            draggable: true,
            map: map.instance
        });

        var stops = Stops.find().fetch();

        _.each(stops, function(stop){
        	debugger;
            new google.maps.Marker({
                //position: new google.maps.LatLng(parseFloat(stop.stop_lat), parseFloat(stop.stop_lon)),
                position: {lat: parseFloat(stop.stop_lat), lng: parseFloat(stop.stop_lon)},
                map: map.instance
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