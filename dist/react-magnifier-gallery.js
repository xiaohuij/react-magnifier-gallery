(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactMagnifierGallery"] = factory(require("react"));
	else
		root["ReactMagnifierGallery"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(12)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(13)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(3);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(1);

var _videoPlayIcon = __webpack_require__(14);

var _videoPlayIcon2 = _interopRequireDefault(_videoPlayIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scrollable = function (_Component) {
  _inherits(Scrollable, _Component);

  function Scrollable() {
    _classCallCheck(this, Scrollable);

    var _this = _possibleConstructorReturn(this, (Scrollable.__proto__ || Object.getPrototypeOf(Scrollable)).call(this));

    _this.state = {
      thumbContainerStyle: {
        left: '0'
      }
    };

    _this.config = {
      moveLength: 0,
      viewNumber: 5,
      stepNumber: 1,
      step: 46
    };

    _this.onPrev = _this.onPrev.bind(_this);
    _this.onNext = _this.onNext.bind(_this);
    return _this;
  }

  _createClass(Scrollable, [{
    key: 'onPrev',
    value: function onPrev() {
      var currentLeft = this.state.thumbContainerStyle.left.split('px')[0];
      var stride = this.config.step * this.config.stepNumber;
      var isMovable = this.config.moveLength > stride;
      var currentMoveLength = isMovable ? stride : this.config.moveLength;
      var thumbContainerLeft = parseInt(currentLeft, 10) + currentMoveLength;

      if (this.config.moveLength > 0) {
        this.setStyle('thumbContainerStyle', { left: thumbContainerLeft + 'px' });
        this.config.moveLength = isMovable ? this.config.moveLength - stride : 0;
      }
    }
  }, {
    key: 'onNext',
    value: function onNext() {
      var currentLeft = this.state.thumbContainerStyle.left.split('px')[0];
      var stride = this.config.step * this.config.stepNumber;
      var countLength = (this.props.photos.length - this.config.viewNumber) * stride;
      var thumbContainerLeft = parseInt(currentLeft, 10) - stride;
      if (this.config.moveLength < countLength) {
        this.setStyle('thumbContainerStyle', { left: thumbContainerLeft + 'px' });
        this.config.moveLength += stride;
      }
    }
  }, {
    key: 'setStyle',
    value: function setStyle(stateName, obj) {
      var stateValue = this.state[stateName];
      Object.keys(obj).forEach(function (key) {
        stateValue[key] = obj[key];
      });
      this.setState({ stateName: stateValue });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          photos = _props.photos,
          onPreview = _props.onPreview;

      if (this.props.displaySingle) {
        return '';
      }

      return _react2.default.createElement(
        'div',
        { className: 'scroll' },
        _react2.default.createElement(
          'a',
          { className: 'prev', onClick: this.onPrev, role: 'button', tabIndex: '-1' },
          '<'
        ),
        _react2.default.createElement(
          'a',
          { className: 'next', onClick: this.onNext, role: 'button', tabIndex: '-1' },
          '>'
        ),
        _react2.default.createElement(
          'div',
          { className: 'items' },
          _react2.default.createElement(
            'ul',
            { id: 'imgContainer', style: _extends({}, this.state.thumbContainerStyle) },
            photos.map(function (photo, idx) {
              var imgProps = photo.video ? { className: 'video-play-icon', src: _videoPlayIcon2.default } : { src: photo.thumb };

              var mouseMoveHandler = function mouseMoveHandler() {
                onPreview(photo);
              };

              return _react2.default.createElement(
                'li',
                { key: idx },
                _react2.default.createElement('img', _extends({
                  alt: ''
                }, imgProps, {
                  onMouseMove: mouseMoveHandler
                }))
              );
            })
          )
        )
      );
    }
  }]);

  return Scrollable;
}(_react.Component);

Scrollable.propTypes = {
  photos: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    thumb: _propTypes2.default.string,
    full: _propTypes2.default.string,
    video: _propTypes2.default.bool
  })).isRequired,
  onPreview: _propTypes2.default.func,
  displaySingle: _propTypes2.default.bool
};

exports.default = Scrollable;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(1);

var _scrollable = __webpack_require__(7);

