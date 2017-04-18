// Library functions 2 (the revenge)

var globalWidgetData;

function pageStart(firstSelect) {
  $.getJSON("global-widget-data.json", function(result){
    globalWidgetData = result;  
    registerSelectOnChanges();
    doOnChange(firstSelect);
  });
}

function registerSelectOnChanges() {

  console.log(globalWidgetData);

  $(":select").each(function() {
    console.log($(this).id);
  });
}

function doOnChange(firstSelect) {
}

/*
        $.each(result, function(i, field){
            $("div").append(field + " ");
        });
*/