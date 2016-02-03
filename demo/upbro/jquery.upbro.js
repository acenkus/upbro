var upbro = function(options) {
  var main_src = $('script[data-plugin="upbro"]');
  var script_path = main_src.attr('src').substr(0, main_src.attr('src').lastIndexOf( '/' ) + 1 );
  var feature_src = '<script type="text/javascript" src="' + script_path + 'feature.min.js"></script>';
  var css_src = '<link rel="stylesheet" href="' + script_path + 'style.css">';
  var default_feuturejs = [
        'async',
        'addEventListener',
        'canvas',
        'classList',
        'cors',
        'contextMenu',
        'css3Dtransform',
        'cssTransform',
        'cssTransition',
        'defer',
        'deviceMotion',
        'deviceOrientation',
        'geolocation',
        'historyAPI',
        'placeholder',
        'localStorage',
        'matchMedia',
        'pictureElement',
        'querySelectorAll',
        'remUnit',
        'serviceWorker',
        'sizes',
        'srcset',
        'svg',
        'touch',
        'viewportUnit',
        'webGL'
      ];
  var settings = $.extend({
      // These are the defaults.
      lang : [{  
          "browser_title":"Time to update!",
          "browser_old":"Your browser too old",
          "browser_dont_work":" thats why this website doesn't work for you",
          "browser_please":"Please update your browser. We recommend you select one from the list",
          "browser_download":"Download"
        }],
      feuturejs: default_feuturejs
  }, options );
  if (settings.feuturejs == 'all' ) {
    settings.feuturejs = default_feuturejs;
  }
  var check_by_feature = function () {
    var ac = null;
    $.each(feature, function(k, r) {
      $.each(settings.feuturejs, function(i, v) {
        if (k === v) {
          ac = r;
          return false;
        }
      });

      if (ac == false) {
        ac = false;
        return false;
      }
    });
    return ac;
  };

  var lang = function(item) {
    var returnnn;
      $.each(settings.lang[0], function(key, val) {
        if (key == item) {
          returnnn = val;
          return false;
        }
      });

    return returnnn;
  };
  //cookies
  var create_cookie = function (name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days * 24 * 60 * 60 * 1000));
      var expires = "; expires="+date.toGMTString();
    } else {
      var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
  };

  var read_cookie = function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  };

  var erase_cookie = function (name) {
    createCookie(name,"",-1);
  };

  var append_content = function () {
    var html_template = '<div class="upbro_container">';
    html_template += '<a href="#" class="upbro_close">';
    html_template += '<img src="' + script_path + 'images/upbro_cross.png" alt="Close">';
    html_template += '</a>';
    html_template += '<div class="upbro_description-container">';
    html_template += '<div class="upbro_description">';
    html_template += '<div class="upbro_container">';
    html_template += '<div class="upbro_description-title">';
    html_template += lang('browser_title');
    html_template += '</div>';
    html_template += '<div class="upbro_description-content">';
    html_template += '<p>';
    html_template += '<strong>';
    html_template += lang('browser_old');
    html_template += '</strong>';
    html_template += lang('browser_dont_work');
    html_template += '</p>';
    html_template += '<p class="upbro_please">';
    html_template += lang('browser_please');
    html_template += '</p>';
    html_template += '</div>';
    html_template += '<div class="upbro_browsers-container clearfix">';
    html_template += '</div>';
    html_template += '</div>';
    html_template += '</div>';
    html_template += '</div>';
    html_template += '</div>';
    $(feature_src).insertBefore(main_src);
    if (!read_cookie('check_feature') && !check_by_feature()) {
      $(css_src).insertBefore(main_src);

      $('body').prepend(html_template);

      $('.upbro_close').on('click', function(e) {
        e.preventDefault();

        create_cookie('check_feature', 1, 1);
        $('.upbro_container').fadeOut();
      });

    }
  };
  var append_browsers = function () {
    var data_template;
    var data_el;
    $.getJSON(script_path + 'browsers.json', function(data) {
      $.each(data, function(i, data) {
        data_el = '.upbro_container';

        data_template = '<div class="upbro_browsers-item">';
        data_template += '<div class="upbro_browser-image">';
        data_template += '<img src="' + script_path + 'images/' + data.image + '.png" alt="' + data.title + '">';
        data_template += '</div>';
        data_template += '<div class="upbro_browser-title">';
        data_template += data.title;
        data_template += '</div>';
        data_template += '<div class="upbro_browser-bottom">';
        data_template += '<a target="_blank" href="' + data.download_link + '" class="upbro_browser-download">';
        data_template += lang('browser_download');
        data_template += '</a>';
        data_template += '</div>';
        data_template += '</div>';
        if ($('.upbro_container').length) {
          $(data_template).appendTo(data_el);
        }
      });
    });
  };
  //DOM
  append_content();
  append_browsers();
};