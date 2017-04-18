// Library functions 2 (the revenge)

var globalWidgetData;

function pageStart(element) {
  $.getJSON("global-widget-data.json", function(result){
    globalWidgetData = result;  
    loadData(element);

//    registerSelectOnChanges();
//    $("#" + inputElement).trigger( "change" );
  });
}

function loadData(element) {
  if ($("#" + element).is('select')) {

console.log(element + ".txt");

    var jqxhr = $.get(element + ".txt", { element: element })
      .done(function(data) {
        var $el = $("#" + element);
        $el.empty();
        splitData = data.split("\n");
        $.each(splitData, function(loopNumber, value) {
          $el.append($("<option></option>").attr("value", value).text(value));
      });
    })
    .fail(function() {
      alert("Failed to load select : " + element);
    });

  }
/*
  else if (($("#" + element).is('textarea')) {
  
  
  
  }
*/
}






function registerSelectOnChanges() {

  $('select').each(function() {
    this.change(doOnChange());
  });
}

function doOnChange(firstSelect) {

  console.log(this.id);

}