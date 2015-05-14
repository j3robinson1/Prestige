$(document).ready(function(){
  $('#navigation a, #fixedbar a').on('click', function(e) {
    e.preventDefault();
  });
   
  $("#slideshow > span:gt(0)").hide();

  setInterval(function() { 
    $('#slideshow > span:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  3000);
  setInterval(function() { 
    $('#slideshow2 > span:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow2');
  },  3000);
});