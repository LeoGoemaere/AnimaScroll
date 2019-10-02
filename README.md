# AnimaScroll
Create animate anchor in an easy way.

AnimaScroll let you animate the anchor thanks to some datas on your link, or instanciate it programatically.

Why using it ?
- Keeps url up to date with the hash history.
- Makes anchors more accurate by taking into account fixed elements !
- Wrote in pure Vanilla JS, it doesn't require jQuery.

## Getting started

Import AnimaScroll on your page. Use the **min file** in the dist folder.
```html
<script src="AnimaScroll.min.js"></script>
<script src="main.js"></script>
```

### Constructor
```javascript
new AnimaScroll({ link, duration, timingCurve, shiftBy });
```
| Parameter	       | Type       | default   | Description                                                                                          |
| :--------------- |:-----------| :---------| :----------------------------------------------------------------------------------------------------|
| `link`           | *object*   | **null**  | The link element                                                                                      |
| `duration`       | *number*   | **0**     | The scroll animation duration                                                                         |
| `timingCurve`    | *string*   | **null**      | The timing curve function. You can check the list available by calling the AnimaScroll.timingCurves.  |
| `shiftBy`        | *string*   | **null**      | The selectors of the elements whose height must be substracted from the scrolling distance.           |

## Usage

In your main js file you can use AnimaScroll by declaring it in the DOM like :

```html
<a 
	href="#scrollToIt"
	data-anima-link
	data-anima-duration="400"
	data-anima-timing-curve="easeInQuad"
	data-anima-shiftBy=".header, banner"
>My cool link</a>
```

Or you can declaring it with the constructor like :


### Methods
**init()**
```javascript
this.init();
```