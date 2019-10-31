var Anima =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * AnimaScroll v1.0
 * Create smooths anchors animations in the easiest way.
 *
 * Copyright 2019 - Léo Goémaere
 *
 * MIT License
 *
 */

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animation =
/*#__PURE__*/
function () {
  function Animation() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$fromValue = _ref.fromValue,
        fromValue = _ref$fromValue === void 0 ? null : _ref$fromValue,
        _ref$toValue = _ref.toValue,
        toValue = _ref$toValue === void 0 ? null : _ref$toValue,
        _ref$duration = _ref.duration,
        duration = _ref$duration === void 0 ? null : _ref$duration,
        _ref$direction = _ref.direction,
        direction = _ref$direction === void 0 ? 'scrollY' : _ref$direction,
        _ref$timingCurve = _ref.timingCurve,
        timingCurve = _ref$timingCurve === void 0 ? 'linear' : _ref$timingCurve;

    _classCallCheck(this, Animation);

    this.fromValue = fromValue;
    this.toValue = toValue;
    this.duration = duration;
    this.direction = direction;
    this.timingCurve = timingCurve;
    this.animationProgress = 0;
    this.currentAnimationRange = 0, this.isAnimationRunning = false;
    this.onProgress = null;
    this.onComplete = null;
    this.requestAnim = null;
    window.addEventListener('wheel', function () {
      return _this.stop();
    });
  }

  _createClass(Animation, [{
    key: "animate",
    value: function animate() {
      var _this2 = this;

      if (this.isAnimationRunning) {
        return;
      }

      var startTime = null;

      var frame = function frame(timestamp) {
        _this2.isAnimationRunning = true;
        if (startTime === null) startTime = timestamp;
        var progress = timestamp - startTime; // Store the current animation range.

        _this2.currentAnimationRange = _this2._getAnimationRange(progress, _this2.duration); // Check if the animation is between the range.

        var isInAnimationRange = _this2.currentAnimationRange >= 0 && _this2.currentAnimationRange <= 1; //  Process the animation progress.

        _this2._processingAnimationProgress(); // Animate the property.


        _this2._scrolling({
          delay: _this2.delay,
          animationPosition: _this2.animationProgress
        });

        if (isInAnimationRange) {
          _this2.requestAnim = requestAnimationFrame(frame); // Run the onProgress callback if needed. 

          _this2._runCallbackFunctions(_this2.onProgress, {
            parameters: [_this2.animationProgress, _this2.currentAnimationRange]
          });
        } else {
          _this2.isAnimationRunning = false;
          _this2.animationProgress = _this2.toValue;
          _this2.currentAnimationRange = 1; // Place the element on the final position.

          _this2._scrolling({
            animationPosition: _this2.animationProgress
          }); // Run the onProgress & onComplete callbacks if needed. 


          _this2._runCallbackFunctions(_this2.onProgress, {
            parameters: [_this2.animationProgress, _this2.currentAnimationRange]
          });

          _this2._runCallbackFunctions(_this2.onComplete); // Reset animation datas.


          startTime = null;

          _this2._resetAnimationDatas();
        }
      };

      this.requestAnim = requestAnimationFrame(frame);
    }
    /**
     * @method run
     * @description Launch the animation.
     */

  }, {
    key: "run",
    value: function run() {
      this.animate();
    }
    /**
     * @method stop
     * @description Stop the animation.
     */

  }, {
    key: "stop",
    value: function stop() {
      if (this.isAnimationRunning) {
        this.isAnimationRunning = false;

        this._resetAnimationDatas();

        cancelAnimationFrame(this.requestAnim);
      }
    }
  }, {
    key: "_processingAnimationProgress",
    value: function _processingAnimationProgress() {
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
  }, {
    key: "_scrolling",
    value: function _scrolling(_ref2) {
      var animationPosition = _ref2.animationPosition;

      switch (this.direction) {
        case Animation.directions.scrollY:
          window.scrollTo(window.scrollX, animationPosition);
          break;

        case Animation.directions.scrollX:
          window.scrollTo(animationPosition, window.scrollY);
          break;

        default:
          // By default make the animated scroll vertical.
          window.scrollTo(this.from, animationPosition);
      }
    } // Helpers methods

  }, {
    key: "_getAnimDistance",
    value: function _getAnimDistance(from, to) {
      return from < to ? to - from : from - to;
    }
  }, {
    key: "_getAnimProgress",
    value: function _getAnimProgress(_ref3) {
      var timingCurve = _ref3.timingCurve,
          animationRange = _ref3.animationRange,
          animDistance = _ref3.animDistance,
          currentToValue = _ref3.currentToValue;
      return timingCurve(animationRange) * animDistance + currentToValue;
    }
  }, {
    key: "_getCurrentToValue",
    value: function _getCurrentToValue(from, to) {
      return to > from ? from : to;
    }
  }, {
    key: "_getAnimationRange",
    value: function _getAnimationRange(progress, duration) {
      return progress / duration;
    }
  }, {
    key: "_resetAnimationDatas",
    value: function _resetAnimationDatas() {
      this.animationProgress = 0;
      this.currentAnimationRange = 0;
    }
  }, {
    key: "_runCallbackFunctions",
    value: function _runCallbackFunctions(functionName) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          parameters = _ref4.parameters;

      if (functionName !== null) {
        typeof parameters === 'undefined' ? functionName() : functionName.apply(void 0, _toConsumableArray(parameters));
      }
    }
  }], [{
    key: "directions",
    get: function get() {
      return {
        scrollX: 'scrollX',
        scrollY: 'scrollY'
      };
    }
  }, {
    key: "timingCurves",
    get: function get() {
      return {
        linear: function linear(t) {
          return t;
        },
        easeInQuad: function easeInQuad(t) {
          return t * t;
        },
        easeOutQuad: function easeOutQuad(t) {
          return t * (2 - t);
        },
        easeInOutQuad: function easeInOutQuad(t) {
          return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic: function easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic: function easeOutCubic(t) {
          return --t * t * t + 1;
        },
        easeInOutCubic: function easeInOutCubic(t) {
          return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart: function easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart: function easeOutQuart(t) {
          return 1 - --t * t * t * t;
        },
        easeInOutQuart: function easeInOutQuart(t) {
          return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        },
        easeInQuint: function easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint: function easeOutQuint(t) {
          return 1 + --t * t * t * t * t;
        },
        easeInOutQuint: function easeInOutQuint(t) {
          return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
        }
      };
    }
  }]);

  return Animation;
}();
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


var AnimaScroll =
/*#__PURE__*/
function () {
  function AnimaScroll(_ref5) {
    var link = _ref5.link,
        duration = _ref5.duration,
        timingCurve = _ref5.timingCurve,
        shiftBy = _ref5.shiftBy;

    _classCallCheck(this, AnimaScroll);

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


  _createClass(AnimaScroll, [{
    key: "init",
    value: function init() {
      var _this3 = this;

      document.addEventListener('click', function (e) {
        delegateTo({
          element: e.target,
          withSelector: "[href=\"".concat(_this3.link.hash, "\"]")
        }, function () {
          e.preventDefault();

          _this3._scrollingTo(_this3._scrollingDistanceFrom(_this3.anchor));
        });
      });
    }
  }, {
    key: "_scrollingDistanceFrom",
    value: function _scrollingDistanceFrom(anchor) {
      return anchor.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    }
  }, {
    key: "_scrollingDistanceToBeSubstractedFrom",
    value: function _scrollingDistanceToBeSubstractedFrom(value) {
      var selectors = value.split(','); // Catch error if a shiftBy param doesn't exist.

      if (!selectors.every(function (selector) {
        return document.querySelector(selector);
      })) {
        return console.error("One of your shiftBy selector doesn't exist.");
      }

      return selectors.map(function (selector) {
        return document.querySelector(selector).offsetHeight;
      }).reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });
    }
  }, {
    key: "_updateUrl",
    value: function _updateUrl(_ref6) {
      var hash = _ref6.hash;

      if (history.pushState) {
        history.pushState(null, null, hash);
      } else {
        location.hash = hash;
      }
    }
  }, {
    key: "_scrollingTo",
    value: function _scrollingTo(scrollDistance) {
      this._updateUrl({
        hash: this.link.hash
      });

      var animation = new Animation({
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

  }], [{
    key: "_withDOM",
    value: function _withDOM() {
      var links = document.querySelectorAll('[data-anima-link]');

      for (var i = 0; i < links.length; i++) {
        new AnimaScroll({
          link: links[i],
          duration: links[i].getAttribute('data-anima-duration') || null,
          timingCurve: links[i].getAttribute('data-anima-timing-curve') || null,
          shiftBy: links[i].getAttribute('data-anima-shiftBy') || null
        }).init();
      }
    }
  }, {
    key: "timingCurves",
    get: function get() {
      return Animation.timingCurves;
    }
  }]);

  return AnimaScroll;
}();

document.addEventListener('DOMContentLoaded', AnimaScroll._withDOM);

function delegateTo(_ref7, callback) {
  var element = _ref7.element,
      withSelector = _ref7.withSelector;
  var elementIsFind;
  var isSelectorExist = document.querySelector(withSelector) ? true : false; // Use custom macthes function if browser doesn't support native macthes method.

  var elementMatches = polyfills.isMatchesSupported ? element.matches(withSelector) : polyfills.matches(element, withSelector);

  if (!elementMatches && isSelectorExist) {
    // Same thing for closest method.
    var closestElement = polyfills.isClosestSupported ? element.closest(withSelector) : polyfills.closest(element, withSelector);
    elementIsFind = closestElement !== null ? true : false;
  } else {
    elementIsFind = isSelectorExist ? true : false;
  }

  if (elementIsFind) {
    // Passing the delegate current target element to the callback function.
    var currentTarget = polyfills.isClosestSupported ? element.closest(withSelector) : polyfills.closest(element, withSelector);
    callback(currentTarget);
  }
} // Polyfill object that store custom functions.


var polyfills = {
  matches: function matches(element, selector) {
    var matches = (element.document || element.ownerDocument).querySelectorAll(selector),
        i = matches.length;

    while (--i >= 0 && matches.item(i) !== element) {}

    return i > -1;
  },
  isMatchesSupported: Element.prototype.matches ? true : false,
  closest: function closest(element, selector) {
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
/* harmony default export */ __webpack_exports__["default"] = ({
  Animation: Animation,
  AnimaScroll: AnimaScroll
});

/***/ })
/******/ ])["default"];