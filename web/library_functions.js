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
      splitData = data.split("\n");
      $.each(splitData, function(loopNumber, registerName) {
        $el.append($("<option></option>").attr("value", registerName).text(registerName));
      });

      // Need to manually fire the change function for the first entry as onChange doesn't trigger unless a new thing is selected :-(
      registerWithBoundarySelected();

    })
    .fail(function() {
      alert( "updateSelectOfRegistersWithBoundaries failed!" );
    });

}

// Update text and select for list boundaries with a register that contains boundaries
function registerWithBoundarySelected() {
  selectedRegister = $( "#registers-with-boundaries-select option:selected" ).text();
  $('#registerName').text(selectedRegister);
  
  registerBoundaryList = selectedRegister + "-boundaries.txt";
  var jqxhr = $.get(registerBoundaryList)
    .done(function(data) {

      var $el = $("#list-of-boundaries-select");
      $el.empty();
      splitData = data.split("\n");
      $.each(splitData, function(loopNumber, registerName) {
        $el.append($("<option></option>").attr("value", registerName).text(registerName));
      });

      // Need to manually fire the change function for the first entry as onChange doesn't trigger unless a new thing is selected :-(
      specificBoundarySelected();

    })
    .fail(function() {
      alert( "registerWithBoundarySelected failed!" );
    });  
  
}

// Fill in the box with specific boundary data
function specificBoundarySelected() {
  selectedBoundary = $( "#list-of-boundaries-select option:selected" ).text();

  registerBoundaryData = selectedBoundary + "-boundary-data.txt";
  var jqxhr = $.get(registerBoundaryList)
    .done(function(data) {
      $("#specific-boundary-data-box").val(data);
    })
    .fail(function() {
      alert( "registerWithBoundarySelected failed!" );
    }); 

}

// Re-centre and re-zoom a passed-in map

// Plot some KML on a passed-in map

// Plot some GeoJSON on a pass-in map

// Drop an animated pin with an information window on a passed in map

// Drop a series on animated pins with information windows on a passed in map