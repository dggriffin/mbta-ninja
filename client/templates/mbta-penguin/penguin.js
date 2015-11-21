Template.penguin.onRendered(function() {
    GoogleMaps.load();
});

Template.penguin.helpers({
    exampleMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(42.3597105, -71.0529804),
                zoom: 15
            };
        }
    }

});