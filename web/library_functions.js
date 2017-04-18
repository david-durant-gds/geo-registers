// Library functions

// Get data from URL and stick in a text box
function urlToBox(url, box) {
  var jqxhr = $.get(url)
    .done(function(data) {
      $(box).val(data);
    })
    .fail(function() {
      alert( "Failed to get data to put in a text box!" );
    });
}

// Re-centre and re-zoom a passed-in map

// Plot some KML on a passed-in map

// Plot some GeoJSON on a pass-in map

// Drop an animated pin with an information window on a passed in map

// Drop a series on animated pins with information windows on a passed in map