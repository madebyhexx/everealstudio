var listing_address, preferred_date, preferred_time, first_name, last_name, ps, bd_price, bd_detail, sp_price, sp_detail, mv_price, mv_detail, vt_price, vt_detail, fs_price, fs_detail, fp_price, fp_detail, dp_price, dp_detail, dp_detail_2, ed_price, dv_price, ed_detail, pv_price, pv_detail, dv_detail, email_address, agreement, vs_detail, phone, dp_price_2, vs_price_2;


function order_form_form_change() {
      listing_address = getValueFromInput("listing-address");

    preferred_date = getValueFromInput("preferred-date");

    preferred_time = getValueFromInput("preferred-time");

    first_name = getValueFromInput("first-name");

    last_name = getValueFromInput("last-name");

    email_address = getValueFromInput("email-address");

    phone = getValueFromInput("phone");

    ps = getValueFromInput("ps");

    agreement = getValueFromInput("Agreement");


      if (listing_address != '') {
    if (preferred_date != '') {
      if (preferred_time != '') {
        $('[bloc=next-btn-step1]').css({
          'opacity':'1',
          'pointer-events':'auto',
        });
      } else {
        $('[bloc=next-btn-step1]').css({
          'opacity':'0.3',
          'pointer-events':'none',
        });
      }
    } else {
      $('[bloc=next-btn-step1]').css({
        'opacity':'0.3',
        'pointer-events':'none',
      });
    }
  } else {
    $('[bloc=next-btn-step1]').css({
      'opacity':'0.3',
      'pointer-events':'none',
    });
  }
  if (first_name != '') {
    if (last_name != '') {
      if (email_address != '') {
        if (phone != '') {
          $('[bloc=next-btn-step4]').css({
            'opacity':'1',
            'pointer-events':'auto',
          });
        } else {
          $('[bloc=next-btn-step4]').css({
            'opacity':'0.3',
            'pointer-events':'none',
          });
        }
      } else {
        $('[bloc=next-btn-step4]').css({
          'opacity':'0.3',
          'pointer-events':'none',
        });
      }
    } else {
      $('[bloc=next-btn-step4]').css({
        'opacity':'0.3',
        'pointer-events':'none',
      });
    }
  } else {
    $('[bloc=next-btn-step4]').css({
      'opacity':'0.3',
      'pointer-events':'none',
    });
  }
  if (ps == 'Less than 3500 sq ft') {
    $('.bd-tier-2').css({
      'display':'none',
    });
    $('[bloc=bd-v9-wrapper]').css({
      'pointer-events':'auto',
      'opacity':'1',
    });
    $('.bd-tier-1').css({
      'display':'block',
      'pointer-events':'auto',
      'opacity':'1',
    });
    $('[bloc=sp-v1-icon]').css({
      'color':'#e00b25 ',
    });
    $('[bloc=sp-v2-icon]').css({
      'color':'#959595',
    });
    $('#sp-v1-text').css({
      'color':'#e00b25',
    });
    $('#sp-v2-text').css({
      'color':'#959595',
    });
    $('[bloc=bd-trigger]').trigger('click');
  } else if (ps == 'between 3500 & 6000 sq ft') {
    $('.bd-tier-1').css({
      'display':'none',
    });
    $('[bloc=bd-v9-wrapper]').css({
      'pointer-events':'auto',
      'opacity':'1',
    });
    $('.bd-tier-2').css({
      'display':'block',
    });
    $('[bloc=sp-v1-icon]').css({
      'color':'#959595',
    });
    $('[bloc=sp-v2-icon]').css({
      'color':'#e00b25',
    });
    $('#sp-v1-text').css({
      'color':'#959595',
    });
    $('#sp-v2-text').css({
      'color':'#e00b25',
    });
    $('[bloc=bd-trigger]').trigger('click');
  }
  if (agreement == true) {
    $('[bloc=submit-btn]').css({
      'pointer-events':'auto',
      'opacity':'1',
    });
    $('[bloc=submit-btn]').on('click',function() {
      $('[bloc=fake-btn]').css({
        'display':'flex',
      });
    });
  } else if (agreement == false) {
    $('[bloc=submit-btn]').css({
      'pointer-events':'none',
      'opacity':'0.3',
    });
    $('[bloc=submit-btn]').on('click',function() {
      $('[bloc=fake-btn]').css({
        'display':'none',
      });
    });
  }
}

  $("[data-name=order_form] input").on("input", function () {
    order_form_form_change();
  });

  var clickedRadioButtonValue = $("input", this).val();

