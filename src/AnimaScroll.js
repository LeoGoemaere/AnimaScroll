/**
 * AnimaScroll v1.0
 * Create smooths anchors animations in the easiest way.
 *
 * Copyright 2019 - Léo Goémaere
 *
 * MIT License
 *
 */

"use strict";

/**
 * Animation Class.
 * @class
 * @constructor
 * @param {number} fromValue - The starting scroll position.
 * @param {number} toValue - The ending scroll position.
 * @param {number} duration - The scroll animation duration.
 * @param {string} direction - The scroll direction, can be vertical (scrollY) or horizontal (scrollX).
 * @param {string} timingCurve - The timing curve function.
 */
class Animation {
	constructor({ fromValue = null, toValue = null, duration = null, direction = 'scrollY', timingCurve = 'linear' } = {}) {
		this.fromValue = fromValue;
		this.toValue = toValue;
		this.duration = duration;
		this.direction = direction;
        this.timingCurve = timingCurve;
        
		this.animationProgress = 0;
		this.currentAnimationRange = 0,
		this.isAnimationRunning = false;
		this.onProgress = null;
		this.onComplete = null;
		this.requestAnim = null;
		window.addEventListener('wheel', () => this.stop());
	}
	animate() {
	    if (this.isAnimationRunning) { return; }
	    let startTime = null;
	    const frame = (timestamp) => {
			this.isAnimationRunning = true;
			if (startTime === null) startTime = timestamp;
			let progress = timestamp - startTime;
			
			// Store the current animation range.
			this.currentAnimationRange = this._getAnimationRange(progress, this.duration);

			// Check if the animation is between the range.
			const isInAnimationRange = this.currentAnimationRange >= 0 && this.currentAnimationRange <= 1;

			//  Process the animation progress.
			this._processingAnimationProgress();        
			
			// Animate the property.
			this._scrolling({ delay: this.delay, animationPosition: this.animationProgress });
			if (isInAnimationRange) {
				this.requestAnim = requestAnimationFrame(frame);

				// Run the onProgress callback if needed. 
				this._runCallbackFunctions( this.onProgress, { parameters: [this.animationProgress, this.currentAnimationRange] });
			} else {
				this.isAnimationRunning = false;
				this.animationProgress = this.toValue;
				this.currentAnimationRange = 1;

				// Place the element on the final position.
				this._scrolling({ animationPosition: this.animationProgress });

				// Run the onProgress & onComplete callbacks if needed. 
				this._runCallbackFunctions( this.onProgress, { parameters: [this.animationProgress, this.currentAnimationRange] });
				this._runCallbackFunctions( this.onComplete );

				// Reset animation datas.
				startTime = null;
				this._resetAnimationDatas();
			}
	    }
		this.requestAnim = requestAnimationFrame(frame);
	}
	/**
	 * @method run
	 * @description Launch the animation.
	 */
	run() {
		this.animate();
	}
	/**
	 * @method stop
	 * @description Stop the animation.
	 */
	stop() {
		if (this.isAnimationRunning) {
			this.isAnimationRunning = false;
			this._resetAnimationDatas();
			cancelAnimationFrame(this.requestAnim);
		}
	}
	_processingAnimationProgress() {
		this.animationProgress = this._getAnimProgress({
			timingCurve: Animation.timingCurves[this.timingCurve],
			animationRange: this.currentAnimationRange,
			animDistance: this._getAnimDistance(this.fromValue, this.toValue),
			currentToValue: this._getCurrentToValue(this.fromValue, this.toValue)
        });        

		if (this.toValue < this.fromValue) {
			this.animationProgress -= this.fromValue;
			this.animationProgress = Math.abs(this.animationProgress - this._getCurrentToValue(this.fromValue, this.toValue));
		}
	}
	_scrolling({ animationPosition }) {
		switch (this.direction) {
			case Animation.directions.scrollY:
				window.scrollTo(window.scrollX, animationPosition);
				break;
			case Animation.directions.scrollX:
				window.scrollTo(animationPosition,window.scrollY);
				break;
			default:
				// By default make the animated scroll vertical.
				window.scrollTo(this.from, animationPosition);
		}
	}
	// Helpers methods
	_getAnimDistance(from, to) {
		return from < to ? to - from : from - to; 
	}
	_getAnimProgress({ timingCurve, animationRange, animDistance, currentToValue} ) {
		return timingCurve(animationRange) * animDistance + currentToValue;
	}
	_getCurrentToValue(from, to) {
		return to > from ? from : to;
	}
	_getAnimationRange(progress, duration) {
		return progress/duration;
	}
	_resetAnimationDatas() {
		this.animationProgress = 0;
		this.currentAnimationRange = 0;
	}
	_runCallbackFunctions(functionName,  { parameters } = {}) {
		if (functionName !== null) {
			typeof parameters === 'undefined' ? functionName() : functionName(...parameters);
		}
	}
	static get directions() {
		return {
			scrollX: 'scrollX',
			scrollY: 'scrollY'
		}
	}
	static get timingCurves()   {
	    return {
		linear: function (t) { return t },
		easeInQuad: function (t) { return t*t },
		easeOutQuad: function (t) { return t*(2-t) },
		easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
		easeInCubic: function (t) { return t*t*t },
		easeOutCubic: function (t) { return (--t)*t*t+1 },
		easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
		easeInQuart: function (t) { return t*t*t*t },
		easeOutQuart: function (t) { return 1-(--t)*t*t*t },
		easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
		easeInQuint: function (t) { return t*t*t*t*t },
		easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
		easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
	    }
	}
}

