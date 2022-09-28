$('#profile-img-form').css({
  'display':'none',
});
$('#all-orders-btn').css({
  'padding-left':'50px',
  'color':'#0b0b0b',
});
$('#all-orders-btn').addClass('add-arrow');

$('#all-orders-btn').on('click',function() {
  $('#profile-img-form').css({
    'display':'none',
  });
  $('#all-orders').css({
    'display':'block',
  });
  $('#all-orders-btn').addClass('current');
  $('#all-orders-btn').css({
    'color':'#0b0b0b',
    'padding-left':'50px',
  });
  $('#profile-image-btn').removeClass('current');
  $('#all-orders-btn').addClass('add-arrow');
  $('#profile-image-btn').removeClass('add-arrow');
  $('#profile-image-btn').css({
    'padding-left':'30px',
    'color':'#959595',
  });
});

$('#profile-image-btn').on('click',function() {
  $('#profile-img-form').css({
    'display':'block',
  });
  $('#all-orders').css({
    'display':'none',
  });
  $('#profile-image-btn').addClass('current');
  $('#profile-image-btn').css({
    'color':'#0b0b0b',
    'padding-left':'50px',
  });
  $('#all-orders-btn').removeClass('current');
  $('#profile-image-btn').addClass('add-arrow');
  $('#all-orders-btn').removeClass('add-arrow');
  $('#all-orders-btn').css({
    'padding-left':'30px',
    'color':'#959595',
  });
});

$('[bloc=refresh-btn]').on('click',function() {
  window.location.reload(true);
});