$("[data-name=order_form] label.w-radio").on("click", function () {
  clickedRadioButtonValue = $("input", this).val();
  order_form_form_change();
});
  $('[bloc=next-btn-step2]').on('click',function() {
  $('[bloc=prev-btn-step4-bd]').css({
    'display':'none',
  });
  $('[bloc=prev-btn-step4]').css({
    'display':'inline-block',
  });
});
$('[bloc=next-btn-step2-bd]').on('click',function() {
  $('[bloc=prev-btn-step4-bd]').css({
    'display':'inline-block',
  });
  $('[bloc=prev-btn-step4]').css({
    'display':'none',
  });
});

$('[bloc=fake-btn]').css({
  'display':'none',
});

$('[bloc=submit-btn]').css({
  'pointer-events':'none',
  'opacity':'0.3',
});

$('[bloc=bd-wrapper]').css({
  'display':'none',
});
$('[bloc=sp-wrapper]').css({
  'display':'none',
});
$('[bloc=mv-wrapper]').css({
  'display':'none',
});
$('[bloc=vt-wrapper]').css({
  'display':'none',
});
$('[bloc=fs-wrapper]').css({
  'display':'none',
});
$('[bloc=fp-wrapper]').css({
  'display':'none',
});
$('[bloc=dp-wrapper]').css({
  'display':'none',
});
$('[bloc=dp-wrapper-2]').css({
  'display':'none',
});
$('[bloc=dv-wrapper]').css({
  'display':'none',
});
$('[bloc=vs-wrapper]').css({
  'display':'none',
});
$('[bloc=vs-wrapper-2]').css({
  'display':'none',
});
$('[bloc=ed-wrapper]').css({
  'display':'none',
});
$('[bloc=pv-wrapper]').css({
  'display':'none',
});

$('#step-2').css({
  'display':'none',
});
$('#step-3').css({
  'display':'none',
});
$('#step-4').css({
  'display':'none',
});
$('#step-5').css({
  'display':'none',
});

$('[bloc=dp-v3]').css({
  'opacity':'0.3',
  'pointer-events':'none',
});
$('[bloc=vs-v2]').css({
  'opacity':'0.3',
  'pointer-events':'none',
});

$(document).ready(function(){ $(`input[name="listing-address"]`).on("input", function(){$(`[bloc=listing-address]`).text($(this).val());}); });
$(document).ready(function(){ $(`input[name="listing-unit"]`).on("input", function(){$(`[bloc=listing-unit]`).text($(this).val());}); });
$(document).ready(function(){ $(`input[name="preferred-date"]`).on("input", function(){$(`[bloc=preferred-date]`).text($(this).val());}); });
$(document).ready(function(){ $(`input[name="preferred-time"]`).on("input", function(){$(`[bloc=preferred-time]`).text($(this).val());}); });

$('[bloc=next-btn-step1]').css({
  'opacity':'0.3',
  'pointer-events':'none',
});
$('[bloc=next-btn-step2]').css({
  'opacity':'0.3',
  'pointer-events':'none',
});
$('[bloc=next-btn-step2-bd]').css({
  'display':'none',
});

$('[bloc=next-btn-step1]').on('click',function() {
  $('#step-1').css({
    'display':'none',
  });
  $('#step-2').css({
    'display':'block',
  });
  updateValueInInput(listing_address,"listing_address");
  $('[bloc=listing-address]').text(listing_address);
});

$('[bloc=next-btn-step2]').on('click',function() {
  $('#sp-v1').trigger('click');
  $('#step-2').css({
    'display':'none',
  });
  $('#step-3').css({
    'display':'block',
  });
});

$('[bloc=next-btn-step3]').on('click',function() {
  $('#step-3').css({
    'display':'none',
  });
  $('#step-4').css({
    'display':'block',
  });
});

$('[bloc=next-btn-step4]').on('click',function() {
  $('#step-4').css({
    'display':'none',
  });
  $('#step-5').css({
    'display':'block',
  });
});

$('[bloc=next-btn-step2-bd]').on('click',function() {
  $('#step-2').css({
    'display':'none',
  });
  $('#step-4').css({
    'display':'block',
  });
});

$('.bd-tier-1').css({
  'opacity':'0.3',
  'pointer-events':'none',
});
$('.bd-tier-2').css({
  'display':'none',
});

$('[bloc=prev-btn-step4]').on('click',function() {
  $('#step-3').css({
    'display':'block',
  });
  $('#step-4').css({
    'display':'none',
  });
});

$('[bloc=prev-btn-step3]').on('click',function() {
  $('#sp-v3').trigger('click');
  $('#step-2').css({
    'display':'block',
  });
  $('#step-3').css({
    'display':'none',
  });
});

$('[bloc=prev-btn-step4-bd]').on('click',function() {
  $('#step-2').css({
    'display':'block',
  });
  $('#step-4').css({
    'display':'none',
  });
});

