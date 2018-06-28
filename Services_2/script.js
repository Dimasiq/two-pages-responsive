$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('.menu').slideToggle(500);
  })
  $(window).resize(function(){
    if($(window).width() > 834){
      $('.menu').removeAttr('style');
    }
  })
})

$('.accordion .accordion-content').hide().prev().click(function() {
	$(this).parents('.accordion').find('.accordion-content').not(this).slideUp().prev().removeClass('active');
	$(this).next().not(':visible').slideDown().prev().addClass('active');
});
