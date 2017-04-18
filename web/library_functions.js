// Library functions 2 (the revenge)

var globalWidgetData;

function pageStart(element) {
  $.getJSON("global-widget-data.json", function(result){
    globalWidgetData = result;  
    loadData(element, element);
    registerSelectOnChanges();
  });
}

function loadData(element, fromLocation) {

  var jqxhr = $.get(fromLocation + ".txt", { element: element })
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
      
    })
    .fail(function() {
      alert("Failed to load select : " + element);
    });

}

function registerSelectOnChanges() {
  $('select').each(function() {

console.log(this.id);

//    this.change(doOnChange());
  });
}

function doOnChange(firstSelect) {

  console.log(this.id);

}