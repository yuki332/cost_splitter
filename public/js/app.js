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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _notification = __webpack_require__(2);

var _notification2 = _interopRequireDefault(_notification);

var _calculate = __webpack_require__(8);

var _calculate2 = _interopRequireDefault(_calculate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var submit = document.getElementById('btn_submit');

submit.addEventListener('click', function () {
	var total = document.getElementById('total').value;
	var people = document.getElementById('people').value;
	var target = document.getElementById('result');
	var calc = new _calculate2.default(total, people);
	calc.validate();
	if (calc.status) {
		target.innerHTML = calc.result.toFixed(2);
	} else {
		var errorMessages = [];
		for (var key in calc.messages) {
			if (calc.messages[key] != false) {
				_notification2.default.log(calc.messages[key]);
				errorMessages.push(calc.messages[key]);
			}
		}
		target.innerHTML = errorMessages.join('</br>');
	}
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function announce(message) {
	alert(message);
};

function log(message) {
	console.log(message);
};

exports.default = {
	announce: announce,
	log: log
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calc = function () {
	function Calc(total, people) {
		_classCallCheck(this, Calc);

		this.total = total;
		this.people = people;
		this.messages = [];
		this.validattionStatus = false;
	}

	_createClass(Calc, [{
		key: 'validate',
		value: function validate() {
			var message = 'Please Enter Number to ';
			this.messages['total'] = (isNaN(this.total) || this.total === '') && message + 'total';
			this.messages['people'] = (isNaN(this.people) || this.people === '') && message + 'people';
			this.validattionStatus = !isNaN(this.total) && !isNaN(this.people) && this.total !== '' && this.people !== '' && true;
		}
	}, {
		key: 'result',
		get: function get() {
			return this.total / this.people;
		}
	}, {
		key: 'status',
		get: function get() {
			return this.validattionStatus;
		}
	}, {
		key: 'errorMessages',
		get: function get() {
			return this.messages;
		}
	}]);

	return Calc;
}();

exports.default = Calc;

/***/ })
/******/ ]);