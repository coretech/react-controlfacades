'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DecoratorCreator = require('./DecoratorCreator');

var _DecoratorCreator2 = _interopRequireDefault(_DecoratorCreator);

var _controls = require('./controls');

var _reactControllables = require('react-controllables');

var _reactControllables2 = _interopRequireDefault(_reactControllables);

var DefaultWrapper = (function (_React$Component) {
  _inherits(DefaultWrapper, _React$Component);

  function DefaultWrapper() {
    _classCallCheck(this, DefaultWrapper);

    _get(Object.getPrototypeOf(DefaultWrapper.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DefaultWrapper, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'span',
        { style: { display: 'inline-block', position: 'relative' } },
        this.props.children
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      children: _react.PropTypes.node
    },
    enumerable: true
  }]);

  return DefaultWrapper;
})(_react2['default'].Component);

var facade = (0, _DecoratorCreator2['default'])({ wrapper: DefaultWrapper })(function (Facade, options) {
  var _ref = options || {};

  var Wrapper = _ref.wrapper;
  var Control = _ref.control;

  var WrappedControl = (function (_React$Component2) {
    _inherits(WrappedControl, _React$Component2);

    function WrappedControl() {
      _classCallCheck(this, _WrappedControl);

      _get(Object.getPrototypeOf(_WrappedControl.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(WrappedControl, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.autoFocus) this.props.onFocusChange(true);
      }
    }, {
      key: 'getLabel',
      value: function getLabel() {
        var value = arguments.length <= 0 || arguments[0] === undefined ? this.props.value : arguments[0];

        var children = this.props.children;
        if (!Array.isArray(children)) children = [children];

        if (children.length) {
          var child = children.find(function () {
            var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var childProps = _ref2.props;
            return childProps && (childProps.value === value || value && childProps.value.toString() === value.toString());
          });
          if (child && child.props.children) return child.props.children.toString();
        }

        return value != null ? value.toString() : null;
      }
    }, {
      key: 'getChecked',
      value: function getChecked() {
        var value = arguments.length <= 0 || arguments[0] === undefined ? this.props.value : arguments[0];

        return !!value;
      }
    }, {
      key: 'handleFocus',
      value: function handleFocus(event) {
        if (this.props.onFocus) this.props.onFocus(event);
        if (event.defaultPrevented) return;
        this.props.onFocusChange(true);
      }
    }, {
      key: 'handleBlur',
      value: function handleBlur(event) {
        if (this.props.onBlur) this.props.onBlur(event);
        if (event.defaultPrevented) return;
        this.props.onFocusChange(false);
      }
    }, {
      key: 'renderFacade',
      value: function renderFacade() {
        // TODO: How to know which props go to facade?
        return _react2['default'].createElement(Facade, _extends({}, this.props, {
          checked: this.getChecked(),
          label: this.getLabel()
        }));
      }
    }, {
      key: 'renderControl',
      value: function renderControl() {
        // TODO: How to know which props go to control?
        return _react2['default'].createElement(Control, _extends({}, this.props, {
          onFocus: this.handleFocus.bind(this),
          onBlur: this.handleBlur.bind(this)
        }));
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          Wrapper,
          null,
          this.renderFacade(),
          this.renderControl()
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.bool]),
        children: _react.PropTypes.array,
        focus: _react.PropTypes.bool,
        autoFocus: _react.PropTypes.bool,
        onFocusChange: _react.PropTypes.func,
        onFocus: _react.PropTypes.func,
        onBlur: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'defaultProps',
      value: {
        focus: false,
        autoFocus: false
      },
      enumerable: true
    }]);

    var _WrappedControl = WrappedControl;
    WrappedControl = (0, _reactControllables2['default'])(['value', 'focus'])(WrappedControl) || WrappedControl;
    return WrappedControl;
  })(_react2['default'].Component);

  return WrappedControl;
});

exports.facade = facade;
var checkbox = (0, _DecoratorCreator2['default'])({ control: _controls.CheckboxControl })(facade);
exports.checkbox = checkbox;
var select = (0, _DecoratorCreator2['default'])({ control: _controls.SelectControl })(facade);
exports.select = select;