$('[bloc=prev-btn-step5]').on('click',function() {
  $('#step-4').css({
    'display':'block',
  });
  $('#step-5').css({
    'display':'none',
  });
});

$('[bloc=prev-btn-step2]').on('click',function() {
  $('#step-1').css({
    'display':'block',
  });
  $('#step-2').css({
    'display':'none',
  });
});

$('[bloc=bd-v9-wrapper]').css({
  'opacity':'0.3',
  'pointer-events':'none',
});

$('[bloc=bd-trigger]').on('click',function() {
  var bd_detail = $(`input[name="bd"]:checked`).attr("service-detail");
  var bd_price = $(`input[name="bd"]:checked`).attr("data-price");
  if (bd_price != '0') {
    $('[bloc=bd-wrapper]').css({
      'display':'flex',
    });
    $('[bloc=next-btn-step2-bd]').css({
      'display':'inline-block',
    });
    $('[bloc=next-btn-step2]').css({
      'display':'none',
    });
  } else if (bd_price == '0') {
    $('[bloc=bd-wrapper]').css({
      'display':'none',
    });
    $('[bloc=next-btn-step2-bd]').css({
      'display':'none',
    });
    $('[bloc=next-btn-step2]').css({
      'display':'inline-block',
      'opacity':'1',
      'pointer-events':'auto',
    });
  }
  $('[bloc=bd-detail]').text(bd_detail);
  $('[bloc=bd-price]').text(('$' + String(bd_price)));
});

$('[bloc=sp-trigger]').on('click',function() {
  var sp_detail = $(`input[name="sp"]:checked`).attr("service-detail");
  var sp_price = $(`input[name="sp"]:checked`).attr("data-price");
  if (sp_price != '0') {
    $('[bloc=sp-wrapper]').css({
      'display':'flex',
    });
    $('.tier-2').css({
      'display':'none',
    });
    $('.tier-1').css({
      'display':'block',
    });
    $('.reset-by-sp').css({
      'display':'none',
    });
    $('.reset-btn').trigger('click');
    $('[bloc=dp-reset]').trigger('click');
    $('[bloc=vs-reset]').trigger('click');
    window.location.replace('#top');
  } else if (sp_price == '0') {
    $('[bloc=sp-wrapper]').css({
      'display':'none',
    });
    $('.tier-1').css({
      'display':'none',
    });
    $('.tier-2').css({
      'display':'block',
    });
    $('.reset-by-sp').css({
      'display':'none',
    });
    $('.reset-btn').trigger('click');
    $('[bloc=dp-reset]').trigger('click');
    $('[bloc=vs-reset]').trigger('click');
    window.location.replace('#top');
  }
  $('[bloc=sp-detail]').text(sp_detail);
  $('[bloc=sp-price]').text(('$' + String(sp_price)));
});

$('[bloc=mv-trigger]').on('click',function() {
  var mv_detail = $(`input[name="mv"]:checked`).attr("service-detail");
  var mv_price = $(`input[name="mv"]:checked`).attr("data-price");
  if (mv_price != '0') {
    $('[bloc=mv-wrapper]').css({
      'display':'flex',
    });
  } else if (mv_price == '0') {
    $('[bloc=mv-wrapper]').css({
      'display':'none',
    });
  }
  $('[bloc=mv-detail]').text(mv_detail);
  $('[bloc=mv-price]').text(('$' + String(mv_price)));
});

$('[bloc=vt-trigger]').on('click',function() {
  var vt_detail = $(`input[name="vt"]:checked`).attr("service-detail");
  var vt_price = $(`input[name="vt"]:checked`).attr("data-price");
  if (vt_price != '0') {
    $('[bloc=vt-wrapper]').css({
      'display':'flex',
    });
  } else if (vt_price == '0') {
    $('[bloc=vt-wrapper]').css({
      'display':'none',
    });
  }
  $('[bloc=vt-detail]').text(vt_detail);
  $('[bloc=vt-price]').text(('$' + String(vt_price)));
});

$('[bloc=fs-trigger]').on('click',function() {
  var fs_detail = $(`input[name="fs"]:checked`).attr("service-detail");
  var fs_price = $(`input[name="fs"]:checked`).attr("data-price");
  if (fs_price != '0') {
    $('[bloc=fs-wrapper]').css({
      'display':'flex',
    });
  } else if (fs_price == '0') {
    $('[bloc=fs-wrapper]').css({
      'display':'none',
    });
  }
  $('[bloc=fs-detail]').text(fs_detail);
  $('[bloc=fs-price]').text(('$' + String(fs_price)));
});