var _scrollable2 = _interopRequireDefault(_scrollable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  _createClass(Gallery, null, [{
    key: 'getOffset',
    value: function getOffset(domNode) {
      var node = domNode;
      var leftOffset = node.offsetLeft;
      var topOffset = node.offsetTop;
      while (node.offsetParent != null) {
        node = node.offsetParent;
        leftOffset += node.offsetLeft;
        topOffset += node.offsetTop;
      }
      return { left: leftOffset, top: topOffset };
    }
  }, {
    key: 'getCommonSize',
    value: function getCommonSize() {
      var commonSize = {};
      var zoomSrc = document.getElementById('zoomSrc');
      if (zoomSrc) {
        var mask = zoomSrc.getElementsByTagName('div')[0];
        var lens = mask.getElementsByTagName('span')[0];
        commonSize.mask = Gallery.getOffset(mask);
        commonSize.mask.width = mask.offsetWidth;
        commonSize.mask.height = mask.offsetHeight;
        commonSize.lens = { width: lens.offsetWidth, height: lens.offsetHeight };
      }
      var zoomArea = document.getElementById('zoomArea');
      if (zoomArea) {
        var zoomImg = zoomArea.getElementsByTagName('img')[0];
        commonSize.zoomArea = { width: zoomArea.offsetWidth, height: zoomArea.offsetHeight };
        commonSize.zoomImg = { width: zoomImg.offsetWidth, height: zoomImg.offsetHeight };
      }
      return commonSize;
    }
  }]);

  function Gallery() {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

    _this.previewWidth = 250;
    _this.previewHeight = 250;
    _this.state = {
      photos: [],
      selectedPhoto: {},
      lensStyle: {
        display: 'none',
        left: '0',
        top: '0',
        width: '0',
        height: '0'
      },
      zoomAreaStyle: {
        display: 'none'
      },
      zoomImgStyle: {
        left: '0',
        top: '0'
      }
    };

    _this.onLoadMediaHandler = _this.onLoadMediaHandler.bind(_this);
    _this.onMouseOverHandler = _this.onMouseOverHandler.bind(_this);
    _this.onMouseMoveHandler = _this.onMouseMoveHandler.bind(_this);
    _this.onMouseOutHandler = _this.onMouseOutHandler.bind(_this);
    _this.onPreview = _this.onPreview.bind(_this);
    return _this;
  }

  _createClass(Gallery, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var photos = this.props.photos;

      this.setState({ photos: photos }, function () {
        if (photos.length > 0) {
          _this2.setState({ selectedPhoto: photos[0] });
        }
        _this2.preload();
      });
    }
  }, {
    key: 'onPreview',
    value: function onPreview(photo) {
      this.setState({ selectedPhoto: photo });
    }
  }, {
    key: 'onMouseOverHandler',
    value: function onMouseOverHandler() {
      this.setStyle('lensStyle', { display: 'block' });
      this.setStyle('zoomAreaStyle', { display: 'block' });
    }
  }, {
    key: 'onMouseOutHandler',
    value: function onMouseOutHandler() {
      this.setStyle('lensStyle', { display: 'none' });
      this.setStyle('zoomAreaStyle', { display: 'none' });
    }
  }, {
    key: 'onMouseMoveHandler',
    value: function onMouseMoveHandler(event) {
      var commonSize = Gallery.getCommonSize();
      var innerArea = {
        width: commonSize.mask.width - commonSize.lens.width,
        height: commonSize.mask.height - commonSize.lens.height
      };
      var x = event.clientX - commonSize.mask.left - commonSize.lens.width / 2;
      var y = event.clientY - commonSize.mask.top - commonSize.lens.height / 2;
      if (x < 0) {
        x = 0;
      } else if (x > innerArea.width) {
        x = innerArea.width;
      }
      if (y < 0) {
        y = 0;
      } else if (y > innerArea.height) {
        y = innerArea.height;
      }

      this.setStyle('lensStyle', { left: x + 'px', top: y + 'px' });

      var zoomPosition = {
        left: -(x / innerArea.width) * (commonSize.zoomImg.width - commonSize.zoomArea.width),
        top: -(y / innerArea.height) * (commonSize.zoomImg.height - commonSize.zoomArea.height)
      };
      this.setStyle('zoomImgStyle', {
        left: innerArea.width === 0 ? 0 : zoomPosition.left + 'px',
        top: innerArea.height === 0 ? 0 : zoomPosition.top + 'px'
      });
    }
  }, {
    key: 'onLoadMediaHandler',
    value: function onLoadMediaHandler(event) {
      var target = event.target;
      var naturalWidth = target.naturalWidth ? target.naturalWidth : target.videoWidth;
      var naturalHeight = target.naturalHeight ? target.naturalHeight : target.videoHeight;
      var ratio = naturalWidth / naturalHeight;

      if (ratio > 1) {
        var previewWidth = this.previewWidth;
        var previewHeight = parseInt(this.previewWidth / ratio, 10);
        var width = previewWidth > naturalWidth ? naturalWidth : previewWidth;
        var height = previewHeight > naturalHeight ? naturalHeight : previewHeight;
        var size = {
          width: width + 'px',
          height: height + 'px',
          top: this.previewWidth * (1 - 1 / ratio) / 2,
          position: 'absolute'
        };
        var len = this.previewWidth * this.previewWidth / naturalWidth;
        this.setState({ selectedPhotoStyle: size, zoomMaskStyle: size });
        this.setStyle('lensStyle', {
          width: (len > width ? width : len) + 'px',
          height: (len > height ? height : len) + 'px'
        });
      } else {
        var _previewHeight = this.previewHeight;
        var _previewWidth = parseInt(this.previewHeight * ratio, 10);
        var _width = _previewWidth > naturalWidth ? naturalWidth : _previewWidth;
        var _height = _previewHeight > naturalHeight ? naturalHeight : _previewHeight;
        var _size = {
          width: _width + 'px',
          height: _height + 'px',
          left: this.previewHeight * (1 - ratio) / 2,
          position: 'absolute'
        };
        var _len = this.previewHeight * this.previewHeight / naturalHeight;
        this.setState({ selectedPhotoStyle: _size, zoomMaskStyle: _size });
        this.setStyle('lensStyle', {
          width: (_len > _width ? _width : _len) + 'px',
          height: (_len > _height ? _height : _len) + 'px'
        });
      }
    }
  }, {
    key: 'setStyle',
    value: function setStyle(stateName, obj) {
      var stateValue = this.state[stateName];
      Object.keys(obj).forEach(function (key) {
        stateValue[key] = obj[key];
      });
      this.setState({ stateName: stateValue });
    }
  }, {
    key: 'preload',
    value: function preload() {
      var images = [];
      this.state.photos.forEach(function (photo, idx) {
        images[idx] = new Image();
        images[idx].src = photo.full;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.photos.length > 0) {
        return _react2.default.createElement(
          'div',
          { className: 'gallery' },
          this.state.selectedPhoto.video ? _react2.default.createElement(
            'div',
            { className: 'preview' },
            _react2.default.createElement(
              'video',
              {
                style: this.state.selectedPhotoStyle,
                src: this.state.selectedPhoto.full,
                controls: 'true',
                onLoadedData: this.onLoadMediaHandler
              },
              _react2.default.createElement('track', {
                kind: 'captions'
              })
            )
          ) : _react2.default.createElement(
            'div',
            { className: 'preview' },
            _react2.default.createElement(
              'div',
              { id: 'zoomSrc' },
              _react2.default.createElement('img', {
                style: _extends({}, this.state.selectedPhotoStyle),
                src: this.state.selectedPhoto.full,
                alt: this.state.selectedPhoto.full,
                onLoad: this.onLoadMediaHandler
              }),
              _react2.default.createElement(
                'div',
                {
                  className: 'zoomMask',
                  style: this.state.zoomMaskStyle,
                  onMouseOver: this.onMouseOverHandler,
                  onMouseMove: this.onMouseMoveHandler,
                  onMouseOut: this.onMouseOutHandler
                },
                _react2.default.createElement('span', { className: 'zoomLens', style: _extends({}, this.state.lensStyle) })
              )
            ),
            _react2.default.createElement(
              'div',
              { id: 'zoomArea', style: _extends({}, this.state.zoomAreaStyle) },
              _react2.default.createElement('img', {
                src: this.state.selectedPhoto.full,
                alt: this.state.selectedPhoto.full,
                style: _extends({}, this.state.zoomImgStyle)
              })
            )
          ),
          _react2.default.createElement(_scrollable2.default, {
            photos: this.state.photos,
            displaySingle: this.props.displaySingle,
            onPreview: this.onPreview
          })
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'gallery-empty' },
        'No Photo'
      );
    }
  }]);

  return Gallery;
}(_react.Component);

