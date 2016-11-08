webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _xin = __webpack_require__(1);
	
	var _xin2 = _interopRequireDefault(_xin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var XinAnalytics = function (_xin$Component) {
	  _inherits(XinAnalytics, _xin$Component);
	
	  function XinAnalytics() {
	    _classCallCheck(this, XinAnalytics);
	
	    return _possibleConstructorReturn(this, (XinAnalytics.__proto__ || Object.getPrototypeOf(XinAnalytics)).apply(this, arguments));
	  }
	
	  _createClass(XinAnalytics, [{
	    key: 'attached',
	    value: function attached() {
	      var _this2 = this;
	
	      if (typeof window.cordova === 'undefined' || window.cordova.platformId === 'browser') {
	        this.isCordova = false;
	
	        XinAnalytics.load();
	
	        this.startPageTracking();
	        return;
	      }
	
	      this.isCordova = true;
	      document.addEventListener('deviceready', function () {
	        if (window.analytics) {
	          _this2.startPageTracking();
	        }
	      }, true);
	    }
	  }, {
	    key: 'startPageTracking',
	    value: function startPageTracking() {
	      if (this.isCordova) {
	        window.analytics.startTrackerWithId(this.trackerId);
	        window.analytics.trackView(window.location.href);
	      } else {
	        window.ga('create', this.trackerId, 'none');
	        this.__app.on('navigated', function (evt) {
	          window.ga('send', 'pageview', evt.detail.uri);
	        });
	      }
	    }
	  }, {
	    key: 'sendEvent',
	    value: function sendEvent(category, action, label, value) {
	      window.ga('send', 'event', {
	        eventCategory: category,
	        eventAction: action,
	        eventLabel: label,
	        eventValue: value
	      });
	    }
	  }, {
	    key: 'props',
	    get: function get() {
	      return {
	        trackerId: {
	          type: String,
	          required: true
	        }
	      };
	    }
	  }], [{
	    key: 'load',
	    value: function load() {
	      if (XinAnalytics.loaded) {
	        return;
	      }
	
	      /* eslint-disable */
	      (function (i, s, o, g, r, a, m) {
	        i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
	          (i[r].q = i[r].q || []).push(arguments);
	        }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
	      })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
	      /* eslint-enable */
	
	      XinAnalytics.loaded = true;
	    }
	  }]);
	
	  return XinAnalytics;
	}(_xin2.default.Component);
	
	_xin2.default.define('xin-analytics', XinAnalytics);
	
	exports.default = XinAnalytics;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _repository = __webpack_require__(2);
	
	var _component = __webpack_require__(3);
	
	var _fx = __webpack_require__(4);
	
	var _fx2 = _interopRequireDefault(_fx);
	
	var _setup = __webpack_require__(5);
	
	var _setup2 = _interopRequireDefault(_setup);
	
	var _object = __webpack_require__(6);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _templateBinding = __webpack_require__(7);
	
	var _templateBinding2 = _interopRequireDefault(_templateBinding);
	
	var _async = __webpack_require__(16);
	
	var _async2 = _interopRequireDefault(_async);
	
	var _debounce = __webpack_require__(17);
	
	var _debounce2 = _interopRequireDefault(_debounce);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (_typeof(window.xin) === 'object') {
	  _setup2.default.load(window.xin);
	}
	
	var xin = function xin(id) {
	  return (0, _repository.get)(id);
	};
	
	xin.put = _repository.put;
	xin.Component = _component.Component;
	xin.define = _component.define;
	xin.base = _component.base;
	xin.object = _object2.default;
	xin.setup = _setup2.default;
	xin.filter = _templateBinding2.default.Filter;
	xin.event = _templateBinding2.default.Event;
	xin.Fx = _fx2.default;
	xin.Async = _async2.default;
	xin.Debounce = _debounce2.default;
	
	window.xin = xin;
	
	exports.default = xin;

