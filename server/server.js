Meteor.startup(function() {
  Restivus.configure({
    useAuth: false,
    prettyJson:true
  });

  
  Restivus.addRoute('reports',{authRequired: false},{ 
      get: function(){
      //GET api/reports
      //Gives you the current list of active reports.
      var reports = Reports.find({expired: false}).fetch();
      return {statusCode:200, body:{data: reports}};
    }
  });

  // If there database is not yet populated then add info from the MBTA API
  if(_.isUndefined(Stops.findOne())){
    var url = "http://realtime.mbta.com/developer/api/v2/stopsbyroute"
    var api_key = "wX9NwuHnZU2ToO7GmGR9uw"
    var format = "json"

    var routes = ["1"];
    // TODO: add routes:
    // Silver Line, 1, 15, 22, 23, 28, 32, 39, 57, 66, 71, 73, 111, 116/117
    
    _.each(routes, function(route){
      var data = Meteor.http.get(url + "?api_key=" + api_key + "&format=" + format + "&route=" + route).data;
      console.log(data)

      var directions = data.direction;
      _.each(directions, function(direction){
        var stops = direction.stop;
          _.each(stops, function(stop){
            console.log(stop)
            Stops.insert({ 
              stop_id : stop.stop_id,
              stop_name: stop.stop_name,
              stop_lat: stop.stop_lat,
              stop_lon: stop.stop_lon
            });
          })
      });  
    });   
  }

});

// Task to expire old reports. It checks every minute to see if there are
// tasks reported/confirmed more than 30 minutes ago.
SyncedCron.add({
  name: 'Expire old reports',
  schedule: function(parser) {
    return parser.text('every 1 minute');
  },
  job: function() {
    // Decay weight
    Reports.update(
      {expired: false},
      {$inc: {weight: intervalDecay}},
      {multi: true}
    );

    // Expire the ones with 0 or negative weights
    Reports.update(
      {weight: {$lte: 0}},
      {$set: {expired: true}},
      {multi: true}
    );

    var activeRemaining = Reports.find({expired: false}).count();
    console.log(activeRemaining + ' active reports remaining.');
  }
});

SyncedCron.start();

// Publish subset of non-expired reports to client
Meteor.publish('reports', function () {
  return Reports.find({expired: false});
});

Meteor.publish('stops', function(){
  return Stops.find();
});
