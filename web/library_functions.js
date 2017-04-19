// Library functions 2 (the revenge)

var globalWidgetData = [
  ["registers-with-locations", "registers-with-locations", ""],
  ["registers-with-boundaries", "registers-with-boundaries", ""],
  ["registers-with-boundaries-select", "registers-with-boundaries", "list-of-boundaries-select"],
  ["list-of-boundaries-select", "_registers-with-boundaries-select", "specific-boundary-data-box"],
  ["specific-boundary-data-box", "_registers-with-boundaries-select_list-of-boundaries-select", ""]
];

function pageStart(element) {
  loadData(element, element);
  registerSelectOnChanges();
}

function loadData(element) {

  // Work out where we're getting our data from
  var fromLocation = "";
  globalWidgetData.forEach(function(data) {
    if (data[0] === element) {
      if (data[1].slice(0,1) !== "_") {
        fromLocation = data[1];
      }
      else 
      {
        bits = data[1].split("_");
        bits.shift();
        for (i = 0; i < bits.length; i++) {
          fromLocation = fromLocation + $("#" + bits[i]).find(":selected").text() + "_";
        }
        fromLocation = fromLocation.slice(0, -1);
      }
    }
  });

  // Load the data from that location and update the element
  var jqxhr = $.get("https://enigmatic-dusk-83533.herokuapp.com/data/" + fromLocation + ".txt", { element: element })
    .done(function(data) {
      var $el = $("#" + element);
      $el.empty();

      if ($el.is('select')) {
        splitData = data.split("\n");
        $.each(splitData, function(loopNumber, value) {
          $el.append($("<option></option>").attr("value", value).text(value));
        });
      }
      else if ($el.is('textarea')) {
        $el.val(data);
      } 
      
      // If updating that element cascades other elements, make it so!
      globalWidgetData.forEach(function(data) {
        if ((data[0] === element) && (data[2] !== "")) {
          loadData(data[2]);
        }
      });
      
    })
    .fail(function() {
      alert("Failed to load select : " + element);
    });

}

function registerSelectOnChanges() {
  $('select').each(function() {
    $("#" + this.id).change(doOnChange);
  });
}

function doOnChange() {
  globalWidgetData.forEach(function(data) {

console.log(data[0] + " : " + event.target.id);

    if (data[0] == event.target.id) {
      if (data[2] != "") {
        loadData(data[2]);
      }
    }
  });
}