/***/ },
/* 2 */
/***/ function(module, exports) {

	const REPOSITORY = {};
	
	function get (id) {
	  if (!isNaN(id)) {
	    return REPOSITORY[id];
	  }
	
	  if (REPOSITORY[id]) {
	    return REPOSITORY[id];
	  }
	
	  var idSplitted = id.split('.');
	  var scope = window;
	  idSplitted.find(function (token) {
	    scope = scope[token];
	    return !scope;
	  });
	
	  return scope;
	}
	
	function put (id, value) {
	  REPOSITORY[id] = value;
	}
	
	export { get, put };


/***/ },
/* 3 */
/***/ function(module, exports) {

	import T from 'template-binding';
	import { put } from './repository';
	import object from './object';
	import { dashify } from './inflector';
	import Async from './async';
	import Debounce from './debounce';
	import setup from './setup';
	
	let componentId = 0;
	function nextId () {
	  return componentId++;
	}
	
	let baseComponents = {};
	
	function base (base) {
	  if (baseComponents[base]) {
	    return baseComponents[base];
	  }
	
	  class Component extends window[base] {
	    get $ () {
	      return this.__templateHost.getElementsByTagName('*');
	    }
	
	    created () {}
	
	    ready () {}
	
	    attached () {}
	
	    createdCallback () {
	      if (setup.get('debug')) console.info(`CREATED ${this.is}`);
	
	      this.__id = nextId();
	      put(this.__id, this);
	      this.setAttribute('xin-id', this.__id);
	
	      this.created();
	
	      this.__initData();
	
	      this.__initTemplate();
	
	      this.__initProps();
	
	      this.__initListeners();
	
	      this.async(this.readyCallback);
	    }
	
	    readyCallback () {
	      this.__componentReady = true;
	
	      if (setup.get('debug')) console.info(`READY ${this.is}`);
	
	      let contentFragment;
	
	      if (this.__template) {
	        contentFragment = document.createDocumentFragment();
	        [].slice.call(this.childNodes).forEach(node => {
	          if (node === this.__templateMarker) return;
	          contentFragment.appendChild(node);
	        });
	      }
	
	      this.__templateRender(contentFragment);
	
	      this.ready();
	
	      if (this.__componentAttaching) {
	        this.attachedCallback();
	      }
	    }
	
	    attachedCallback () {
	      this.__componentAttaching = true;
	
	      if (!this.__componentReady) {
	        return;
	      }
	
	      if (setup.get('debug')) console.info(`ATTACHED ${this.is} ${this.__componentAttaching ? '(delayed)' : ''}`);
	
	      this.attached();
	
	      this.__componentAttaching = false;
	    }
	
	    get __app () {
	      if (!this.__app$) {
	        if (this.__appSignature) {
	          this.__app$ = this;
	        } else {
	          let app = this.parentElement;
	          while (app && !app.__appSignature) {
	            app = app.parentElement;
	          }
	          this.__app$ = app;
	        }
	      }
	
	      return this.__app$;
	    }
	
	    __initData () {
	      this.__componentContent = [];
	      this.__componentDebouncers = {};
	      this.__componentNotifiers = {};
	      this.__componentReady = false;
	      this.__componentAttaching = false;
	    }
	
	    __initProps () {
	      for (let propName in this.props) {
	        // exclude prototype properties
	        // if (!Object.prototype.hasOwnProperty.call(this.props, propName)) {
	        //   continue;
	        // }
	
	        let property = this.props[propName];
	        let attrName = dashify(propName);
	
	        let propValue;
	
	        if ('computed' in property) {
	          let accessor = T.Accessor.get(this, propName);
	          let expr = T.Expr.getFn(property.computed, [], true);
	          this.__templateAnnotate(expr, accessor);
	
	          // compute value of computed prop
	          propValue = expr.invoke(this);
	        } else if (this.hasAttribute(attrName)) {
	          let attrVal = this.getAttribute(attrName);
	
	          // copy value from attribute to property
	          // fallback to property.value
	          let expr = T.Expr.get(attrVal);
	          if (expr.type === 's') {
	            propValue = T.deserialize(attrVal, property.type);
	          }
	        } else if ('value' in property) {
	          propValue = object.v(property.value);
	        }
	
	        // when property is undefined, log error when property is required otherwise assign to default value
	        if (property.required && propValue === undefined /* (propValue === undefined || propValue === null) */) {
	          throw new Error(`${this.is}:${this.__id} missing required ${propName}`);
	        }
	
	        if ('observer' in property) {
	          let expr = T.Expr.getFn(property.observer, [ propName ], true);
	          this.__templateAnnotate(expr);
	        }
	
	        if ('notify' in property) {
	          this.__templateGetBinding(propName).annotations.push(new NotifyAnnotation(this, propName));
	        }
	
	        // set and force notify for the first time
	        this[propName] = propValue;
	        this.notify(propName, propValue);
	      }
	    }
	
	    __initTemplate () {
	      let template;
	
	      if (this.childElementCount === 1 && this.firstElementChild.nodeName === 'TEMPLATE' && !this.firstElementChild.hasAttribute('is')) {
	        // when instance template exist detach from component content
	        template = this.firstElementChild;
	        this.removeChild(template);
	      } else if (this.template) {
	        // create new template based on template property
	        template = document.createElement('template');
	        template.innerHTML = this.template;
	      }
	
	      this.__templateInitialize(template, this);
	    }
	
	    __initListeners () {
	      if (!this.listeners) {
	        return;
	      }
	
	      Object.keys(this.listeners).forEach(key => {
	        let meta = parseListenerMetadata(key);
	        let expr = T.Expr.getFn(this.listeners[key], [], true);
	        if (meta.selector) {
	          this.on(meta.eventName, meta.selector, evt => {
	            expr.invoke(this, { evt });
	          });
	        } else {
	          this.on(meta.eventName, evt => {
	            expr.invoke(this, { evt });
	          });
	        }
	      });
	    }
	
	    __addNotifier (eventName) {
	      if (this.__componentNotifiers[eventName]) {
	        return;
	      }
	
	      this.__componentNotifiers[eventName] = (evt) => {
	        let element = evt.target;
	
	        if (element.__templateModel !== this) {
	          return;
	        }
	
	        evt.stopImmediatePropagation();
	        switch (eventName) {
	          case 'input':
	            element.__templateModel.set(element.__templateNotifyKey, element.value);
	            break;
	          case '-notify':
	            element.__templateModel.set(evt.detail.name, evt.detail.value);
	            break;
	          default:
	            throw new Error('Unimplemented');
	        }
	      };
	
	      this.on(eventName, this.__componentNotifiers[eventName]);
	    }
	
	    __removeNotifier (eventName) {
	      if (!this.__componentNotifiers[eventName]) {
	        return;
	      }
	
	      this.off(eventName, this.__componentNotifiers[eventName]);
	      this.__componentNotifiers[eventName] = null;
	    }
	
	    fire (type, detail, options) {
	      return T.Event(this).fire(type, detail, options);
	    }
	
	    async (callback, waitTime) {
	      return Async.run(this, callback, waitTime);
	    }
	
	    debounce (job, callback, wait, immediate) {
	      let debouncer = this.__componentDebouncers[job];
	      if (debouncer && debouncer.running) {
	        debouncer.cancel();
	      } else {
	        debouncer = this.__componentDebouncers[job] = new Debounce(this, immediate);
	      }
	      debouncer.start(callback, wait);
	
	      return debouncer;
	    }
	
	    // T overriden
	    // -------------------------------------------------------------------------
	    //
	
	    __templateAnnotate (expr, accessor) {
	      if (!T.prototype.__templateAnnotate.call(this, expr, accessor)) {
	        return false;
	      }
	
	      // register event notifier
	      if (expr.mode === '{' && expr.type === 'p' && accessor.node instanceof window.HTMLElement) {
	        switch (accessor.node.nodeName) {
	          case 'INPUT':
	          case 'TEXTAREA':
	            if (accessor.name === 'value') {
	              accessor.node.__templateNotifyKey = expr.name;
	              this.__addNotifier('input');
	            }
	            break;
	          default:
	            // register event for custom notifier
	            this.__addNotifier('-notify');
	            break;
	        }
	      }
	
	      return true;
	    }
	
	  }
	
	  let tproto = T.prototype;
	  for (let key in tproto) {
	    // exclude __templateAnnotate because will be override
	    if (!tproto.hasOwnProperty(key)) {
	      continue;
	    }
	
	    if (key === '$' || key === '__templateAnnotate') {
	      continue;
	    }
	
	    Component.prototype[key] = tproto[key];
	  }
	
	  baseComponents[base] = Component;
	
	  return Component;
	}
	
	class NotifyAnnotation {
	  constructor (model, name) {
	    let expr = T.Expr.get(model.getAttribute(name));
	    this.model = model;
	    this.name = expr.name;
	  }
	
	  effect (value) {
	    this.model.fire('-notify', {
	      name: this.name,
	      value: value,
	    });
	  }
	}
	
	function parseListenerMetadata (key) {
	  key = key.trim();
	
	  let splitted = key.split(' ');
	  let metadata = {
	    key: key,
	    eventName: splitted[0],
	    selector: splitted[1] ? splitted.slice(1).join(' ') : null,
	  };
	
	  return metadata;
	}
	
	function define (name, Component, options) {
	  // TODO please make it happen for v1
	  // if (window.customElements) {
	  //   // throw new Error('Unimplemented webcomponents v1');
	  //   window.customElements.define(name, Component, options);
	  //   return Component;
	  // }
	
	  let ElementPrototype = {
	    prototype: Object.create(Component.prototype, { is: { value: name } }),
	    extends: (options && options.extends) ? options.extends : undefined,
	  };
	
	  let ElementClass = document.registerElement(name, ElementPrototype);
	
	  put(name, ElementClass);
	
	  return ElementClass;
	}
	
	const Component = base('HTMLElement');
	
	export { Component, base, define };


/***/ },
/* 4 */
/***/ function(module, exports) {

	import T from 'template-binding';
	import Async from './async';
	
	import '../css/transition-animate.css';
	
	class Fx {
	  static add (name, transition) {
	    adapters[name] = transition;
	  }
	
	  static get (name) {
	    return adapters[name] || adapters.none;
	  }
	
	  constructor (element, transition) {
	    this.element = element;
	    this.duration = 0;
	    this.transition = transition || element.transition || 'none';
	
	    var merged = Fx.get(this.transition);
	    for (var i in merged) {
	      if (typeof merged[i] === 'function') {
	        this[i] = merged[i];
	      }
	    }
	  }
	
	  play (method, direction) {
	    return this[method](direction);
	  }
	}
	
	const adapters = {
	  'none': {
	    in: () => Promise.resolve(),
	    out: () => Promise.resolve(),
	  },
	  'transition-slide': {
	    in (direction) {
	      var directionClass = direction > 0 ? 'transition-slide-in-right' : 'transition-slide-in-left';
	
	      return new Promise((resolve) => {
	        var onEnd = () => {
	          T.Event(this.element).off('transitionend', onEnd);
	
	          this.element.classList.remove('transition-slide-animate');
	
	          resolve();
	
	          Async.nextFrame(() => {
	            this.element.classList.remove(directionClass);
	            this.element.classList.remove('transition-slide-in');
	          });
	        };
	
	        T.Event(this.element).on('transitionend', onEnd);
	        this.element.classList.add(directionClass);
	
	        Async.nextFrame(() => {
	          this.element.classList.add('transition-slide-animate');
	          Async.nextFrame(() => this.element.classList.add('transition-slide-in'));
	        });
	      });
	    },
	    out (direction) {
	      var directionClass = direction > 0 ? 'transition-slide-out-left' : 'transition-slide-out-right';
	      return new Promise((resolve) => {
	        let onEnd = () => {
	          T.Event(this.element).off('transitionend', onEnd);
	          this.element.classList.remove('transition-slide-animate');
	
	          resolve();
	
	          Async.nextFrame(() => {
	            this.element.classList.remove(directionClass);
	            this.element.classList.remove('transition-slide-out');
	          });
	        };
	
	        T.Event(this.element).on('transitionend', onEnd);
	        this.element.classList.add(directionClass);
	
	        Async.nextFrame(() => {
	          this.element.classList.add('transition-slide-animate');
	          Async.nextFrame(() => this.element.classList.add('transition-slide-out'));
	        });
	      });
	    },
	  },
	};
	
	export default Fx;


/***/ },
/* 5 */
/***/ function(module, exports) {

	const setup = new Map();
	
	setup.load = obj => {
	  for (let i in obj) {
	    setup.set(i, obj[i]);
	  }
	};
	
	export default setup;


/***/ },
/* 6 */
/***/ function(module, exports) {

	function v (value, ...args) {
	  return typeof value === 'function' ? value(...args) : value;
	}
	
	function mix (...objects) {
	  return objects.reduce((result, o) => {
	    for (let i in o) result[i] = o[i];
	  }, {});
	}
	
	export default { v, mix };


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _expr = __webpack_require__(8);
	
	var _expr2 = _interopRequireDefault(_expr);
	
	var _binding = __webpack_require__(9);
	
	var _binding2 = _interopRequireDefault(_binding);
	
	var _accessor = __webpack_require__(10);
	
	var _accessor2 = _interopRequireDefault(_accessor);
	
	var _annotation = __webpack_require__(11);
	
	var _annotation2 = _interopRequireDefault(_annotation);
	
	var _filter = __webpack_require__(12);
	
	var _filter2 = _interopRequireDefault(_filter);
	
	var _token = __webpack_require__(13);
	
	var _token2 = _interopRequireDefault(_token);
	
	var _event = __webpack_require__(14);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _serializer = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var templateId = 0;
	function nextId() {
	  return templateId++;
	}
	
	var SLOT_SUPPORTED = typeof window === 'undefined' ? false : 'HTMLUnknownElement' in window && !(document.createElement('slot') instanceof window.HTMLUnknownElement);
	
	function slotName(element) {
	  return SLOT_SUPPORTED ? element.name : element.getAttribute('name');
	}
	
	function fixTemplate(template) {
	  if (!template.content && window.HTMLTemplateElement && window.HTMLTemplateElement.decorate) {
	    window.HTMLTemplateElement.decorate(template);
	  }
	  return template;
	}
	
	function T(template, host, marker) {
	  this.__templateInitialize(template, host, marker);
	  this.__templateRender();
	}
	
	T.prototype = {
	  get $() {
	    return this.__templateHost.getElementsByTagName('*');
	  },
	
	  $$: function $$(selector) {
	    return this.querySelector(selector);
	  },
	  on: function on() {
	    var _Event;
	
	    (_Event = (0, _event2.default)(this.__templateHost)).on.apply(_Event, arguments);
	  },
	  off: function off() {
	    var _Event2;
	
	    (_Event2 = (0, _event2.default)(this.__templateHost)).off.apply(_Event2, arguments);
	  },
	  all: function all(obj) {
	    for (var i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        this.set(i, obj[i]);
	      }
	    }
	  },
	  get: function get(path) {
	    var object = this;
	
	    this.__templateGetPathAsArray(path).some(function (segment) {
	      if (object === undefined || object === null) {
	        object = undefined;
	        return true;
	      }
	
	      object = object[segment];
	      return false;
	    });
	
	    return object;
	  },
	  set: function set(path, value) {
	    path = this.__templateGetPathAsArray(path);
	
	    var oldValue = this.get(path);
	
	    if (value === oldValue) {
	      return;
	    }
	
	    var object = this;
	
	    path.slice(0, -1).forEach(function (segment) {
	      if (!object) {
	        return;
	      }
	      if (object[segment] === undefined || object[segment] === null) {
	        object[segment] = {};
	      }
	
	      object = object[segment];
	    });
	
	    var property = path.slice(-1).pop();
	
	    object[property] = value;
	
	    this.notify(path, value);
	  },
	  notify: function notify(path, value) {
	    path = this.__templateGetPathAsString(path);
	
	    if (!this.__templateReady) {
	      if (this.__templateNotifyOnReady.indexOf(path) === -1) {
	        this.__templateNotifyOnReady.push(path);
	      }
	      return;
	    }
	
	    // try {
	    var binding = this.__templateGetBinding(path);
	    if (binding) {
	      if (typeof value === 'undefined') {
	        value = this.get(path);
	      }
	
	      binding.walkEffect(value);
	    }
	    // } catch (err) {
	    //   console.warn(`#notify caught error: ${err.message}\n Stack trace: ${err.stack}`);
	    // }
	  },
	  __templateInitialize: function __templateInitialize(template, host, marker) {
	    this.__templateId = nextId();
	    this.__templateBindings = {};
	    this.__templateHost = host || (template ? template.parentElement : null);
	    this.__templateMarker = marker;
	
	    this.__templateReady = false;
	    this.__templateNotifyOnReady = [];
	
	    if (!template) {
	      return;
	    }
	
	    // do below only if template is exists
	    this.__template = fixTemplate(template);
	    this.__templateChildNodes = [];
	
	    this.__templateFragment = document.importNode(this.__template.content, true);
	    this.__parseAnnotations();
	
	    if (marker) {
	      return;
	    }
	
	    if (this.__template.parentElement === this.__templateHost) {
	      // when template parent is template host, it means that template is specific template
	      // then use template as marker
	      this.__templateMarker = this.__template;
	    } else {
	      // when template is not child of host, put marker to host
	      this.__templateMarker = document.createComment('marker-' + this.__templateId);
	      this.__templateHost.appendChild(this.__templateMarker);
	    }
	  },
	  __templateRender: function __templateRender(contentFragment) {
	    var _this = this;
	
	    this.__templateReady = true;
	
	    if (!this.__template) {
	      return;
	    }
	
	    this.__templateNotifyOnReady.forEach(function (key) {
	      return _this.notify(key, _this.get(key));
	    });
	    this.__templateNotifyOnReady = [];
	
	    var fragment = this.__templateFragment;
	    this.__templateFragment = null;
	
	    if (contentFragment && contentFragment instanceof window.DocumentFragment) {
	      // try {
	      [].forEach.call(fragment.querySelectorAll('slot'), function (slot) {
	        var name = slotName(slot);
	        var parent = slot.parentElement || fragment;
	        var marker = document.createComment('slot ' + name);
	
	        parent.insertBefore(marker, slot);
	        parent.removeChild(slot);
	
	        if (name) {
	          var node = contentFragment.querySelectorAll('[slot="' + name + '"]');
	          [].forEach.call(node, function (node) {
	            parent.insertBefore(node, marker);
	          });
	        } else {
	          parent.insertBefore(contentFragment, marker);
	        }
	      });
	    }
	
	    this.__templateMarker.parentElement.insertBefore(fragment, this.__templateMarker);
	  },
	  __templateUninitialize: function __templateUninitialize() {
	    this.__templateChildNodes.forEach(function (node) {
	      node.parentElement.removeChild(node);
	    });
	  },
	  __templateGetPathAsArray: function __templateGetPathAsArray(path) {
	    // if (!path) {
	    //   throw new Error(`Unknown path ${path} to set to ${this.is}`);
	    // }
	
	    if (typeof path !== 'string') {
	      return path;
	    }
	
	    return path.split('.');
	  },
	  __templateGetPathAsString: function __templateGetPathAsString(path) {
	    if (typeof path === 'string') {
	      return path;
	    }
	
	    return path.join('.');
	  },
	  __parseAnnotations: function __parseAnnotations() {
	    this.__templateChildNodes = [].concat(_toConsumableArray(this.__templateFragment.childNodes));
	
	    var len = this.__templateChildNodes.length;
	
	    for (var i = 0; i < len; i++) {
	      var node = this.__templateChildNodes[i];
	
	      switch (node.nodeType) {
	        case window.Node.ELEMENT_NODE:
	          this.__parseElementAnnotations(node);
	          break;
	        case window.Node.TEXT_NODE:
	          this.__parseTextAnnotations(node);
	          break;
	      }
	    }
	  },
	  __parseEventAnnotations: function __parseEventAnnotations(element, attrName) {
	    // bind event annotation
	    var attrValue = element.getAttribute(attrName);
	    var eventName = attrName.slice(1, -1);
	    // let eventName = attrName.substr(3);
	    if (eventName === 'tap') {
	      eventName = 'click';
	    }
	
	    var context = this;
	    var expr = _expr2.default.getFn(attrValue, [], true);
	
	    this.on(eventName, element, function (evt) {
	      expr.invoke(context, { evt: evt });
	    });
	  },
	  __parseAttributeAnnotations: function __parseAttributeAnnotations(element) {
	    // clone attributes to array first then foreach because we will remove
	    // attribute later if already processed
	    // this hack to make sure when attribute removed the attributes index doesnt shift.
	    var annotated = false;
	
	    var len = element.attributes.length;
	
	    for (var i = 0; i < len; i++) {
	      var attr = element.attributes[i];
	
	      var attrName = attr.name;
	
	      if (attrName.indexOf('(') === 0) {
	        this.__parseEventAnnotations(element, attrName);
	      } else {
	        // bind property annotation
	        annotated = this.__templateAnnotate(_expr2.default.get(attr.value), _accessor2.default.get(element, attrName)) || annotated;
	      }
	    }
	
	    return annotated;
	  },
	  __parseElementAnnotations: function __parseElementAnnotations(element) {
	    var _this2 = this;
	
	    var annotated = false;
	
	    var scoped = element.__templateModel;
	
	    if (scoped) {
	      return annotated;
	    }
	
	    element.__templateModel = this;
	
	    if (element.attributes && element.attributes.length) {
	      annotated = this.__parseAttributeAnnotations(element) || annotated;
	    }
	
	    if (element.childNodes && element.childNodes.length) {
	      var childNodes = [].slice.call(element.childNodes);
	      var childNodesLength = childNodes.length;
	
	      for (var i = 0; i < childNodesLength; i++) {
	        annotated = this.__parseNodeAnnotations(childNodes[i]) || annotated;
	      }
	    }
	
	    [].forEach.call(element.getElementsByTagName('slot'), function (slot) {
	      [].forEach.call(slot.childNodes, function (node) {
	        annotated = _this2.__parseNodeAnnotations(node) || annotated;
	      });
	    });
	
	    return annotated;
	  },
	  __parseNodeAnnotations: function __parseNodeAnnotations(node) {
	    switch (node.nodeType) {
	      case window.Node.TEXT_NODE:
	        return this.__parseTextAnnotations(node);
	      case window.Node.ELEMENT_NODE:
	        return this.__parseElementAnnotations(node);
	    }
	  },
	  __parseTextAnnotations: function __parseTextAnnotations(node) {
	    var expr = _expr2.default.get(node.textContent);
	    var accessor = _accessor2.default.get(node);
	    return this.__templateAnnotate(expr, accessor);
	  },
	  __templateAnnotate: function __templateAnnotate(expr, accessor) {
	    var _this3 = this;
	
	    if (expr.type === 's') {
	      return false;
	    }
	
	    if (expr.constant) {
	      var val = expr.invoke(this);
	      accessor.set(val);
	      return false;
	    }
	
	    // annotate every paths
	    var annotation = new _annotation2.default(this, expr, accessor);
	
	    if (expr.type === 'm') {
	      this.__templateGetBinding(expr.fn.name).annotations.push(annotation);
	    }
	
	    expr.vpaths.forEach(function (arg) {
	      return _this3.__templateGetBinding(arg.name).annotations.push(annotation);
	    });
	
	    return true;
	  },
	  __templateGetBinding: function __templateGetBinding(path) {
	    var segments = path.split('.');
	    var bindings = void 0;
	    var binding = void 0;
	
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	
	      bindings = binding ? binding.paths : this.__templateBindings;
	
	      if (!bindings[segment]) {
	        bindings[segment] = new _binding2.default(this, segment);
	      }
	
	      binding = bindings[segment];
	    }
	
	    return binding;
	  }
	};
	
	T.Filter = _filter2.default;
	T.Accessor = _accessor2.default;
	T.Token = _token2.default;
	T.Expr = _expr2.default;
	T.Event = _event2.default;
	T.deserialize = _serializer.deserialize;
	
	window.T = T;
	
	exports.default = T;

