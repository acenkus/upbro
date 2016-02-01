<?php
/**
* @Author: Dewdrop
* @E-mail:   hello@dewdrop.eu
* @Author URL: http://dewdrop.eu
* @Date:   2016-01-27 13:36:20
* @Last Modified by:   Dewdrop
* @Last Modified time: 2016-01-28 08:53:23
*/
?>
<?php if (!isset($_COOKIE['check_feature']) || $_COOKIE['check_feature'] != '1') { ?>
  <div class="check_feature-container">
    <a href="#" class="check_feature-close">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/libs/browser-support/images/cross.png" alt="Close">
    </a>
    <div class="description-container">
      <div class="description">
          <div class="container">
            <div class="description-title">
              <?php echo trans('browser_title'); ?>
            </div>
            <div class="description-content">
              <p>
                <strong><?php echo trans('browser_old'); ?></strong><?php echo trans('browser_dont_work'); ?>.
              </p>
              <p class="please">
                <?php echo trans('browser_please'); ?>:
              </p>
            </div>
            <?php
              $aBrowsers = array(
                array(
                  'title'         => 'Google Chrome',
                  'image'         => 'chrome',
                  'download_link' => 'https://www.google.com/chrome/browser/desktop/'
                ),
                array(
                  'title'         => 'Mozilla Firefox',
                  'image'         => 'firefox',
                  'download_link' => 'http://www.mozilla.org/firefox/new/'
                ),
                array(
                  'title'         => 'Opera',
                  'image'         => 'opera',
                  'download_link' => 'http://www.opera.com/download'
                ),
                array(
                  'title'         => 'Apple Safari',
                  'image'         => 'safari',
                  'download_link' => 'http://support.apple.com/downloads/#safari'
                ),
                array(
                  'title'         => 'Microsoft Edge',
                  'image'         => 'edge',
                  'download_link' => 'https://www.microsoft.com/en-us/windows/microsoft-edge'
                )
              );
            ?>
            <div class="browsers-container clearfix">
              <?php foreach ($aBrowsers as $aBrowser) { ?>
                <div class="browsers-item">
                  <div class="browser-image">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/libs/browser-support/images/<?php echo $aBrowser['image']; ?>.png" alt="<?php echo $aBrowser['title']; ?>">
                  </div>
                  <div class="browser-title">
                    <?php echo $aBrowser['title']; ?>
                  </div>
                  <div class="browser-bottom">
                    <a target="_blank" href="<?php echo $aBrowser['download_link']; ?>" class="browser-download">
                      <?php echo trans('browser_download'); ?>
                    </a>
                  </div>
                </div>
              <?php } ?>
            </div>
          </div>
      </div>
    </div>
  </div>
<?php } ?>