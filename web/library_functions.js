// Library functions

// Get list of registers with a location and stick in a text box
function fillLocationRegistersBox() {
  var jqxhr = $.get("registers-with-a-location.txt")
    .done(function(data) {
      $("#registers-with-locations-box").val(data);
    })
    .fail(function() {
      alert( "fillLocationRegistersBox failed!" );
    });
}

// Get list of registers with a location and stick in a text box
function fillBoundaryRegistersBox() {
  var jqxhr = $.get("registers-with-a-boundary.txt")
    .done(function(data) {
      $("#registers-with-boundaries-box").val(data);
    })
    .fail(function() {
      alert( "fillBoundaryRegistersBox failed!" );
    });
}

// Update the select of registers that have a boundary
function updateSelectOfRegistersWithBoundaries() {
  var jqxhr = $.get("registers-with-a-boundary.txt")
    .done(function(data) {

      var $el = $("#registers-with-boundaries-select");
      $el.empty();
      $.each(data.split("\n"), function(registerName) {
        $el.append($("<option></option>").attr("value", registerName).text(registerName));
      });

    })
    .fail(function() {
      alert( "updateSelectOfRegistersWithBoundaries failed!" );
    });

}

// Re-centre and re-zoom a passed-in map

// Plot some KML on a passed-in map

// Plot some GeoJSON on a pass-in map

// Drop an animated pin with an information window on a passed in map

// Drop a series on animated pins with information windows on a passed in map