/***/ },
/* 8 */
/***/ function(module, exports) {

	import Token from './token';
	import Filter from './filter';
	
	const CACHE = {
	  's': {
	    '[': new Map(),
	    '{': new Map(),
	  },
	  'v': {
	    '[': new Map(),
	    '{': new Map(),
	  },
	};
	
	function _get (value, mode, type) {
	  let cache = CACHE[type][mode];
	  if (cache.has(value)) {
	    return cache.get(value);
	  }
	
	  let expr = new Expr(value, mode, type);
	  if (type !== 's') {
	    cache.set(value, expr);
	  }
	
	  return expr;
	}
	
	class Expr {
	  static get CACHE () {
	    return CACHE;
	  }
	
	  static get (value, unwrapped) {
	    value = (value || '').trim();
	
	    if (unwrapped) {
	      return _get(value, '[', 'v');
	    }
	
	    let mode = value[0];
	    if ((mode === '[' || mode === '{') && value[1] === mode) {
	      value = value.slice(2, -2).trim();
	      return _get(value, mode, 'v');
	    }
	
	    return _get(value, '[', 's');
	  }
	
	  static getFn (value, args, unwrapped) {
	    return Expr.get(value.indexOf('(') === -1 ? `${value}(${args.join(', ')})` : value, unwrapped);
	  }
	
	  static rawTokenize (str) {
	    let count = 0;
	    let tokens = [];
	
	    while (str && count++ < 10) {
	      let matches = str.match(/^\s*("[^"]*"|[^,]+),?/);
	
	      str = str.substr(matches[0].length);
	      tokens.push(matches[1].trim());
	    }
	
	    return tokens;
	  }
	
	  static tokenize (str) {
	    return Expr.rawTokenize(str).map(token => Token.get(token));
	  }
	
	  constructor (value, mode, type) {
	    // define base properties
	    this.mode = mode;
	    this.type = type;
	    this.name = '';
	    this.args = [];
	    this.filters = [];
	    this.value = value;
	
	    if (type === 's') {
	      return;
	    }
	
	    let tokens = value.split('|');
	    let token = tokens[0].trim();
	
	    this.filters = tokens.slice(1).map(word => {
	      return Filter.get(word.trim());
	    });
	
	    if (token.indexOf('(') < 0) {
	      this.type = 'p';
	      this.name = token;
	      this.args.push(Token.get(token));
	    } else {
	      // force mode to '[' when type is !p
	      this.mode = '[';
	      this.type = 'm';
	
	      let matches = token.match(/([^(]+)\(([^)]*)\)/);
	
	      this.name = matches[1].trim();
	      this.fn = Token.get(this.name);
	
	      this.args = Expr.tokenize(matches[2]);
	    }
	  }
	
	  get constant () {
	    return this.type !== 'm' && this.vpaths.length !== this.args.length;
	  }
	
	  get vpaths () {
	    if (!this._vpaths) {
	      let paths = [];
	      this.args.forEach(arg => {
	        if (arg.type === 'v' && paths.indexOf(arg.name) === -1) {
	          paths.push(arg);
	        }
	      });
	      this._vpaths = paths;
	    }
	
	    return this._vpaths;
	  }
	
	  invoke (context, otherArgs) {
	    if (this.type === 'p') {
	      let val = this.args[0].value(context, otherArgs);
	      return this.filters.reduce((val, filter) => filter.invoke(val), val);
	    }
	
	    let fn = this.fn.value(context, context.__templateHost);
	    if (typeof fn !== 'function') {
	      throw new Error(`Method is not eligible, ${context.__templateHost.nodeName || '$anonymous'}#${this.name}`);
	    }
	
	    let args = this.args.map(arg => {
	      return arg.value(context, otherArgs);
	    });
	
	    return fn.apply(context, args);
	  }
	}
	
	export default Expr;


/***/ },
/* 9 */
/***/ function(module, exports) {

	class Binding {
	  constructor (context, model) {
	    this.context = context;
	    this.model = model;
	    this.paths = {};
	    this.annotations = [];
	  }
	
	  walkEffect (value) {
	    this.annotations.forEach(annotation => {
	      // try {
	      annotation.effect(value, this.model);
	      // } catch (err) {
	      //   console.error(`Error caught while walk effect annotation: ${annotation.expr ? annotation.expr.value : '#unknown'}\n ${err.stack}`);
	      // }
	    });
	
	    Object.keys(this.paths).forEach(i => {
	      this.paths[i].walkEffect(value ? value[i] : undefined);
	    });
	  }
	}
	
	export default Binding;


/***/ },
/* 10 */
/***/ function(module, exports) {

	class BaseAccessor {
	  static get (node, name) {
	    if (node && 'nodeType' in node) {
	      switch (node.nodeType) {
	        case window.Node.ELEMENT_NODE:
	          if (name.endsWith('$')) {
	            return new AttributeAccessor(node, name);
	          } else if (name === 'text') {
	            return new TextAccessor(node);
	          } else if (name === 'html') {
	            return new HTMLAccessor(node, name);
	          } else if (name === 'value' && node.nodeName === 'INPUT') {
	            return new ValueAccessor(node);
	          }
	
	          if (name.startsWith('class.')) {
	            return new ClassAccessor(node, name.split('.').splice(1).join('.'));
	          } else if (name.startsWith('style.')) {
	            return new StyleAccessor(node, name.split('.').splice(1).join('.'));
	          }
	
	          return new BaseAccessor(node, name);
	        case window.Node.TEXT_NODE:
	          if (node.parentElement && node.parentElement.nodeName === 'TEXTAREA') {
	            return new ValueAccessor(node.parentElement);
	          }
	
	          return new TextAccessor(node);
	        default:
	          throw new Error(`Unimplemented resolving accessor for nodeType: ${node.nodeType}`);
	      }
	    } else {
	      return new BaseAccessor(node, name);
	    }
	  }
	
	  constructor (node, name) {
	    this.node = node;
	    this.name = name;
	  }
	
	  set (value) {
	    if (typeof this.node.set === 'function') {
	      this.node.set(this.name, value);
	    } else {
	      this.node[this.name] = value;
	    }
	  }
	
	  get () {
	    if (typeof this.node.get === 'function') {
	      return this.node.get(this.name);
	    } else {
	      return this.node[this.name];
	    }
	  }
	}
	
	class TextAccessor extends BaseAccessor {
	  constructor (node) {
	    super(node, 'textContent');
	  }
	
	  set (value) {
	    this.node.textContent = typeof value === 'undefined' ? '' : value;
	  }
	}
	
	class ClassAccessor extends BaseAccessor {
	  set (value) {
	    if (value) {
	      this.node.classList.add(this.name);
	    } else {
	      this.node.classList.remove(this.name);
	    }
	  }
	
	  get () {
	    throw new Error('Unimplemented');
	  }
	}
	
	class StyleAccessor extends BaseAccessor {
	  set (value) {
	    this.node.style[this.name] = value || '';
	  }
	
	  get () {
	    throw new Error('Unimplemented');
	  }
	}
	
	class HTMLAccessor extends BaseAccessor {
	  set (value) {
	    this.node.innerHTML = typeof value === 'undefined' ? '' : value;
	  }
	
	  get () {
	    return this.node.innerHTML;
	  }
	}
	
	class ValueAccessor extends BaseAccessor {
	  constructor (node) {
	    super(node, 'value');
	  }
	
	  set (value) {
	    if (document.activeElement !== this.node) {
	      super.set(typeof value === 'undefined' ? '' : value);
	    }
	  }
	}
	
	class AttributeAccessor extends BaseAccessor {
	  constructor (node, name) {
	    super(node, name.slice(0, -1));
	  }
	
	  set (value) {
	    if (value) {
	      this.node.setAttribute(this.name, value);
	    } else {
	      this.node.removeAttribute(this.name);
	    }
	  }
	
	  get () {
	    return this.node.getAttribute(this.name);
	  }
	}
	
	export default BaseAccessor;


/***/ },
/* 11 */
/***/ function(module, exports) {

	class Annotation {
	  constructor (model, expr, accessor) {
	    this.model = model;
	    this.expr = expr;
	    this.accessor = accessor;
	  }
	
	  effect (value) {
	    if (this.accessor) {
	      let value = this.expr.invoke(this.model);
	      // FIXME implement composite annotation
	      this.accessor.set(value);
	    } else {
	      this.expr.invoke(this.model);
	    }
	  }
	}
	
	export default Annotation;


/***/ },
/* 12 */
/***/ function(module, exports) {

	class Filter {
	  constructor (name, callback, otherArgs) {
	    this.name = name;
	    this.callback = callback;
	    this.otherArgs = otherArgs;
	  }
	
	  invoke (val) {
	    let args = [val];
	    [].push.apply(args, this.otherArgs);
	    return this.callback.apply(null, args);
	  }
	
	  static put (name, callback) {
	    registry[name] = callback;
	  }
	
	  static get (name) {
	    let segments = name.split(':');
	    let args = segments.splice(1);
	    let key = segments.pop();
	    return new Filter(key, registry[key], args);
	  }
	}
	
	const registry = {
	  required: (val) => {
	    if (val === undefined || val === null || val === '') {
	      throw new Error('Value is required');
	    }
	    return val;
	  },
	  upper: (val) => String.prototype.toUpperCase.call(val || ''),
	  lower: (val) => String.prototype.toLowerCase.call(val || ''),
	  not: (val) => !val,
	  slice: (val, begin, end) => Array.prototype.slice.call(val || [], begin, end),
	};
	
	export default Filter;


/***/ },
/* 13 */
/***/ function(module, exports) {

	const CACHE = new Map();
	
	class Token {
	  static get CACHE () {
	    return CACHE;
	  }
	
	  static get (name) {
	    if (CACHE.has(name)) {
	      return CACHE.get(name);
	    }
	
	    let token = new Token(name);
	    CACHE.set(name, token);
	    return token;
	  }
	
	  constructor (name) {
	    this.name = name;
	    this._value = null;
	    this.type = 'v';
	
	    if (!this.name.match(/^[a-zA-Z_]/)) {
	      try {
	        this._value = JSON.parse(this.name);
	        this.type = 's';
	      } catch (err) {
	      }
	    }
	  }
	
	  value (context, others) {
	    context = context || window;
	
	    if (this.type === 's') {
	      return this._value;
	    }
	
	    let val = valueOf(context, this.name);
	    if (typeof val !== 'undefined') {
	      return val;
	    }
	
	    val = valueOf(others, this.name);
	    if (typeof val !== 'undefined') {
	      return val;
	    }
	
	    return;
	  }
	}
	
	function valueOf (context, key) {
	  if (context) {
	    return typeof context.get === 'function' ? context.get(key) : context[key];
	  }
	}
	
	export default Token;


/***/ },
/* 14 */
/***/ function(module, exports) {

	let _matcher;
	let _level = 0;
	let _id = 0;
	let _handlers = {};
	let _delegatorInstances = {};
	
	function _addEvent (delegator, type, callback) {
	    // blur and focus do not bubble up but if you use event capturing
	    // then you will get them
	  let useCapture = type === 'blur' || type === 'focus';
	  delegator.element.addEventListener(type, callback, useCapture);
	}
	
	function _cancel (e) {
	  e.preventDefault();
	  e.stopPropagation();
	}
	
	/**
	 * returns function to use for determining if an element
	 * matches a query selector
	 *
	 * @returns {Function}
	 */
	function _getMatcher (element) {
	  if (_matcher) {
	    return _matcher;
	  }
	
	  if (element.matches) {
	    _matcher = element.matches;
	    return _matcher;
	  }
	
	  if (element.webkitMatchesSelector) {
	    _matcher = element.webkitMatchesSelector;
	    return _matcher;
	  }
	
	  if (element.mozMatchesSelector) {
	    _matcher = element.mozMatchesSelector;
	    return _matcher;
	  }
	
	  if (element.msMatchesSelector) {
	    _matcher = element.msMatchesSelector;
	    return _matcher;
	  }
	
	  if (element.oMatchesSelector) {
	    _matcher = element.oMatchesSelector;
	    return _matcher;
	  }
	
	    // if it doesn't match a native browser method
	    // fall back to the delegator function
	  _matcher = EventDelegator.matchesSelector;
	  return _matcher;
	}
	
	/**
	 * determines if the specified element matches a given selector
	 *
	 * @param {Node} element - the element to compare against the selector
	 * @param {string} selector
	 * @param {Node} boundElement - the element the listener was attached to
	 * @returns {void|Node}
	 */
	function _matchesSelector (element, selector, boundElement) {
	    // no selector means this event was bound directly to this element
	  if (selector === '_root') {
	    return boundElement;
	  }
	
	    // if we have moved up to the element you bound the event to
	    // then we have come too far
	  if (element === boundElement) {
	    return;
	  }
	
	    // if this is a match then we are done!
	  if (_getMatcher(element).call(element, selector)) {
	    return element;
	  }
	
	    // if this element did not match but has a parent we should try
	    // going up the tree to see if any of the parent elements match
	    // for example if you are looking for a click on an <a> tag but there
	    // is a <span> inside of the a tag that it is the target,
	    // it should still work
	  if (element.parentNode) {
	    _level++;
	    return _matchesSelector(element.parentNode, selector, boundElement);
	  }
	}
	
	function _addHandler (delegator, event, selector, callback) {
	  if (!_handlers[delegator.id]) {
	    _handlers[delegator.id] = {};
	  }
	
	  if (!_handlers[delegator.id][event]) {
	    _handlers[delegator.id][event] = {};
	  }
	
	  if (!_handlers[delegator.id][event][selector]) {
	    _handlers[delegator.id][event][selector] = [];
	  }
	
	  _handlers[delegator.id][event][selector].push(callback);
	}
	
	function _removeHandler (delegator, event, selector, callback) {
	    // if there are no events tied to this element at all
	    // then don't do anything
	  if (!_handlers[delegator.id]) {
	    return;
	  }
	
	    // if there is no event type specified then remove all events
	    // example: EventDelegator(element).off()
	  if (!event) {
	    for (let type in _handlers[delegator.id]) {
	      if (_handlers[delegator.id].hasOwnProperty(type)) {
	        _handlers[delegator.id][type] = {};
	      }
	    }
	    return;
	  }
	
	    // if no callback or selector is specified remove all events of this type
	    // example: EventDelegator(element).off('click')
	  if (!callback && !selector) {
	    _handlers[delegator.id][event] = {};
	    return;
	  }
	
	    // if a selector is specified but no callback remove all events
	    // for this selector
	    // example: EventDelegator(element).off('click', '.sub-element')
	  if (!callback) {
	    delete _handlers[delegator.id][event][selector];
	    return;
	  }
	
	    // if we have specified an event type, selector, and callback then we
	    // need to make sure there are callbacks tied to this selector to
	    // begin with.  if there aren't then we can stop here
	  if (!_handlers[delegator.id][event][selector]) {
	    return;
	  }
	
	    // if there are then loop through all the callbacks and if we find
	    // one that matches remove it from the array
	  for (let i = 0; i < _handlers[delegator.id][event][selector].length; i++) {
	    if (_handlers[delegator.id][event][selector][i] === callback) {
	      _handlers[delegator.id][event][selector].splice(i, 1);
	      break;
	    }
	  }
	}
	
	function _handleEvent (id, e, type) {
	  if (!_handlers[id][type]) {
	    return;
	  }
	
	  let target = e.target || e.srcElement;
	  let selector;
	  let match;
	  let matches = {};
	  let i = 0;
	  let j = 0;
	
	    // find all events that match
	  _level = 0;
	  for (selector in _handlers[id][type]) {
	    if (_handlers[id][type].hasOwnProperty(selector)) {
	      match = _matchesSelector(target, selector, _delegatorInstances[id].element);
	
	      if (match && EventDelegator.matchesEvent(type, _delegatorInstances[id].element, match, selector === '_root', e)) {
	        _level++;
	        _handlers[id][type][selector].match = match;
	        matches[_level] = _handlers[id][type][selector];
	      }
	    }
	  }
	
	    // stopPropagation() fails to set cancelBubble to true in Webkit
	    // @see http://code.google.com/p/chromium/issues/detail?id=162270
	  e.stopPropagation = function () {
	    e.cancelBubble = true;
	  };
	
	  for (i = 0; i <= _level; i++) {
	    if (matches[i]) {
	      for (j = 0; j < matches[i].length; j++) {
	        if (matches[i][j].call(matches[i].match, e) === false) {
	          EventDelegator.cancel(e);
	          return;
	        }
	
	        if (e.cancelBubble) {
	          return;
	        }
	      }
	    }
	  }
	}
	
	let id = 0;
	function nextId () {
	  return id++;
	}
	
	const aliases = new Map();
	const aliasesDefaultTranslator = name => ([ name ]);
	const aliasesTranslators = {
	  transitionend (name) {
	    let el = document.createElement('fakeelement');
	    let transitions = {
	      'OTransition': 'oTransitionEnd',
	      'MozTransition': 'transitionend',
	      'WebkitTransition': 'webkitTransitionEnd',
	      'transition': 'transitionend',
	    };
	
	    for (let t in transitions) {
	      if (el.style[t] !== undefined) {
	        return [transitions[t]];
	      }
	    }
	  },
	};
	
	function _aliases (name) {
	  let theAliases;
	  if (aliases.has(name)) {
	    theAliases = aliases.get(name);
	  } else {
	    let translator = aliasesTranslators[name] || aliasesDefaultTranslator;
	    theAliases = translator(name);
	    aliases.set(name, theAliases);
	  }
	
	  return theAliases;
	}
	
	/**
	 * binds the specified events to the element
	 *
	 * @param {string|Array} events
	 * @param {string} selector
	 * @param {Function} callback
	 * @param {boolean=} remove
	 * @returns {Object}
	 */
	function _bind (events, selector, callback, remove) {
	    // fail silently if you pass null or undefined as an alement
	    // in the EventDelegator constructor
	  if (!this.element) {
	    return;
	  }
	
	  if (!(events instanceof Array)) {
	    events = [events];
	  }
	
	  if (!callback && typeof (selector) === 'function') {
	    callback = selector;
	    selector = '_root';
	  }
	
	  if (selector instanceof window.HTMLElement) {
	    let id;
	    if (selector.hasAttribute('xin-event-id')) {
	      id = selector.getAttribute('xin-event-id');
	    } else {
	      id = nextId();
	      selector.setAttribute('xin-event-id', id);
	    }
	    selector = `[xin-event-id="${id}"]`;
	  }
	
	  let id = this.id;
	  let i;
	
	  function _getGlobalCallback (type) {
	    return function (e) {
	      _handleEvent(id, e, type);
	    };
	  }
	
	  for (i = 0; i < events.length; i++) {
	    _aliases(events[i]).forEach(alias => {
	      // console.info('> ' + events[i] + ':' + alias);
	      if (remove) {
	        _removeHandler(this, alias, selector, callback);
	        return;
	      }
	
	      if (!_handlers[id] || !_handlers[id][alias]) {
	        EventDelegator.addEvent(this, alias, _getGlobalCallback(alias));
	      }
	
	      _addHandler(this, alias, selector, callback);
	    });
	  }
	
	  return this;
	}
	
	/**
	 * EventDelegator object constructor
	 *
	 * @param {Node} element
	 */
	function EventDelegator (element, id) {
	    // called as function
	  if (!(this instanceof EventDelegator)) {
	        // only keep one EventDelegator instance per node to make sure that
	        // we don't create a ton of new objects if you want to delegate
	        // multiple events from the same node
	        //
	        // for example: EventDelegator(document).on(...
	    for (let key in _delegatorInstances) {
	      if (_delegatorInstances[key].element === element) {
	        return _delegatorInstances[key];
	      }
	    }
	
	    _id++;
	    _delegatorInstances[_id] = new EventDelegator(element, _id);
	
	    return _delegatorInstances[_id];
	  }
	
	  this.element = element;
	  this.id = id;
	}
	
	/**
	 * adds an event
	 *
	 * @param {string|Array} events
	 * @param {string} selector
	 * @param {Function} callback
	 * @returns {Object}
	 */
	EventDelegator.prototype.on = function (events, selector, callback) {
	  return _bind.call(this, events, selector, callback);
	};
	
	/**
	 * removes an event
	 *
	 * @param {string|Array} events
	 * @param {string} selector
	 * @param {Function} callback
	 * @returns {Object}
	 */
	EventDelegator.prototype.off = function (events, selector, callback) {
	  return _bind.call(this, events, selector, callback, true);
	};
	
	EventDelegator.prototype.fire = function (type, detail, options) {
	  options = options || {};
	  detail = detail || {};
	
	  let evt;
	  let bubbles = options.bubbles === undefined ? true : options.bubbles;
	  let cancelable = Boolean(options.cancelable);
	
	  switch (type) {
	    case 'click':
	      evt = new window.Event(type, {
	        bubbles: bubbles,
	        cancelable: cancelable,
	      });
	
	      // TODO check if without this works on every browsers
	      // evt = document.createEvent('HTMLEvents');
	      // evt.initEvent(type, true, false);
	      break;
	    default:
	      evt = new window.CustomEvent(type, {
	        bubbles: Boolean(bubbles),
	        cancelable: cancelable,
	        detail: detail,
	      });
	      break;
	  }
	
	  this.element.dispatchEvent(evt);
	
	  return evt;
	};
	
	EventDelegator.matchesSelector = function () {};
	EventDelegator.cancel = _cancel;
	EventDelegator.addEvent = _addEvent;
	EventDelegator.aliases = _aliases;
	EventDelegator.matchesEvent = function () {
	  return true;
	};
	
	if (typeof module !== 'undefined' && module.exports) {
	  module.exports = EventDelegator;
	}
	
	export default EventDelegator;


/***/ },
/* 15 */
/***/ function(module, exports) {

	function serialize (value) {
	  switch (typeof value) {
	    case 'boolean':
	      return value ? '' : undefined;
	
	    case 'object':
	      if (value instanceof Date) {
	        return value;
	      } else if (value instanceof RegExp) {
	        return value.toString().slice(1, -1);
	      } else if (value) {
	        try {
	          return JSON.stringify(value);
	        } catch (err) {
	          return '';
	        }
	      }
	      break;
	    default:
	      // noop
	  }
	  return value === null ? undefined : value;
	}
	
	function deserialize (value, type) {
	  switch (type) {
	    case Number:
	      value = Number(value);
	      break;
	
	    case Boolean:
	      value = Boolean(value === '' || value === 'true' || value === '1' || value === 'on');
	      break;
	
	    case Object:
	      try {
	        value = JSON.parse(value);
	      } catch (err) {
	        // allow non-JSON literals like Strings and Numbers
	        // console.warn('Failed decode json: "' + value + '" to Object');
	      }
	      break;
	
	    case Array:
	      try {
	        value = JSON.parse(value);
	      } catch (err) {
	        // .console.warn('Failed decode json: "' + value + '" to Array');
	        value = null;
	      }
	      break;
	
	    case Date:
	      value = new Date(value);
	      break;
	
	    case RegExp:
	      value = new RegExp(value);
	      break;
	
	    case Function:
	      value = new Function(value); // eslint-disable-line
	      break;
	
	    // behave like default for now
	    // case String:
	    default:
	      break;
	  }
	  return value;
	}
	
	export { serialize, deserialize };


/***/ },
/* 16 */
/***/ function(module, exports) {

	const requestAnimationFrame = window.requestAnimationFrame ||
	  window.webkitRequestAnimationFrame ||
	  window.mozRequestAnimationFrame ||
	  window.oRequestAnimationFrame ||
	  window.msRequestAnimationFrame;
	
	const cancelAnimationFrame = window.cancelAnimationFrame ||
	  window.webkitCancelRequestAnimationFrame ||
	  window.webkitCancelAnimationFrame ||
	  window.mozCancelRequestAnimationFrame || window.mozCancelAnimationFrame ||
	  window.oCancelRequestAnimationFrame || window.oCancelAnimationFrame ||
	  window.msCancelRequestAnimationFrame || window.msCancelAnimationFrame;
	
	let id = 0;
	function nextId () {
	  return id++;
	}
	
	class Async {
	  static nextFrame (callback) {
	    return requestAnimationFrame(callback);
	    // requestAnimationFrame(() => {
	    // });
	  }
	
	  static run (context, callback, wait) {
	    let asyncO = new Async(context);
	    asyncO.start(callback, wait);
	    return asyncO;
	  }
	
	  constructor (context) {
	    this.id = nextId();
	    this.context = context;
	    this.handle = null;
	    this.frameHandle = null;
	    this.cleared = true;
	  }
	
	  start (callback, wait) {
	    if (typeof callback !== 'function') {
	      throw new Error('Async should specify function');
	    }
	
	    if (!this.cleared) {
	      throw new Error('Async already run');
	    }
	
	    this.cleared = false;
	
	    wait = wait || 0;
	
	    let self = this;
	    let context = this.context;
	    let boundCallback = function () {
	      self.frameHandle = requestAnimationFrame(() => {
	        self.__clear();
	        callback.call(context);
	      });
	    };
	
	    if (wait) {
	      this.handle = setTimeout(boundCallback, wait);
	    } else {
	      boundCallback();
	    }
	  }
	
	  __clear () {
	    this.cleared = true;
	
	    cancelAnimationFrame(~~this.frameHandle);
	    clearTimeout(~~this.handle);
	    this.handle = this.frameHandle = null;
	  }
	
	  cancel () {
	    this.__clear();
	  }
	};
	
	export default Async;


/***/ },
/* 17 */
/***/ function(module, exports) {

	import Async from './async';
	
	class Debounce {
	  constructor (context, immediate) {
	    this.context = context;
	    this.immediate = Boolean(immediate);
	    this.async = null;
	    this.running = false;
	  }
	
	  start (callback, wait) {
	    if (this.immediate) {
	      throw new Error('Unimplemented yet!');
	    }
	
	    this.running = true;
	    this.async = new Async(this.context);
	    this.async.start(() => {
	      callback.call(this.context);
	      this.running = false;
	      this.async = null;
	    }, wait);
	  }
	
	  cancel () {
	    this.running = false;
	    this.async.cancel();
	    this.async = null;
	  }
	}
	
	export default Debounce;


/***/ }
]);
//# sourceMappingURL=xin-analytics.js.map