Gallery.propTypes = {
  photos: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    thumb: _propTypes2.default.string,
    full: _propTypes2.default.string,
    video: _propTypes2.default.bool
  })).isRequired,
  displaySingle: _propTypes2.default.bool
};

exports.default = Gallery;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "#zoomSrc {\n  float: left;\n  border: 0 none;\n  position: relative;\n  padding: 0px;\n  margin: 0px;\n  width: 250px;\n  height: 250px; }\n  #zoomSrc img {\n    position: absolute;\n    width: 0;\n    height: 0; }\n  #zoomSrc span.zoomLens {\n    display: none;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 50px;\n    height: 50px;\n    border: 1px solid #aaa;\n    background: rgba(255, 255, 255, 0.3); }\n\n#zoomArea {\n  z-index: 100;\n  position: absolute;\n  top: 0px;\n  left: 255px;\n  width: 250px;\n  height: 250px;\n  background: #ffffff;\n  border: 1px solid #CCCCCC;\n  display: none;\n  text-align: center;\n  overflow: hidden; }\n  #zoomArea img {\n    position: absolute;\n    left: 0;\n    top: 0; }\n\n.zoomMask {\n  cursor: crosshair;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 10; }\n\n.gallery .video-play-icon {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.gallery .preview {\n  width: 252px;\n  height: 252px;\n  border: 1px solid #dfdfdf;\n  position: relative; }\n\n.gallery .scroll {\n  clear: both;\n  margin-top: 8px;\n  width: 250px; }\n  .gallery .scroll .items {\n    float: left;\n    position: relative;\n    width: 230px;\n    height: 42px;\n    overflow: hidden; }\n    .gallery .scroll .items ul {\n      padding: 0;\n      margin: 0;\n      position: absolute;\n      left: 0;\n      width: 999999px;\n      height: 40px;\n      list-style: none outside none; }\n      .gallery .scroll .items ul li {\n        float: left;\n        width: 40px;\n        text-align: center;\n        margin: 0 3px; }\n        .gallery .scroll .items ul li img {\n          border: 1px solid #fff;\n          width: 40px;\n          height: 40px; }\n        .gallery .scroll .items ul li img:hover {\n          border: 1px solid #00f; }\n  .gallery .scroll .prev, .gallery .scroll .next {\n    cursor: pointer;\n    color: #545454;\n    display: block;\n    text-align: center;\n    width: 6px;\n    height: 40px;\n    line-height: 40px;\n    text-decoration: none;\n    outline: none; }\n  .gallery .scroll .prev {\n    float: left;\n    margin-right: 4px; }\n  .gallery .scroll .next {\n    float: right;\n    margin-left: 4px; }\n\n.gallery-empty {\n  width: 250px;\n  height: 250px;\n  line-height: 250px;\n  text-align: center;\n  font-size: 20px;\n  border: 1px solid #dfdfdf; }\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (true) {
  var invariant = __webpack_require__(4);
  var warning = __webpack_require__(5);
  var ReactPropTypesSecret = __webpack_require__(6);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(3);
