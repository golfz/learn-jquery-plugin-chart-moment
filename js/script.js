$(document).ready(function () {

  $('.active').find('.fa-angle-left').removeClass('fa-angle-left').addClass('fa-angle-down')

  $('#left-nav > ul > li > a').click(function () {

    $('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-left')

    if ($(this).parent('li').hasClass('active')) {
      $(this).parent('li').removeClass('active')

    } else {
      $(this).parents('ul').find('li.active').removeClass('active')
      $(this).parent('li').addClass('active')
      $(this).parent('li').find('.fa-angle-left').removeClass('fa-angle-left').addClass('fa-angle-down')
    }

  });


  $('.left-nav-sub a').click(function () {
    $(this).parents('.left-nav-sub').find('.active').removeClass('active');
    $(this).addClass('active');
  });

});
