/*global $,console */
$(document).ready(function() {
    $(".ul-color li a").click(function() {
      $(".ul-color li a").removeClass("active");
      $(this).addClass("active");
    });
    $(".ul-size li a").click(function() {
      $(".ul-size li a").removeClass("active");
      $(this).addClass("active");
    });
  });
  