var invariant = __webpack_require__(4);
var warning = __webpack_require__(5);

var ReactPropTypesSecret = __webpack_require__(6);
var checkPropTypes = __webpack_require__(11);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAC7lBMVEUAAAAAAAB/f39VVVU/Pz9mZmZVVVVISEg/P19UVFRMTExFRUVVVVVOTk5ISEhVVVVPT09LS0tUVFRQUFBMTExISFRRUVFNTU1KSlVRUVFOTk5LS0tRUVFMTExKSlJPT09NTU1LS1JQUFBNTU1LS1JQUFBOTk5MTFJQUFBOTk5NTU1LS1FPT09NTU1LS1FPT09OTk5MTFFQUFBOTk5MTFFQUFBOTk5NTVFMTFBPT09NTVJMTFBPT09OTk5MTFBPT09OTk5NTVFMTE9OTk5NTVFMTFBPT09NTVFMTFBPT09OTlFNTVBPT09OTk5NTVBMTE9OTk5NTVBMTE9OTk5OTlFNTVBPT09NTVBPT09OTlFNTVBMTE9OTk5NTVBNTU9OTk5OTlBNTU9PT09OTlBNTVBPT09OTlBNTVBMTE9OTlFNTVBNTU9OTlFOTlBNTU9OTk5OTlBNTU9MTE9OTlBNTU9NTU9OTlBNTVBNTU9OTlBOTlBNTU9OTlBOTlBNTU9NTU9OTlBNTU9NTU9OTlBOTk9NTU9OTlBOTlBNTU9OTlBOTlBNTVBOTlBMTE9NTU9OTlBOTk9NTU9OTlBOTk5NTU9NTVBOTk5NTU9NTVBOTlBMTE9NTVBOTlBOTk9NTVBOTlBOTk5NTU9NTVBOTk5MTE9NTVBOTk5OTk9NTVBOTlBOTk9NTVBOTlBOTk9MTFBNTVBOTk5MTE9NTVBOTk5OTk9NTVBOTk5OTk9MTFBOTlBOTk9MTFBNTVBOTk5MTFBNTVBOTk5OTk9MTFBOTk5OTk9MTFBNTU5OTk9MTFBNTVBOTk9NTVBOTk5MTFBOTk5OTlBMTFBNTU5OTk9MTFBNTU5OTk9OTlBMTE5OTk5OTlBMTFBOTk5OTlBMTFBNTU5OTlBMTFBOTk9OTlBMTE5OTk5OTlBMTE5NTU5OTlBMTFBMTE5OTlBMTFBMTE5OTlBOTlBMTE5OTk9OTlBMTE5MTE5OTlBMTE5MTE5OTlBOTlC1GccoAAAA+XRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldZWltcXV5fYGFi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"

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-magnifier-gallery.js.map