$('[bloc=fp-trigger]').on('click',function() {
  var fp_detail = $(`input[name="fp"]:checked`).attr("service-detail");
  var fp_price = $(`input[name="fp"]:checked`).attr("data-price");
  if (fp_price != '0') {
    $('[bloc=fp-wrapper]').css({
      'display':'flex',
    });
  } else if (fp_price == '0') {
    $('[bloc=fp-wrapper]').css({
      'display':'none',
    });
  }
  $('[bloc=fp-detail]').text(fp_detail);
  $('[bloc=fp-price]').text(('$' + String(fp_price)));
});

$('[bloc=dp-trigger]').on('click',function() {
  var dp_detail = $(`input[name="dp"]:checked`).attr("service-detail");
  var dp_price = $(`input[name="dp"]:checked`).attr("data-price");
  if (dp_price != '0') {
    $('[bloc=dp-v3]').css({
      'opacity':'1',
      'pointer-events':'auto',
    });
    $('[bloc=dp-wrapper]').css({
      'display':'flex',
    });
    $('[bloc=dp-wrapper-2]').css({
      'display':'flex',
    });
  } else if (dp_price == '0') {
    $('[bloc=dp-wrapper]').css({
      'display':'none',
    });
    $('[bloc=dp-wrapper-2]').css({
      'display':'none',
    });
    $('[bloc=dp-reset]').trigger('click');
    $('[bloc=dp-v3]').css({
      'opacity':'0.3',
      'pointer-events':'none',
    });
  }
  $('[bloc=dp-detail]').text(dp_detail);
  $('[bloc=dp-price]').text(('$' + String(dp_price)));
});
var dp_detail_2 = $(`input[name="dp2"]`).attr("service-detail");
var dp_price_2 = $(`input[name="dp2"]`).attr("data-price");
$(document).ready(function(){ var dp_quantity = $(`input[name="dp2"]`).on("input", function(){$(`[bloc=dp-quantity]`).text($(this).val());}); });
$('[bloc=dp-detail-2]').text(dp_detail_2);
$('[bloc=dp-price-2]').text(('$' + String(dp_price_2)));

$('[bloc=ed-trigger]').on('click',function() {
  var ed_detail = $(`input[name="ed"]:checked`).attr("service-detail");
  var ed_price = $(`input[name="ed"]:checked`).attr("data-price");
  if (ed_price != '0') {
    $('[bloc=ed-wrapper]').css({
      'display':'flex',
    });
  } else if (dv_price == '0') {
    $('[bloc=ed-wrapper]').css({
      'display':'none',
    });
  }
  $('[bloc=ed-detail]').text(ed_detail);
  $('[bloc=ed-price-2]').text(('$' + String(ed_price)));
});

$('[bloc=pv-trigger]').on('click',function() {
  var pv_detail = $(`input[name="pv"]:checked`).attr("service-detail");
  var pv_price = $(`input[name="pv"]:checked`).attr("data-price");
  if (pv_price != '0') {
    $('[bloc=pv-wrapper]').css({
      'display':'flex',
    });
  } else if (pv_price == '0') {
    $('[bloc=pv-wrapper]').css({
      'display':'none',
    });
  }
  $('[bloc=pv-detail]').text(pv_detail);
  $('[bloc=pv-price]').text(('$' + String(pv_price)));
});

$('[bloc=dv-trigger]').on('click',function() {
  var dv_detail = $(`input[name="dv"]:checked`).attr("service-detail");
  var dv_price = $(`input[name="dv"]:checked`).attr("data-price");
  if (dv_price != '0') {
    $('[bloc=dv-wrapper]').css({
      'display':'flex',
    });
  } else if (dv_price == '0') {
    $('[bloc=dv-wrapper]').css({
      'display':'none',
    });
  }
  $('[bloc=dv-detail]').text(dv_detail);
  $('[bloc=dv-price]').text(('$' + String(dv_price)));
});

$('[bloc=vsv1-trigger]').on('click',function() {
  $('[bloc=vs-wrapper]').css({
    'display':'flex',
  });
  $('[bloc=vs-v2]').css({
    'opacity':'1',
    'pointer-events':'auto',
  });
});
$('[bloc=vs-trigger]').on('click',function() {
  $('[bloc=vs-reset]').trigger('click');
  $('[bloc=vs-wrapper]').css({
    'display':'none',
  });
  $('[bloc=vs-v2]').css({
    'opacity':'0.3',
    'pointer-events':'none',
  });
});
var vs_detail = $(`input[name="vs2"]`).attr("service-detail");
var vs_price_2 = $(`input[name="vs2"]`).attr("data-price");
$(document).ready(function(){ $(`input[name="vs2"]`).on("input", function(){$(`[bloc=vs-quantity]`).text($(this).val());}); });
$('[bloc=vs-detail]').text(vs_detail);
$('[bloc=vs-price-2]').text(('$' + String(vs_price_2)));
