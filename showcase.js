var type;

// Describe this function...
function scrollup() {
  $('.showcase-main-nav-wrapper').delay(0).animate({
    'margin-top':'-90px',
  },{ duration: 300, queue: false },'linear');
}


for (var count = 0; count < 0; count++) {
  $('#reload-btn').trigger('click');
}
var url_string = (window.location.href).toLowerCase();
var url = new URL(url_string);
var type = url.searchParams.get("type");
if (type == 'unbranded') {
  $('#showcase-client').css({
    'display':'none',
  });
  $('[bloc=showcase-home-nav]').css({
    'display':'none',
  });
} else if (type == 'branded') {
  $('[bloc=showcase-home-nav]').css({
    'display':'none',
  });
  $('#showcase-client').css({
    'display':'block',
  });
  $('#social-share').css({
    'display':'none',
  });
} else {
  $('[bloc=home-btn]').on('click',function() {
    $('.showcase-main-nav-wrapper').delay(0).animate({
      'margin-top':'0px',
    },{ duration: 300, queue: false },'linear');
  });
  $('[bloc=info-btn]').on('click',function() {
    scrollup();
  });
  $('[bloc=3d-btn]').on('click',function() {
    scrollup();
  });
  $('[bloc=360-btn]').on('click',function() {
    scrollup();
  });
  $('[bloc=video-btn]').on('click',function() {
    scrollup();
  });
  $('[bloc=gallery-btn]').on('click',function() {
    scrollup();
  });
  $('[bloc=plan-btn]').on('click',function() {
    scrollup();
  });
}
