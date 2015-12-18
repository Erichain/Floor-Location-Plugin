# Floor-Location-Plugin
A plugin for effect of scrolling floors

## Usage
Just imprt the source file into your `index.html` like this.

`<link href="path/floor-location.css" type="text/css">`

`<script src="path/floor-location.js"></script>`

Certainly, you should **import jQuery first**.

Then, in your files you can write like this.

First in your html file

``` html
<!-- floor menu -->
<a href="" id="YourID" />

<!-- item content -->
<div class="floor-item YourID">
    <h1>Your content</h1>
</div>
```

**Notice that the 'YourID' in the 'a' tag and the 'YourID' in 'item' must be the same**

**And your floor item must contain the class `floor-item`**

Then in your javascript file

``` javascript
$(document).ready(function () {
    $(Your_Floor_Menu_Name).floor({
       scrollSpeed: number 
    });
});
```

Well, that's all, then you can set your own css for your website!