/**
 * AnimaScroll Class.
 * Can be init directly in the DOM or by programatic declaration.
 * @class
 * @constructor
 * @param {object} link - The link element.
 * @param {number} duration - The scroll animation duration, 400ms by default.
 * @param {string} timingCurve - The timing curve function. You can check the list available by calling the AnimaScroll.timingCurves.
 * @param {string} shiftBy - The selectors of the elements whose height must be substracted from the scrolling distance.
 * Separate the selectors by commas.
 * ex: '.header', '.banner'
 */
class AnimaScroll {
	constructor({ link, duration, timingCurve, shiftBy }) {
		this.link = link;
		this.duration = duration;
		this.timingCurve = timingCurve;
		this.shiftBy = shiftBy;
		
		this.anchor = document.querySelector(this.link.hash);

		this.onComplete = null;
		this.onProgress = null;
	}
	/**
	 * @method init
	 * @description Must be call after the declaration.
	 */
	init() {
		document.addEventListener('click', (e) => {
			delegateTo({ element: e.target, withSelector: `[href="${this.link.hash}"]` }, () => {
				e.preventDefault();
				this._scrollingTo(this._scrollingDistanceFrom(this.anchor));
			})
		})
	}
	_scrollingDistanceFrom(anchor) {
		return anchor.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
	}
	_scrollingDistanceToBeSubstractedFrom(value) {
		const selectors = value.split(',');
		// Catch error if a shiftBy param doesn't exist.
		if (!selectors.every(selector => document.querySelector(selector))) { return console.error(`One of your shiftBy selector doesn't exist.`); }
		return selectors
		.map(selector => document.querySelector(selector).offsetHeight)
		.reduce((accumulator, currentValue) => accumulator + currentValue);
	}
	_updateUrl({ hash }) {
		if (history.pushState) {
			history.pushState(null, null, hash);
		} else {
			location.hash = hash;
		}
	}
	_scrollingTo(scrollDistance) {
		this._updateUrl({ hash: this.link.hash });
		const animation = new Animation({
			fromValue: window.scrollY,
			toValue: this.shiftBy ? scrollDistance - this._scrollingDistanceToBeSubstractedFrom(this.shiftBy) : scrollDistance,
			duration: this.duration || 0,
			timingCurve: this.timingCurve || 'linear'
		});
		animation.run();

		if (this.onComplete && typeof this.onComplete === 'function') {
			animation.onComplete = this.onComplete;
		}
		if (this.onProgress && typeof this.onProgress === 'function') {
			animation.onProgress = this.onProgress;
		}
	}
	/**
	 * @static timingCurves
	 * @description List of the timingCurves functions.
	 */
	static get timingCurves() {
		return Animation.timingCurves;
	}
	static _withDOM() {
		const links = document.querySelectorAll('[data-anima-link]');
		for (let i = 0; i < links.length; i++) {
			new AnimaScroll({
				link: links[i],
				duration: links[i].getAttribute('data-anima-duration') || null,
				timingCurve: links[i].getAttribute('data-anima-timing-curve') || null,
				shiftBy: links[i].getAttribute('data-anima-shiftBy') || null
			}).init();
		}
	}
}

document.addEventListener('DOMContentLoaded', AnimaScroll._withDOM);

function delegateTo({ element, withSelector }, callback) {
	let elementIsFind;
	let isSelectorExist = document.querySelector(withSelector) ? true : false;
	// Use custom macthes function if browser doesn't support native macthes method.
	const elementMatches = polyfills.isMatchesSupported ? element.matches(withSelector) : polyfills.matches(element, withSelector);
	if (!elementMatches && isSelectorExist) {
		// Same thing for closest method.
		const closestElement = polyfills.isClosestSupported ? element.closest(withSelector) : polyfills.closest(element, withSelector);
		elementIsFind = closestElement !== null ? true : false;
	} else {
		elementIsFind = isSelectorExist ? true : false;
	}
	if (elementIsFind) {
		// Passing the delegate current target element to the callback function.
		const currentTarget = polyfills.isClosestSupported ? element.closest(withSelector) : polyfills.closest(element, withSelector);
		callback(currentTarget);
	}
}

// Polyfill object that store custom functions.
const polyfills = {
	matches: function(element, selector) {
		var matches = (element.document || element.ownerDocument).querySelectorAll(selector),
		i = matches.length;
		while (--i >= 0 && matches.item(i) !== element) {}
		return i > -1;            
	},
	isMatchesSupported: Element.prototype.matches ? true : false,
	closest: function(element, selector) {
		this.isSupported = Element.prototype.closest ? true : false;
		var el = element;
		if (!document.documentElement.contains(el)) return null;
		do {
			if (polyfills.matches(el, selector)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType == 1); 
		return null;
	},
	isClosestSupported: Element.prototype.closest ? true : false
};