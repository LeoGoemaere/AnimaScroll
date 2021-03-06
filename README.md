# AnimaScroll

Create animate anchor in an easy way.

AnimaScroll let you animate the anchor by passing some datas directly on your link, or with the [constructor](#constructor).
You also can trigger the scroll manually without using a link thanks to the [Animation class](#constructor-1).

Why using it ?
- Wrote in **pure Vanilla JS**, it doesn't require jQuery.
- Maintains native use of html anchors.
- Keeps **url up to date** with the hash history.
- Makes **anchors more accurate** by taking into account fixed elements.
- **High flexibility** with the [programmatic scroll](#programmatic-scroll).
- Good **browsers supports**. (IE10 +).
- It using **requestAnimationFrame** for better animations performance.

## Demos

See demos for each use cases.

- The [HTML declaration](#html-declaration). <br>

**Codepen**: <a href="https://codepen.io/LGoemaere/pen/poojJov" target="_blank">AnimaScroll with HTML declaration</a>

- [With constructor](#with-constructor). <br> 

**Codepen**: <a href="https://codepen.io/LGoemaere/pen/YzzyyaX" target="_blank">AnimaScroll with constructor</a>

## Getting started

### npm

Install it as a depency with the following command:
```shell
npm i @lgoemaere/animascroll
```

### script tag

Import AnimaScroll on your page. Use the **min file** in the ./package/dist folder.
```html
<script src="AnimaScroll.min.js"></script>
<script src="main.js"></script>
```

### Constructor

The Animascroll constructor is contains in the Anima namespace.

**AnimaScroll**
```javascript
new Anima.AnimaScroll({ link, duration, timingCurve, shiftBy });
```
| Parameter	       | Type       | default     | Description                                                                                           |
| :--------------- |:-----------| :-----------| :-----------------------------------------------------------------------------------------------------|
| `link`           | *object*   | **null**    | The link element.                                                                                     |
| `duration`       | *number*   | **0**       | The scroll animation duration.                                                                        |
| `timingCurve`    | *string*   | **linear**  | The timing curve function. [Check the list here](#timing-curves-functions).                           |
| `shiftBy`        | *string*   | **null**    | The selectors of the elements whose height must be substracted from the scrolling distance.           |

### Usage

#### HTML Declaration
You can use AnimaScroll by declaring it in the DOM like :

```html
<a 
	href="#anchor"
	data-anima-link
	data-anima-duration="400"
	data-anima-timing-curve="easeInQuad"
	data-anima-shiftBy=".header, .banner"
>My cool link</a>
<!-- My site content -->
<div id="anchor"></div>
<!-- My site content -->
```
**Only data-anima-link attribute is required.**

#### With constructor
Or you can declaring it with the constructor and then init using the init method.

```javascript
const link = new Anima.AnimaScroll({
	link: document.querySelector('.my-link'), // Required.
	duration: 400, // Optional.
	timingCurve: 'easeInQuad', // Optional.
	shiftBy: '.header, .banner' // Optional.
});
link.init();
```

### Methods

- **init()**: Initialize the link.
```javascript
myAnimaScroll.init();
```

### Callbacks
***Note:*** Always call the callbacks `BEFORE` the init() method.

- **onComplete()** :

Called after the scrolling animation is complete.
```javascript
myAnimaScroll.onComplete = () => {
	// Scroll is complete.
};
```

- **onProgress(*animationProgress*, *animationRange*)** :

| Parameter	          | Type       | Description                                                                                        |
| :-------------------|:-----------|:-------------------------------------------------------------------------------------------------- |
| `animationProgress` | *number*   | Return the animation progress which is between the current scroll position and the anchor element. |
| `animationRange`    | *number*   | Return position of the animation in the range between [0, 1].                                      |

Called while the scrolling animation is processing.
```javascript
myAnimaScroll.onProgress = (animationProgress, animationRange) => {
	// Scroll is processing.
};
```

## Programmatic scroll

If you want to trigger a scroll action you can call the Animation class in the Anima namespace.

### Constructor

**Animation**
```javascript
new Anima.Animation({ fromValue, toValue, duration, direction, timingCurve });
```
| Parameter	    | Type       | default     | Description                                                                                           |
| :-------------|:-----------| :-----------| :-----------------------------------------------------------------------------------------------------|
| `fromValue`   | *number*   | **null**    | The starting scroll position.                                                                         |
| `toValue`     | *number*   | **null**    | The ending scroll position.                                                                           |
| `duration`    | *number*   | **null**    | The scroll animation duration.                                                                        |
| `direction`   | *string*   | **scrollY** | The scroll direction, can be vertical (**scrollY**) or horizontal (**scrollX**).                     |
| `timingCurve` | *string*   | **linear**  | The timing curve function. [Check the list here](#timing-curves-functions).                            |

### Usage

You can trigger an animation scroll by declaring the constructor and then run animation by using the run() method :

```javascript
const animation = new Anima.Animation({ 
	fromValue: 0,
	toValue: 1000,
	duration: 400,
	direction: 'scrollY',
	timingCurve: 'easeInOutCubic'
});
animation.run();
```

### Methods

- **run()**: Launch the animation.
```javascript
myAnimation.run();
```

- **stop()**: Stop the animation.
```javascript
myAnimation.stop();
```

### Callbacks
***Note:*** Always call the callbacks `BEFORE` the run() method.

- **onComplete()** :

Called after the scrolling animation is complete.

```javascript
myAnimation.onComplete = () => {
	// Scroll is complete.
};
```

- **onProgress(*animationProgress*, *animationRange*)** :

| Parameter	          | Type       | Description                                                               |
| :-------------------|:-----------|:------------------------------------------------------------------------- |
| `animationProgress` | *number*   | Return the animation progress which is between the fromValue and toValue. |
| `animationRange`    | *number*   | Return position of the animation in the range between [0, 1].             |

Called while the scrolling animation is processing.
```javascript
myAnimation.onProgress = (animationProgress, animationRange) => {
	// Scroll is processing.
};
```

## Timing curves functions

Below are the timing curves options that you can use:

* **linear** - no easing, no acceleration.
* **easeInQuad** - accelerating from zero velocity.
* **easeOutQuad** - decelerating to zero velocity.
* **easeInOutQuad** - acceleration until halfway, then deceleration.
* **easeInCubic** - accelerating from zero velocity.
* **easeOutCubic** - decelerating to zero velocity.
* **easeInOutCubic** - acceleration until halfway, then deceleration.
* **easeInQuart** - accelerating from zero velocity.
* **easeOutQuart** - decelerating to zero velocity.
* **easeInOutQuart** - acceleration until halfway, then deceleration.
* **easeInQuint** - accelerating from zero velocity.
* **easeOutQuint** - decelerating to zero velocity.
* **easeInOutQuint** - acceleration until halfway, then deceleration.