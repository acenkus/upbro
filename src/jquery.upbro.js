var upbro = function(options) {
  // This is the easiest way to have default options.
  var settings = $.extend({
      // These are the defaults.
      lang : [{  
          "browser_title":"Time to update!",
          "browser_old":"Your browser too old",
          "browser_dont_work":" thats why this website doesn't work for you",
          "browser_please":"Please update your browser. We recommend you select one from the list",
          "browser_download":"Download"
        }],
      feuturejs:   [
          'historyAPI', 
          'placeholder'
      ]
  }, options );

$(document).ready(function() {

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

  var html_template = '<div class="check_feature-container">';
  html_template += '<a href="#" class="check_feature-close">';
  html_template += '<img src="../src/images/cross.png" alt="Close">';
  html_template += '</a>';
  html_template += '<div class="description-container">';
  html_template += '<div class="description">';
  html_template += '<div class="container">';
  html_template += '<div class="description-title">';
  html_template += lang('browser_title');
  html_template += '</div>';
  html_template += '<div class="description-content">';
  html_template += '<p>';
  html_template += '<strong>';
  html_template += lang('browser_old');
  html_template += '</strong>';
  html_template += lang('browser_dont_work');
  html_template += '</p>';
  html_template += '<p class="please">';
  html_template += lang('browser_please');
  html_template += '</p>';
  html_template += '</div>';
  html_template += '<div class="browsers-container clearfix">';
  html_template += '</div>';
  html_template += '</div>';
  html_template += '</div>';
  html_template += '</div>';
  html_template += '</div>';
  $('body').prepend(html_template);
var data_template;
var data_el;
  $.getJSON('../src/browsers.json', function(data) {
    $.each(data, function(i, data) {
      data_el = '.browsers-container';

      data_template = '<div class="browsers-item">';
      data_template += '<div class="browser-image">';
      data_template += '<img src="../src/images/' + data.image + '.png" alt="' + data.title + '">';
      data_template += '</div>';
      data_template += '<div class="browser-title">';
      data_template += data.title;
      data_template += '</div>';
      data_template += '<div class="browser-bottom">';
      data_template += '<a target="_blank" href="' + data.download_link + '" class="browser-download">';
      data_template += lang('browser_download');
      data_template += '</a>';
      data_template += '</div>';
      data_template += '</div>';
    
      $(data_template).appendTo(data_el);
    });
  });

});
  console.log(settings);
};