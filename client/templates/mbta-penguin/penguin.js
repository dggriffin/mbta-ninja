var updatedZoom = new Tracker.Dependency();

var filteredStops = []
var markers = []

Template.penguin.onRendered(function() {
    GoogleMaps.load({
        libraries: 'geometry,places'
    });
});

Template.penguin.onCreated(function() {

    GoogleMaps.ready('exampleMap', function(map) {

        // var stops = Stops.find().fetch();
        // _.each(stops, function(stop) {
        //     var marker = new google.maps.Marker({
        //         position: {
        //             lat: parseFloat(stop.lat),
        //             lng: parseFloat(stop.lon)
        //         }
        //         map: map.instance,

        //     });
        //     markers.push(marker);
        // });

        // filteredStops = stops;

        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);

        map.instance.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


        map.instance.addListener('bounds_changed', function() {
            searchBox.setBounds(map.instance.getBounds());


            console.log(map.instance.zoom)
            console.log("BOUNDS CHANGED")

            //Remove all markers
                _.each(markers, function(marker){
                    marker.setMap(null);
                })
                markers = []

            // Bounds changed so update the List of Spots
            if (map.instance.zoom > 13) {

                var bounds = map.instance.getBounds();
                var latmin = bounds.O.O;
                var latmax = bounds.O.j;
                var lonmin = bounds.j.j;
                var lonmax = bounds.j.O;

                console.log(latmin)
                console.log(latmax)
                console.log(lonmin)
                console.log(lonmax)

                filteredStops = Stops.find({
                    $and: [{
                        lat: {
                            $gt: latmin
                        }
                    }, {
                        lat: {
                            $lt: latmax
                        }
                    },{
                        lon: {
                            $gt: lonmin
                        }
                    }, {
                        lon: {
                            $lt: lonmax
                        }
                    }
                    ]
                }).fetch();

                console.log(filteredStops)


                // //Remove all markers
                // _.each(markers, function(marker){
                //     marker.setMap(null);
                // })
                // markers = []


                //Add the ones that are within bounds
                _.each(filteredStops, function(stop) {
                    var marker = new google.maps.Marker({
                        position: {
                            lat: parseFloat(stop.lat),
                            lng: parseFloat(stop.lon)
                        },
                        map: map.instance,
                        draggable: true
                    });
                    markers.push(marker)
                });


                // Session.set("MapBounds", map.instance.getBounds());
                updatedZoom.changed()
            }
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
    },
    stops: function() {
        updatedZoom.depend();

        var map = GoogleMaps.get("exampleMap")
        if (map) {



            // var stops = Stops.find().fetch();
            // _.each(stops, function(stop) {
            //     new google.maps.Marker({
            //         position: {
            //             lat: parseFloat(stop.stop_lat),
            //             lng: parseFloat(stop.stop_lon)
            //         },
            //         map: map.instance
            //     });
            // });


            console.log(Session.get("MapBounds"))

            // return [{name : "aa"},
            //         {name : "b"},
            //         {name : bounds.O.O}]

            return filteredStops;
        } else {
            return [{
                stop_name: "aa"
            }]
        }

    }
});