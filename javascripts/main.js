"use strict";

document.addEventListener("DOMContentLoaded", function(){
  var $bodyElement = $("[data-js=body]");
  var $headingElement = $bodyElement.find(".heading");
  var $paragraphElement = $bodyElement.find(".paragraph");

  $headingElement.on("click", function(e){
    var $paragraphOpen = $(e.currentTarget);
    $paragraphElement.removeClass("active");
    $paragraphOpen.next().toggleClass("active");
  });
});
