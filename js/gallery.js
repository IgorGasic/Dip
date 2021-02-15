
$(document).ready(function(){
    let $btns = $('.gallery-area .button-group button');
  
    $btns.click(function(e) {
      $('.gallery-area .button-group button').removeClass('active');
      e.target.classList.add('active');
  
      let selector = $(e.target).attr('data-filter');
      $('.gallery-area .grid').isotope({
        filter : selector
      });
  
      return false;
    });

    $('.gallery-area .button-group #btn1').trigger('click');

    $('.gallery-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
});
  
  });