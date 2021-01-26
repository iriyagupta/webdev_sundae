$(document).ready(function(){  
  $("#home").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });
})
$(document).ready(function(){  
  $("#projects").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 2000);
  });
})

$(document).ready(function(){  
  $("#forfoot").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
  });
})
