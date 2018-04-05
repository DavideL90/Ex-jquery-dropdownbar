$(document).ready(function(){

  $('.bar-items').mouseenter(function(){
    $(this).children('.dropdown-menu').show();
    $('.drop-items').mouseenter(function(){
      $(this).children('.second-dropdown').show();
    });

  });
  $('.bar-items').mouseleave(function(){
    $(this).children('.dropdown-menu').hide();
  });


});
