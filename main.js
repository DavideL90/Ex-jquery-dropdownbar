$(document).ready(function(){

  $('.bar-items').mouseenter(function(){
    $(this).children('.dropdown-cnt').show();

  });
  $('.bar-items').mouseleave(function(){
    $(this).children('.dropdown-cnt').hide();
  });

  $('.drop-items').mouseenter(function(){
      $(this).children('.second-dropdown-cnt').show();
    });
  $('.drop-items').mouseleave(function(){
    $(this).children('.second-dropdown-cnt').hide();
  });
});
