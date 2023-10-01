$('input').focus(function() {
    $(this).closest('.inp').toggleClass('inp-focus');
  });
  
  $('input').focusout(function() {
    $(this).closest('.inp').toggleClass('inp-focus');
  });
  