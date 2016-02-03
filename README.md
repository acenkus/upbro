# upbro

Library for browsers compatibility check.

## Used:
* Feuturejs : http://featurejs.com/
* Cookies
* jQuery
* LESS/CSS

# How to use

* Upload "upbro" directory to your server

* Include the plugin script in your head tag.

```html
  <script type="text/javascript" data-plugin="upbro" src="upbro/jquery.upbro.js"></script>
```
* Add the following code before body tag ends:

```html
<script type="text/javascript">
  upbro({
    feuturejs: 'all'
  });
</script>
```

* All script settings:

```js
  upbro({
    //if you need to translate script, please use this object
    lang : [{  
      "browser_title":"Time to update!",
      "browser_old":"Your browser too old",
      "browser_dont_work":" thats why this website doesn't work for you",
      "browser_please":"Please update your browser. We recommend you select one from the list",
      "browser_download":"Download"
    }],
    //leave what you need to check browsers compatibility {Check powered by: feuturejs}
    feuturejs: [
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
  });
```
# License
The MIT License (MIT)

Copyright (c) 2016 Aivaras

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

You can use this script for free by MIT License